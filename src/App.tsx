import React from "react";
import "./App.css";
import Header from "./view/header";
import Main from "./view/main";
import Footer from "./view/footer";
import { UserProvider } from "./store/UserContext";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Main />
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
