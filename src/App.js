import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-12">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<Details />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
