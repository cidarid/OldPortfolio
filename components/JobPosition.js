export default function JobHeader({title, employer, location, contact, dates, tasks}) {
  return <>
    <p style={{textAlign: "left"}}><strong>{title + (employer ? ' | ' + employer : null)}</strong> – {location}
      {contact ? ", " + contact : null}<span style={{float: "right"}}>{dates}</span></p>
    <ul>
      {tasks ? tasks.map(task => (<li>{task}</li>)) : null}
    </ul>
  </>;
}
