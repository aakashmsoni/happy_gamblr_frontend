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
        <Header />
        {localStorage.jwt === undefined ? (
          <div className="row">
            <div className="col-sm-4 ms-5 mt-5">
              <div className="card border-primary text-center m-5 p-2 ps-3 pe-3">
                <Login />
              </div>
              {/* <p className="text-center">or</p> */}
              <div className="card text-center m-5 p-2 pb-3 ps-3 pe-3">
                <Signup />
              </div>
            </div>
          </div>
        ) : (
          <div>
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
