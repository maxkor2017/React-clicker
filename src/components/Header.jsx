import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" className="header__img" />
      <h1 className="header__title">Clicker</h1>
    </header>
  );
}
