# Documentação do Portfólio

## Visão Geral
Este projeto é um portfólio desenvolvido utilizando **React**, **TypeScript** e **Styled Components** para a estilização. O armazenamento de dados é feito no **Supabase**, proporcionando uma solução eficiente para gerenciamento de informações.

O portfólio foi estruturado de forma modular, separando cada seção em componentes individuais, garantindo um código mais organizado e reutilizável.

## Tecnologias Utilizadas
- **React**: Biblioteca para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Styled Components**: Para estilização utilizando CSS-in-JS.
- **Supabase**: Banco de dados para armazenar informações dinâmicas do portfólio.

## Estrutura do Projeto
O projeto é composto por diversos componentes que representam as seções do portfólio:
- **Background**: Define o plano de fundo da aplicação.
- **Header**: Contém a navegação principal.
- **Presentation**: Seção de apresentação do portfólio.
- **ProjectsSection**: Exibe os projetos desenvolvidos.
- **QuoteSection**: Mostra uma citação motivacional.
- **SkillsSection**: Lista as habilidades do desenvolvedor.

Componentes

1. Header

O Header é o componente responsável pela navegação do portfólio, contendo links para as redes sociais do desenvolvedor. Ele foi construído utilizando Styled Components para a estilização e React Icons para os ícones das redes sociais.

Tecnologias utilizadas

React: Para a estrutura do componente.

Styled Components: Para estilização dos elementos.

React Icons: Para exibição dos ícones de LinkedIn, GitHub e E-mail.

Estrutura do Código

HeaderContainer: Um header estilizado que define o tamanho, espaçamento e cores do cabeçalho.

Nav: Um nav flexível contendo os links de navegação.

LinkItem: Um a estilizado que define os links para as redes sociais com ícones e textos responsivos.

O componente React Header renderiza o cabeçalho contendo os links para LinkedIn, GitHub e e-mail do desenvolvedor.

# Documentação do Componente Background

## Visão Geral
O componente `Background` é responsável por renderizar o plano de fundo do aplicativo, incluindo formas estilizadas e um sistema de troca de tema (claro e escuro). Além disso, ele escuta eventos de rolagem para controlar a exibição de um botão de alternância de tema.

## Tecnologias Utilizadas
- **React** para a estrutura do componente.
- **Styled-components** para a estilização e temas dinâmicos.
- **TypeScript** para tipagem segura.

## Estrutura do Código
### 1. **Componente Principal (`Background.tsx`)**
- Define um estado `themeMode` para alternar entre os temas claro e escuro.
- Monitora o evento de rolagem da página para controlar a exibição do botão de alternância de tema.
- Renderiza o container de fundo (`BackgroundContainer`), formas estilizadas (`Shape1` a `Shape7`) e o botão de alteração de tema (`ToggleButton`).

### 2. **Estilização (`styles.ts`)**
- Define o `BackgroundContainer`, que ajusta a cor de fundo conforme o tema.
- Aplica estilos dinâmicos às formas (`Shape1` a `Shape7`) usando `styled-components`, com transições suaves para mudanças de tema.

### 3. **Temas (`types.ts`)**
- Define a interface `Theme`, que especifica as propriedades de cor para o fundo e formas.
- Fornece dois objetos de tema (`lightTheme` e `darkTheme`) com cores personalizadas.
- Define o tipo `ThemeMode`, que pode ser `"light"` ou `"dark"`.

## Principais Funcionalidades
1. **Alternância de Tema**
   - O botão `ToggleButton` permite alternar entre os temas claro e escuro.
   - A cor de fundo e das formas muda dinamicamente.

2. **Monitoramento de Rolagem**
   - O estado `isScrolled` define se o botão de alternância de tema deve ser exibido ou ocultado com base no deslocamento da página.

3. **Responsividade**
   - As formas são ajustadas para diferentes tamanhos de tela usando `@media (max-width: 768px)`.

## Exemplo de Uso
```tsx
import Background from "./components/Background";

function App() {
  return (
    <div>
      <Background />
    </div>
  );
}

export default App;
```

## Considerações
- O componente pode ser expandido para suportar temas adicionais.
- Melhorias podem incluir animações para as formas ou adição de gradientes dinâmicos.

Este componente cria uma experiência visual interativa e dinâmica para o usuário, proporcionando uma transição fluida entre os temas claro e escuro.



