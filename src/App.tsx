import React from "react";

import Body from "./components/Body";
import Header from "./components/Header";

import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Body />
    </div>
  );
}

export default App;
