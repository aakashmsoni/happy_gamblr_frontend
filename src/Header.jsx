import { useState } from "react";
import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import "./Header.scoped.scss";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src="/src/assets/hlogo.jpeg" alt="logo" /> */}
            HappyGamblr
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            {localStorage.jwt === undefined ? (
              <div>
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                    Hello!
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to={setIsSignupVisible}>
                        Create Account
                      </Link>
                      <div>
                        <Modal show={isSignupVisible} onClose={handleClose}>
                          <Signup />
                        </Modal>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                    Welcome, {localStorage.user}!
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/wagerindex">
                        My Bets
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/wagers-new">
                        New Bet
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link active dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        What are the Odds?
                      </a>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <Link className="dropdown-item" to="/odds/moneyline">
                            Moneyline
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/odds/spread">
                            Spread
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/odds/overunder">
                            Over/Under
                          </Link>
                        </li>
                        {/* <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <div className="dropdown-item" href="#">
                        <LogoutLink />
                      </div>
                    </li> */}
                      </ul>
                    </li>
                    <li className="nav-item">
                      <LogoutLink />
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
