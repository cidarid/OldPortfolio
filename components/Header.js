export default function Header({ title }) {
  return <h1 className="header">{title ? title : 'Default title'}</h1>
}
