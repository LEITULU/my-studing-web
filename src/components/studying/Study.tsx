import StudyCard from "./StudyCard";
import "../../css/study.css";

const studyList = [
  { title: "npm入門", description: "", slug: "npm-introduction" },
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
