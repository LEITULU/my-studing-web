import StudyCard from "./StudyCard";
import "../../css/study.css";

const studyList = [
  { title: "React基礎", description: "useState / useEffect", slug: "react-basics" },
  { title: "TypeScript", description: "型定義とinterface", slug: "typescript" },
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
