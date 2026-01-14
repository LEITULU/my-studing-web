import StudyCard from "./StudyCard";
import "../../css/study.css";

function Study() {
  return (
    <div className="study">
      <h2>学習記録一覧</h2>

      <div className="study-list">
        <StudyCard title="React 基礎" description="useState / useEffect" />
        <StudyCard title="TypeScript" description="型定義とinterface" />
      </div>
    </div>
  );
}

export default Study;
