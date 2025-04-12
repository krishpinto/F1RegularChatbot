
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your F1 Guru. Ask me anything about Formula 1 - races, drivers, teams, or regulations!'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [apiKeySet, setApiKeySet] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    if (!apiKeySet) {
      toast({
        title: "OpenAI API Key Required",
        description: "My Free tier ended so enter youw oen key to try thr bot",
        variant: "destructive"
      });
      return;
    }
    
    // Add user message to chat
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'You are F1 Guru, an AI assistant specialized in Formula 1 racing. Provide accurate, concise answers about F1 history, drivers, teams, rules, and current events. Use a friendly, enthusiastic tone that conveys the excitement of motorsport. Include relevant statistics when appropriate. If asked about non-F1 topics, politely redirect to F1-related discussions.'
            },
            ...messages.map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            { role: 'user', content: input }
          ],
          temperature: 0.7,
          max_tokens: 1000
        })
      });
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'Error communicating with OpenAI');
      }
      
      // Add AI response to chat
      if (data.choices && data.choices[0] && data.choices[0].message) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: data.choices[0].message.content
        }]);
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get a response",
        variant: "destructive"
      });
      
      // Add error message to chat
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm having trouble connecting to my knowledge base. Please check your API key or try again later."
      }]);
    }
    
    setIsLoading(false);
  };

  const handleSetApiKey = () => {
    if (apiKey.trim().startsWith('sk-') && apiKey.length > 20) {
      setApiKeySet(true);
      toast({
        title: "API Key Set",
        description: "Your OpenAI API key has been set successfully",
      });
    } else {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid OpenAI API key starting with 'sk-'",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="chat" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-f1-navy mb-4">Ask the F1 Guru</h2>
          <div className="h-1 w-20 bg-f1-red mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto font-montserrat">
            Powered by OpenAI, our F1 Guru can answer all your Formula 1 questions. Enter your OpenAI API key to get started.
          </p>
        </div>

        {!apiKeySet ? (
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your OpenAI API Key
              </label>
              <input
                type="password"
                id="apiKey"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-f1-red focus:border-f1-red"
                placeholder="sk-..."
              />
            </div>
            <Button 
              onClick={handleSetApiKey}
              className="w-full bg-f1-red hover:bg-f1-red/80"
            >
              Set API Key
            </Button>
            <p className="mt-4 text-xs text-gray-500">
              Your API key is stored locally in your browser and is never sent to our servers.
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-f1-navy p-4 flex items-center">
              <Bot className="h-6 w-6 text-white mr-2" />
              <h3 className="text-white font-montserrat font-medium">F1 Guru Chat</h3>
            </div>
            
            <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.role === 'user' ? 'ml-auto max-w-[80%]' : 'mr-auto max-w-[80%]'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-f1-navy text-white ml-auto'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      {message.role === 'assistant' ? (
                        <Bot className="h-4 w-4 mr-1" />
                      ) : (
                        <User className="h-4 w-4 mr-1" />
                      )}
                      <span className="text-xs font-semibold">
                        {message.role === 'assistant' ? 'F1 Guru' : 'You'}
                      </span>
                    </div>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
              
              {isLoading && (
                <div className="flex justify-center items-center p-4">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-f1-red rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="h-2 w-2 bg-f1-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 w-2 bg-f1-red rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about drivers, teams, races..."
                  className="min-h-[60px] flex-grow resize-none"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  className="bg-f1-red hover:bg-f1-red/80 px-4"
                  disabled={isLoading}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        )}
        
        <div className="flex justify-center mt-8">
          <ChevronDown className="animate-bounce text-f1-navy h-8 w-8" />
        </div>
      </div>
    </section>
  );
};

export default ChatBot;
