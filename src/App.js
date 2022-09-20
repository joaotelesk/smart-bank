import React, { useState } from "react";
import { GlobalStyle } from "./Components/GlobalStyle";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/UI";
import SwicherTema from "./Components/SwicherTema";

function App() {
  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    setTema((tema) => !tema);
  };
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <BtnTema onClick={toggleTema}>
        <SwicherTema tema={tema} />
      </BtnTema>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
