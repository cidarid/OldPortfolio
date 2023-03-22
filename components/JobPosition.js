export default function JobHeader({title, employer, location, dates, tasks}) {
  return <>
    <p style={{textAlign: "left"}}><strong>{title + (employer ? ' | ' + employer : null)}</strong> – {location}
      <span style={{float: "right"}}>{dates}</span></p>
    <ul>
      {tasks ? tasks.map(task => (<li>{task}</li>)) : null}
    </ul>
  </>;
}
