import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { chatWithHealthAssistant } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "Hello! I'm VitalBot. How can I assist you with our health services today?" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: MessageRole.USER, text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      // Prepare history for API (excluding current user message which is passed as prompt)
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      
      const responseText = await chatWithHealthAssistant(userMsg.text, history);
      
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: MessageRole.MODEL, 
        text: "I'm having trouble connecting right now. Please try again later.",
        isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-teal-600 hover:bg-teal-700'
        } text-white`}
        aria-label="Toggle Health Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50 transition-all duration-300 origin-bottom-right overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px' }}
      >
        {/* Header */}
        <div className="bg-teal-600 p-4 flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-full">
            <Bot className="text-white h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-white">VitalBot Assistant</h3>
            <p className="text-teal-100 text-xs">Always here to help</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-2.5 ${
                msg.role === MessageRole.USER ? 'flex-row-reverse' : ''
              }`}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === MessageRole.USER ? 'bg-blue-100' : 'bg-teal-100'
                }`}
              >
                {msg.role === MessageRole.USER ? (
                  <User size={16} className="text-blue-600" />
                ) : (
                  <Bot size={16} className="text-teal-600" />
                )}
              </div>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === MessageRole.USER 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-100 shadow-sm rounded-bl-none'
                } ${msg.isError ? 'bg-red-50 border-red-200 text-red-600' : ''}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <Bot size={16} className="text-teal-600" />
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-100 shadow-sm">
                 <Loader2 className="animate-spin h-4 w-4 text-slate-400" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your question..."
              className="flex-1 bg-slate-100 border-0 rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all outline-none"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!inputText.trim() || isLoading}
              className="p-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-2">
            AI can make mistakes. Please consult a doctor for medical advice.
          </p>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;