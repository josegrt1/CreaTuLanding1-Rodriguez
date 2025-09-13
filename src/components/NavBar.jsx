import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
  
    <header className="navbar">
      <nav className="nav-inner" aria-label="Principal">
        <a className="brand" href="#home" aria-label="Inicio">
        <img src="/logo.svg" alt="Vuelos y Más" className="brand-logo" />
        <span className="sr-only">Vuelos y Más</span>
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

