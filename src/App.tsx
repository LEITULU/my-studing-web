import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Myicon from "./assets/my-icon.jpg";
import "./css/App.css";
import "./css/Profile.css";


function Profile() {
  return (
    <div className="profile">

      <img
        src={Myicon}
        alt="icon"
        className="profile-icon"
      />

      <h2 className="profile-name">レイツル</h2>

      <p className="profile-bio">
        学習記録を残すためのサイトを作っています。
      </p>

      <div className="profile-links">
        <a
          href="https://x.com/LEITULUmain"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>

        <a
          href="https://github.com/LEITULU"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

function ReactStudy() {
  return (
    <h2>学習記録一覧</h2>
  );
}


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
        <Route path="/react-study" element={<ReactStudy />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
