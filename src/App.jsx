import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
