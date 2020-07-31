import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Home from "./pages/Home/Home";
import ImageModal from "./pages/ImageModal/ImageModal";

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div className="App">
      <div>
        <Switch location={background || location}>
          <Route path="/" children={<Home />} />
        </Switch>
        {background && <Route path="/media/:id" children={<ImageModal />} />}
      </div>
    </div>
  );
}

export default App;
