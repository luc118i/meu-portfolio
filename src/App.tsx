import Background from "./components/Background";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import ProjectsSection from "./components/ProjectsSection";
import QuoteSection from "./components/QuoteSection";
import SkillsSection from "./components/SkillsSection";

import { Container } from "./styles/Container";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Background />
        <QuoteSection
          text="One day you'll leave this world behind, so live a life you will remember."
          author="Avicii - The Nights"
        />
        <Presentation />
        <ProjectsSection />
        <SkillsSection />
      </Container>
    </>
  );
}

export default App;
