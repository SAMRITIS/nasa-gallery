import axios from "axios";
import { useEffect, useState } from "react";
import "../Home.css";
import Loader from "./Loader";
import Selector from "./Selector";
import Detail from "./Detail";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [planet, setPlanet] = useState("earth");
  const [showModal, setShowModal] = useState(false);
  const [ele, setEle] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, planet]);

  const getSelectedOption = (data) => {
    setPlanet(data);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        `https://images-api.nasa.gov/search?q=${planet}&page=${page}`,
        { timeout: 5000 }
      );
      setData(res.data.collection.items);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showModal && data?.[ele]?.["links"]?.[0].href ? (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              &times; {/* Close icon */}
            </button>
            <Detail data={data?.[ele]} />
          </div>
        </div>
      ) : null}
      <div className="home-div">
        <h1 style={{ marginTop: "50px", marginLeft: "50px" }}>Nasa Gallery</h1>
        <Selector getSelectedOption={getSelectedOption} />
      </div>
      {loading ? (
        <p>
          <Loader />
        </p>
      ) : (
        <div className="main">
          {data?.map((element, index) => (
            <div
              key={index}
              className="sub"
              onClick={() => {
                setShowModal((showModal) => !showModal);
                setEle(index);
              }}
            >
              {element?.links?.[0] && (
                <img
                  className="main-img"
                  src={element.links[0].href}
                  alt={`preview-${index}`}
                />
              )}
              <p>
                {element.data[0].title.length > 25
                  ? element.data[0].title.slice(0, 25) + " ..."
                  : element.data[0].title}
              </p>
              <button
                onClick={() => {
                  setShowModal((showModal) => !showModal);
                  setEle(index);
                }}
              >
                {">>>"}{" "}
              </button>
            </div>
          ))}
          <div className="pagination">
            <button
              className="page-but"
              onClick={() => {
                if (page > 1) {
                  setPage((prevPage) => prevPage - 1);
                }
              }}
            >
              {"<"} Previous Page
            </button>
            <button
              className="page-but"
              onClick={() => {
                setPage((prevPage) => prevPage + 1);
              }}
            >
              Next Page {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
