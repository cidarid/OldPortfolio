export default function JobHeader({title, link, dates, details}) {
  return <>
    <p style={{textAlign: "left"}}><strong><a href={link}>{title}</a></strong>
      <span style={{float: "right"}}>{dates}</span></p>
    <ul>
      {details ? details.map(task => (<li>{task}</li>)) : null}
    </ul>
  </>;
}
