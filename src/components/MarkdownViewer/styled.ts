// MarkdownViewer.styled.ts
import styled from "styled-components";

export const MarkdownContainer = styled.div`
  &.markdown-body {
    background-color: #161b22; /* Fundo escuro */
    padding: 20px;
    border-radius: 4px;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin: 20px 0;

    /* Sobrescrevendo estilos do github-markdown-css se necessário */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 1.2em;
      margin-bottom: 0.6em;
      font-weight: bold;
    }
    p {
      margin-bottom: 1em;
    }
    ul,
    ol {
      margin-left: 2em;
      margin-bottom: 1em;
    }
    li {
      margin-bottom: 0.5em;
    }
    blockquote {
      margin: 1em 0;
      padding: 0.5em 1em;
      border-left: 4px solid #00adb5;
      background-color: rgba(0, 0, 0, 0.2);
      color: #ddd;
    }
    code {
      background-color: #2f2f2f;
      padding: 0.2em 0.4em;
      border-radius: 4px;
      font-family: "Fira Code", "Courier New", Courier, monospace;
      color: ffffff;
    }
    pre {
      background-color: #2f2f2f;
      padding: 1em;
      border-radius: 4px;
      overflow-x: auto;
      margin: 1em 0;
      font-family: "Fira Code", "Courier New", Courier, monospace;
      color: #ffffff;
    }
    a {
      color: #00adb5;
      text-decoration: underline;
    }
  }
`;
