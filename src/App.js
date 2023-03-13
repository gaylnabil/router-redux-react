import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routers";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Header from "./layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Routers />
        </div>
        <hr />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
