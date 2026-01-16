import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Study from "./components/studying/Study";
import StudyDetail from "./components/studying/pages/StudyDetail";


import "./css/App.css"

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="logo">私の学習記録</div>
        <nav className="nav">
          <Link to="/">ホーム</Link>
          <Link to="/react-study">学習記録</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/react-study" element={<Study />} />
        <Route path="/study/:slug" element={<StudyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
