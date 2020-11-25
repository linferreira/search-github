import React from "react";
import * as ReactRedux from "react-redux";

import GlobalStyle from "./styles/GlobalStyles";

import Content from "./page/Content";

import configureStore from "./redux/configureStore";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ReactRedux.Provider store={store}>
        <Content />
      </ReactRedux.Provider>
    </div>
  );
}

export default App;
