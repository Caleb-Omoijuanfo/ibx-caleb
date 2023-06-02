import { ChangeEvent, ReactNode, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.scss";
import Button from "./Buttons/Button";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { getSourceQuery, getSources } from "@/app/feature/news/sourceSlice";

type TLayout = {
  children: ReactNode;
};

export default function Layout({ children }: TLayout) {
  const [color, setColor] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { source } = useAppSelector((state) => state);

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleNavbarColor = () => {
    if (color && router.pathname === "/") {
      return `${styles.NavBar} ${styles.NavBarBG}`;
    } else if (!color && router.pathname === "/") {
      return `${styles.NavBar}`;
    }

    if (router.pathname === "/post") {
      return `${styles.NavBar} ${styles.NavBarBlue}`;
    }

    if (color && router.pathname === "/post/[title]") {
      return `${styles.NavBar} ${styles.NavBarBG}`;
    } else if (!color && router.pathname === "/post/[title]") {
      return `${styles.NavBar}`;
    }
  };

  const handleChangeSouce = (e: ChangeEvent<HTMLSelectElement>) => {
    return dispatch(getSourceQuery({ query: e.target.value }));
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  useEffect(() => {
    if (router.pathname === "/post") {
      dispatch(getSources());
    }
  }, [router.pathname]);

  return (
    <div className={styles.LayoutWrapper}>
      {children}
      <div className={styles.NavContainer}>
        <nav
          className={`${handleNavbarColor()} navbar navbar-expand-lg navbar-light`}
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
                  <Link
                    className={`${styles.NavLink} nav-link`}
                    aria-current="page"
                    href="/"
                  >
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.NavLink} nav-link`} href="/">
                    Innovation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.NavLink} nav-link`} href="/">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.NavLink} nav-link`} href="/">
                    Industry
                  </Link>
                </li>
              </ul>
              <div className={`${styles.FIrstNavSidePiece} navbar-text`}>
                <ul>
                  <li>IG</li>
                  <li>TW</li>
                  <li>FB</li>
                  <li>YT</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <nav
          className={`${handleNavbarColor()} navbar navbar-expand-lg navbar-light`}
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
                    onClick={() => router.push("/")}
                    style={{ cursor: "pointer" }}
                  />
                </li>
                <li className="nav-item">
                  <Link className={`${styles.NavLink} nav-link`} href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.NavLink} nav-link`} href="/">
                    Feature
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.NavLink} nav-link`} href="/">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.NavLink} nav-link`} href="/">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.NavLink} nav-link`} href="/">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.NavLink} nav-link`} href="/">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${styles.NavLink} nav-link`} href="/">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="navbar-text">
                <AiOutlineSearch
                  size={24}
                  color="#ffffff"
                  style={{ marginRight: "2rem" }}
                />
                <Button
                  text="Subscribe"
                  textColor="#ffffff"
                  backgroundColor="#F36326"
                  onClick={() => console.log()}
                  customStyle={{ height: "3rem" }}
                />
              </div>
            </div>
          </div>
        </nav>

        {router.pathname === "/post" && (
          <div className={styles.ExtraSearchNav}>
            <select placeholder="Search by source" onChange={handleChangeSouce}>
              <option value="">Search by source</option>
              {source?.source?.sources.map((_source, index) => (
                <option key={index} value={_source?.name}>
                  {_source?.name}
                </option>
              ))}
            </select>
            <Button
              isIcon
              Icon={<AiOutlineSearch size={24} />}
              textColor="#ffffff"
              backgroundColor="#F36326"
              onClick={() => console.log()}
            />
          </div>
        )}
      </div>

      <div>
        <div className={styles.SubscribeContainer}>
          <div className={styles.SubscribeCard}>
            <div className="container overflow-hidden p-0">
              <div className="row gx-5">
                <div className={`${styles.LeftContainer} col-6`}>
                  <h1>Sign Up for Our Newsletters</h1>
                </div>
                <div className={`${styles.RightContainer} col-6`}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmoffd.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.SubscribeActionContainer}>
              <input type="text" placeholder="Input your email address here" />
              <Button
                text="Subscribe Now"
                textColor="#ffffff"
                backgroundColor="#F36326"
                onClick={() => console.log()}
              />
            </div>
          </div>
        </div>

        <div className={styles.FooterContainer}>
          <div className="container overflow-hidden p-0">
            <div className="row gx-5">
              <div className={`${styles.LeftContainer} col-6`}>
                <Image
                  src="/images/jake-blue.svg"
                  height={40}
                  width={40}
                  alt="logo"
                />
                <div className={styles.TextContainer}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod.
                  </p>
                </div>
              </div>
              <div className={`${styles.RightContainer} col-6`}>
                <div className="container overflow-hidden p-0">
                  <div className="row gy-5">
                    <div className={`${styles.ColumnOne} col-4`}>
                      <ul>
                        <li>
                          <h6>Categories</h6>
                        </li>
                        <li>International</li>
                        <li>Regional</li>
                        <li>Politics</li>
                        <li>Business</li>
                        <li>Sports</li>
                        <li>Health</li>
                      </ul>
                    </div>
                    <div className={`${styles.ColumnTwo} col-4`}>
                      <ul>
                        <li>
                          <h6>Company</h6>
                        </li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Services</li>
                        <li>Contact Us</li>
                      </ul>
                    </div>
                    <div className={`${styles.ColumnThree} col-4`}>
                      <ul>
                        <li>
                          <h6>Social Media</h6>
                        </li>
                        <li>Youtube</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
