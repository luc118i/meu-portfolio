import React from "react";
import {
  QuoteContainer,
  QuoteText,
  AuthorContainer,
  AuthorPhoto,
  AuthorName,
} from "./styles";

interface QuoteProps {
  text: string;
  author: string;
  photo?: string;
}

const QuoteSection: React.FC<QuoteProps> = ({ text, author, photo }) => {
  return (
    <QuoteContainer>
      <QuoteText>{text}</QuoteText>
      <AuthorContainer>
        {photo && <AuthorPhoto src={photo} alt={author} />}
        <AuthorName> {author}</AuthorName>
      </AuthorContainer>
    </QuoteContainer>
  );
};

export default QuoteSection;
