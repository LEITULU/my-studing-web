import { useParams } from "react-router-dom";

function StudyDetail() {
  const { slug } = useParams<{ slug: string }>();

  return (
  <div> 
    <h2>{slug} の学習内容</h2>
  </div>
  );
}

export default StudyDetail;
