import logo from "../src/assets/beef.png";
import breadBottom from "../src/assets/bread-bottom.png";
import cheese from "../src/assets/chees.png";
import breadTop from "../src/assets/bread-top.png";
import pog from "../src/assets/pog.png";

import styles "./App.scss";

function App() {
  return (
    <div styles={{}}>
      <header className="App-header">
        <div className={styles.container}>
          <div
            style={{
              backgroundImage: { logo },
              height: "100px",
              width: "100px",
            }}
          ></div>
          <img src={logo} className={styles.beef} alt="logo" />
          <img src={pog} className={styles.beef} alt="logo" />
          <img src={breadTop} className={styles.beef} alt="logo" />
          <img src={cheese} className={styles.beef} alt="logo" />
          <img src={breadBottom} className={styles.beef} alt="logo" />
        </div>
      </header>
    </div>
  );
}

// const styles = {
//   
// };
export default App;
