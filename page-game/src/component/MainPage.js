import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div id="main-container">
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </>
  );
};

export default MainPage;
