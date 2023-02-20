export default function Header({ title }) {
  return <h1 className="logo">{title ? title : 'Default title'}</h1>
}
