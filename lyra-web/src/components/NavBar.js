import navIcon2 from '../assets/nav-icon4.svg';
import navIcon3 from '../assets/nav-icon3.svg';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-1 mt-3" id="menu">
      <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Promos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#seccion-contacto">
                Contacto
              </a>
            </li>
          </ul>
          <div className="social-icon">
                <a href="https://www.facebook.com/profile.php?id=100064069295797&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noreferrer"><img src={navIcon2} alt="github-icon" /></a>
                <a href="https://www.instagram.com/lyra.distribuidora?utm_source=qr&igsh=YjE5NDMyY2FhOQ==" target="_blank" rel="noreferrer"><img src={navIcon3} alt="instagram-icon" /></a>
              </div>
        </div>
    </nav>
  );
};
