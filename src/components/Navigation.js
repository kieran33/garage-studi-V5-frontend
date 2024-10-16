import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../image/logo_og-removebg-preview.png";

const Navigation = () => {
  const navigate = useNavigate();

  const goConnexion = () => {
    navigate("/connexion");
  };

  const goAccueil = () => {
    navigate("/");
  };

  const ouvertOuFermer = localStorage.getItem("ouvert ou fermer");
  const etatConnexion = localStorage.getItem("etat connexion");
  const admin = localStorage.getItem("compte admin");

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    // Ajoutez d'autres éléments à supprimer si nécessaire, comme 'connected'
    navigate("/connexion");
  };

  return (
    <>
      <nav className="navigation-container navbar navbar-expand-lg">
        <div className="container-fluid">
          {!token && ouvertOuFermer === "fermer" ? (
            <div className="navigation">
              <button className="bouton-espace-pro" onClick={goConnexion}>
                Espace professionnel
              </button>
            </div>
          ) : (
            <div className="navigation">
              <div className="logo-container">
                <img
                  src={logo}
                  className="garage-logo navbar-brand"
                  alt="logo garage v parrot"
                  onClick={goAccueil}
                />
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Collapsible navigation menu */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      Accueil
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/occasions" className="nav-link">
                      Nos occasions
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                      Contact
                    </NavLink>
                  </li>

                  {/* Links for dashboard if token is available */}
                  {token && (
                    <>
                      {role === "Admin" && (
                        <li className="nav-item">
                          <NavLink to="/dashboard-admin" className="nav-link">
                            Dashboard Admin
                          </NavLink>
                        </li>
                      )}
                      {role === "Employé" && (
                        <li className="nav-item">
                          <NavLink to="/dashboard-employe" className="nav-link">
                            Dashboard Employé
                          </NavLink>
                        </li>
                      )}
                    </>
                  )}
                </ul>

                {/* Right-side buttons (Espace professionnel or Se déconnecter) */}
                <div className="d-flex">
                  {!token ? (
                    <button className="btn btn-primary" onClick={goConnexion}>
                      Espace professionnel
                    </button>
                  ) : (
                    <button className="btn btn-danger" onClick={handleLogout}>
                      Se déconnecter
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
