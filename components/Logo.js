export default function Header({ title }) {
  return <h1 class="logo">{title ? title : 'Default title'}</h1>
}
