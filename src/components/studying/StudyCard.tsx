import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  slug: string;
};

function StudyCard({ title, description, slug }: Props) {
  return (
    <>
    <Link to={`/study/${slug}`} className="study-card">
      <h3>{ title }</h3>
      <p>{ description }</p>
    </Link>
    </>
  );
}

export default StudyCard;
