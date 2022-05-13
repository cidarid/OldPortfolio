export default function Quote({ text, quotee, quoteeRole }) {
  return <div class="quote">
    <h2>"{text ? text : 'Default text'}"</h2>
    <p>
      <strong>{quotee ? quotee : 'Default quotee'}</strong>
      <br/>
      <span>{quoteeRole ? quoteeRole : null }</span>
    </p>
  </div>
}
