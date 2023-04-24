import pages from "./datas";
import { Link } from "react-router-dom";

const ListPage = () => {
  return (
    <>
      <div className="list-container">
        <ul>
          {pages.map((page, idx) => (
            <li>
              <div className={`list-item ${idx % 2 !== 0 ? 'white' : 'lightgray'}`}>
                <p>{idx + 1}</p>
                <Link to="./admin">{page.title}</Link>
                <button>Törlés</button>
                <button>Mórosítás</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListPage;
