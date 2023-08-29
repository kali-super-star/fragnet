import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Header from "./components/header";
import HomePage from "./pages/home";
import GamePage from "./pages/GamePage";
import Location from "./pages/order/Location";
import GameServers from "./pages/GameServers";
import Order from "./pages/order";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className={`min-h-screen font-proxima`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games/:slug" element={<GamePage />} />
            <Route path={`/locations`} element={<Location />} />
            <Route path={"/games/:slug/order"} element={<Order />} />
            <Route path={"/page/gameservers/"} element={<GameServers />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
