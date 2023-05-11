import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        {localStorage.jwt === undefined ? (
          <div>
            <Login />
            <Signup />
          </div>
        ) : (
          <div>
            <Header />
            <div className="p-4">
              <Content />
            </div>
            <Footer />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
