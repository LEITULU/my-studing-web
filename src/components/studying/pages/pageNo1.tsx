import { useLocation } from "react-router-dom";

function pageNo1() {
  const location = useLocation();
  const { title } = location.state as { title: string };

  return (
    <>
    <div>
      <h2>{ title }</h2>
      <div></div>
    </div>
    </>
  )
}

export default pageNo1;