import ReactMarkdown from "react-markdown";
import { ImageViewer } from "./ImageViewer";

interface ChatMessageProps {
  message: {
    role: "user" | "assistant";
    content: string;
    imageUrl?: string;
  };
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
      className={`flex ${
        message.role === "user" ? "justify-end" : "justify-start"
      } mb-4 relative z-[40]`}
    >
      <div
        className={`max-w-[80%] ${
          message.role === "user"
            ? "bg-orange-500 text-white"
            : "bg-gray-100 dark:bg-gray-800"
        } rounded-lg p-4`}
      >
        <div className="prose dark:prose-invert">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
        {message.imageUrl && (
          <ImageViewer src={message.imageUrl} alt="Generated by DALL-E" />
        )}
      </div>
    </div>
  );
};
