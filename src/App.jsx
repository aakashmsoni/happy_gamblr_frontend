import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import { useState } from "react";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import "./App.scoped.scss";

function App() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <div>
      <BrowserRouter>
        {localStorage.jwt === undefined ? (
          <div>
            <h1>HappyGamblr</h1>
            <Login onSignup={setIsSignupVisible} onClose={handleClose} />
            <Modal show={isSignupVisible} onClose={handleClose}>
              <Signup />
            </Modal>
          </div>
        ) : (
          <div>
            <Header />
            <div className="p-4">
              <Content />
            </div>
          </div>
        )}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
