export function OverviewItem(props) {
  return (
    <div className="balance-box">
        <h2>{props.title}</h2>
        <p>{props.value}</p>
      </div>
  );
}