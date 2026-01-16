import StudyCard from "./StudyCard";
import "../../css/study.css";

const studyList = [
  { title: "React基礎", description: "useState / useEffect", slug: "react-basics" },
  { title: "TypeScript", description: "型定義とinterface", slug: "typescript" },
  { title: "ReactRouter", description: "ルーティングの基本", slug: "react-router" },
  { title: "状態管理", description: "Redux入門", slug: "redux-intro" }
]

function Study() {
  return (
    <div className="study-list">
      {studyList.map((item) => (
        <StudyCard key={item.slug} {...item} />
      ))}
    </div>
  );
}

export default Study;
