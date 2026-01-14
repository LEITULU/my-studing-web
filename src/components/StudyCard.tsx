type Props = {
  title: string;
  description: string;
};

function StudyCard({ title, description }: Props) {
  return (
    <div className="study-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default StudyCard;
