import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="nav-inner" aria-label="Principal">
        <a className="brand" href="#" aria-label="Inicio">
          Vuelos y Más
        </a>

        <ul className="nav-links">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#destinos">Destinos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>

        <CartWidget />
      </nav>
    </header>
  );
}
