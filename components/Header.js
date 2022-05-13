export default function Header({ title }) {
  return <h1 class="header">{title ? title : 'Default title'}</h1>
}
