import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Send } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you with your iGaming compliance and corporate service needs. How can I assist you today?",
      isBot: true,
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const predefinedQuestions = [
    "What services do you offer?",
    "How can I get started?", 
    "What jurisdictions do you support?",
    "Tell me about compliance services",
  ];

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: currentMessage,
      isBot: false,
    };

    setMessages([...messages, newMessage]);
    setCurrentMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your message. One of our experts will get back to you shortly. In the meantime, feel free to explore our services or contact us directly at info@spinanchor.com",
        isBot: true,
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuestionClick = (question: string) => {
    setCurrentMessage(question);
  };

  return (
    <>
      {/* Chat button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-corporate-gold to-warm-coral hover:from-corporate-gold/90 hover:to-warm-coral/90 shadow-elegant"
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
        <div className="fixed bottom-24 right-6 w-80 max-h-96 z-50">
          <Card className="border-border bg-card shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-professional-navy to-professional-blue text-foreground p-4">
              <CardTitle className="text-lg font-semibold text-white">
                SpinAnchor Support
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-64 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg text-sm ${
                        message.isBot
                          ? "bg-muted text-muted-foreground"
                          : "bg-gradient-to-r from-corporate-gold to-warm-coral text-background"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
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
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-gradient-to-r from-corporate-gold to-warm-coral hover:from-corporate-gold/90 hover:to-warm-coral/90"
                >
                  <Send className="h-4 w-4" />
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