import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with your iGaming compliance and corporate service needs. How can I assist you today?",
      isBot: true,
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const predefinedQuestions = [
    "What services do you offer?",
    "How can I contact you?",
    "What jurisdictions do you support?",
    "Tell me about licensing",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: currentMessage,
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = currentMessage;
    setCurrentMessage("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat-agent", {
        body: { message: messageToSend },
      });

      if (error) {
        throw new Error(error.message);
      }

      const botResponse: Message = {
        id: messages.length + 2,
        text: data.response,
        isBot: true,
      };

      setMessages(prev => [...prev, botResponse]);

      if (data.inquiryLogged) {
        toast({
          title: "Inquiry Submitted",
          description: "We've logged your question and will follow up soon.",
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorResponse: Message = {
        id: messages.length + 2,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again or contact us directly at info@nsgs.pro",
        isBot: true,
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionClick = (question: string) => {
    setCurrentMessage(question);
  };

  return (
    <>
      {/* Chat button */}
      <div className="fixed bottom-6 right-24 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
          size="icon"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-24 w-80 sm:w-96 max-h-[500px] z-50">
          <Card className="border-border bg-card shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-foreground to-foreground/90 text-background p-4">
              <CardTitle className="text-lg font-semibold">
                NSGS Global Support
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-72 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-wrap ${
                        message.isBot
                          ? "bg-muted text-muted-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-muted-foreground p-3 rounded-lg text-sm flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Thinking...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick questions */}
              <div className="border-t border-border p-3">
                <div className="text-xs text-muted-foreground mb-2">Quick questions:</div>
                <div className="flex flex-wrap gap-1">
                  {predefinedQuestions.map((question) => (
                    <Button
                      key={question}
                      variant="outline"
                      size="sm"
                      className="text-xs h-auto py-1 px-2"
                      onClick={() => handleQuestionClick(question)}
                      disabled={isLoading}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="border-t border-border p-3 flex gap-2">
                <Input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isLoading}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && !isLoading) {
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                  disabled={isLoading || !currentMessage.trim()}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
