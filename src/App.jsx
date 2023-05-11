import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";
// import { Signup } from "./Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        {localStorage.jwt === undefined ? (
          <div className="row">
            <div className="col-sm-4 mx-auto">
              <div className="card text-center m-5 pb-3">
                <Login />
              </div>
              {/* <p className="text-center">or</p> */}
              <div className="card text-center m-5 pb-3 ps-3 pe-3">
                <Signup />
              </div>
            </div>
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
