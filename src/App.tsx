import styles from "./styles/App.module.css";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <div className={styles}>
      <NavBar />
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
