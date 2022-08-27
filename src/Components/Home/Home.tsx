import "./Home.scss";
import PType from "./PTypes/PType";

function Home() {
  return (
    <div className="home-container">
      <div className="types-display">
        <PType />
      </div>
    </div>
  );
}

export default Home;
