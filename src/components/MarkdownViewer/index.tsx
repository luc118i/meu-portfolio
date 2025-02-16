import ReactMarkdown from "react-markdown";
import { MarkdownContainer } from "./styled";

interface MarkdownViewerProps {
  content: string;
}

export function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <MarkdownContainer className="markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </MarkdownContainer>
  );
}
