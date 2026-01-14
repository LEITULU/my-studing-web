import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
};

function StudyCard({ title, description }: Props) {
  return (
    <>
    <Link to={`/study/${encodeURIComponent(title)}`} className="study-card">
      <h3>{ title }</h3>
      <p>{ description }</p>
    </Link>
    </>
    
  );
}

export default StudyCard;
