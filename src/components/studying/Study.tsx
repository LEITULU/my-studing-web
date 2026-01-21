import StudyCard from "./StudyCard";
import "../../css/study.css";

const studyList = [
  { title: "初めに....", description: "", slug: "pageNo1" },
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
