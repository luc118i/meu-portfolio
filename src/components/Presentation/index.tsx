import {
  PresentationContainer,
  SectionTitle,
  TextContainer,
  TextBlock,
  StyledHr,
} from "./styles";

const Presentation = () => {
  return (
    <PresentationContainer>
      <SectionTitle>Sobre Mim</SectionTitle>

      <TextContainer>
        <TextBlock position="left">
          <h3>Esse sou eu</h3>
          <p>
            Olá, meu nome é Lucas. Sou estudante de Análise e Desenvolvimento de
            Sistemas (ADS) e um entusiasta da tecnologia. Tenho um olhar atento
            aos detalhes, sempre buscando soluções eficientes e bem
            estruturadas. Tenho um conhecimento maior em Front-end,
            especialmente com React, e estou sempre explorando novas tecnologias
            para aprimorar minhas habilidades.
          </p>
        </TextBlock>

        <TextBlock position="center">
          <h3>Foco</h3>
          <p>
            Atualmente, estou me aprofundando em C#, Python e Big Data, com o
            objetivo de me tornar um desenvolvedor Full Stack. Além da
            programação, sou apaixonado por futebol e vejo na tecnologia uma
            forma de transformar ideias em realidade.
          </p>
        </TextBlock>

        <TextBlock position="right">
          <h3>De olho</h3>
          <p>
            Para o futuro, meus planos incluem aprimorar meu inglês, ingressar
            no mercado de Cloud Computing e continuar expandindo meu
            conhecimento em desenvolvimento. Estou sempre em busca de desafios
            que me ajudem a crescer profissionalmente e alcançar novos patamares
            na área de tecnologia.
          </p>
        </TextBlock>
      </TextContainer>
      <StyledHr />
    </PresentationContainer>
  );
};

export default Presentation;
