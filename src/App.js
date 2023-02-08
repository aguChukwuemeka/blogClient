import "./App.css";
import Navigationbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Write from "./pages/write";
import Settings from "./pages/settings";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  let user = true;
  return (
    <div className="bg bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900">
      <Router>
        <nav style={{ paddingBottom: "4em" }}>
          <Navigationbar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/write" element={<Write />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="post/:postId" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
