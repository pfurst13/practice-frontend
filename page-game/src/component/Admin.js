import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div>Admin:
      <Link to="/create-page">Új lap létrehozása</Link>
      <Link to="/list-page">Oldalak listázása</Link>
      </div>
    </>
  );
};

export default Admin;
