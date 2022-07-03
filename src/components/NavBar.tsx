import React from "react";
import styles from "../styles/NavBar.module.css";

const routes = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "TV Shows",
    path: "/"
  },
  {
    name: "Movies",
    path: "/"
  },
  {
    name: "Recently Added",
    path: "/"
  },
  {
    name: "My List",
    path: "/"
  }
];

export const NavBar: React.FC = () => {
  return (
    <nav className={styles}>
      <div className={styles.routes}>
        <h1 className={styles.logo}>FakeFlix</h1>
        {routes.map((route, index) => {
          return (
            <a
              href={route.path}
              key={index}
              onClick={(e) => e.preventDefault()}
            >
              {route.name}
            </a>
          );
        })}
      </div>
      <div>
        <h1>Profile</h1>
      </div>
    </nav>
  );
};
