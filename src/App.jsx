import "./global.css";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { SideBar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <div>post 1</div>
          <div>post 2</div>
        </main>
      </div>
    </div>
  );
}

export default App;
