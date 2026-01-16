import { useParams } from "react-router-dom";
import { Suspense } from "react";
import { studyPages } from "./index";

function StudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const Page = slug ? studyPages[slug as keyof typeof studyPages] : null;

  if (!Page) {
    return <div>ページが見つかりません</div>
  }

  return (
  <>
  <Suspense fallback={<div>読み込み中...</div>}>
    <Page />
  </Suspense>
  </>
  );
}

export default StudyDetail;
