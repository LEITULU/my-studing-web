import Myicon from "../assets/my-icon.jpg";
import "../css/Profile.css";

function Profile() {
  return (
    <>
    <div className="title">
      <h2>ホーム</h2>
    </div>
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
    </>
  );
}

export default Profile;
