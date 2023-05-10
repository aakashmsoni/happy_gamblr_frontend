import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="p-5">
          <Content />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
