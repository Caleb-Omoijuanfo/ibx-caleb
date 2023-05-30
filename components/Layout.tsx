import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Layout.module.scss";

type TLayout = {
  children: ReactNode;
};

export default function Layout({ children }: TLayout) {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={styles.LayoutWrapper}>
      {children}
      <div className={styles.NavContainer}>
        <nav
          className={`${
            color ? `${styles.NavBar} ${styles.NavBarBG}` : styles.NavBar
          } navbar navbar-expand-lg navbar-light`}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`${styles.NavBarCollapse} collapse navbar-collapse`}
              id="navbarText"
            >
              <ul
                className={`${styles.NavBarNav} navbar-nav me-auto mb-2 mb-lg-0`}
              >
                <li className="nav-item">
                  <a
                    className={`${styles.NavLink} nav-link`}
                    aria-current="page"
                    href="#"
                  >
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.NavLink} nav-link`} href="#">
                    Innovation
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.NavLink} nav-link`} href="#">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.NavLink} nav-link`} href="#">
                    Industry
                  </a>
                </li>
              </ul>
              <span className="navbar-text">
                Navbar text with an inline element
              </span>
            </div>
          </div>
        </nav>
        <nav
          className={`${
            color ? `${styles.NavBar} ${styles.NavBarBG}` : styles.NavBar
          } navbar navbar-expand-lg navbar-light`}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`${styles.NavBarCollapse} collapse navbar-collapse`}
              id="navbarText"
            >
              <ul
                className={`${styles.NavBarNav} navbar-nav me-auto mb-2 mb-lg-0`}
              >
                <li className="nav-item">
                  <Image
                    src="/images/jake.svg"
                    height={40}
                    width={40}
                    alt="logo"
                  />
                </li>
                <li className="nav-item">
                  <a className={`${styles.NavLink} nav-link`} href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.NavLink} nav-link`} href="#">
                    Feature
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.NavLink} nav-link`} href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.NavLink} nav-link`} href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.NavLink} nav-link`} href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.NavLink} nav-link`} href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${styles.NavLink} nav-link`} href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <span className="navbar-text">
                Navbar text with an inline element
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
