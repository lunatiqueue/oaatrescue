import { NavLink } from 'react-router-dom';
import logo from '../Logo White.png';

export const Header = () => {
  return (
    <header style={{ height: '15vh' }}>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          height: '100%',
          backgroundColor: '#248188',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <NavLink className="navbar-brand p-0" to="/">
            <img src={logo} alt="Logo" height="60" />
          </NavLink>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: 'invert(1)' }}
            />
          </button>

          {/* Menu */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="mainNavbar"
          >
            <ul className="navbar-nav align-items-center">
              {[
                { to: '/about', label: 'About' },
                { to: '/adopt', label: 'Adopt' },
                { to: '/foster', label: 'Foster' },
                { to: '/events', label: 'Events' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `nav-link px-3 fw-normal ${
                        isActive ? 'active-link' : 'text-white'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}

              {/* Donate Button */}
              <li className="nav-item ms-3">
                <NavLink to="/donate" className="btn btn-donate px-3 py-2">
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};