import "./../Detail.css";
const Detail = ({ data }) => {
  const dateConverter = (date) => {
    const dateCreatedUTC = new Date(date);
    const istOffset = 5.5 * 60 * 60 * 1000;
    const dateCreatedIST = new Date(dateCreatedUTC.getTime() + istOffset);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };

    return dateCreatedIST.toLocaleString("en-IN", options).replace(",", "");
  };
  return (
    <>
      <div style={{ padding: "10px" }}>
        <h1>{data?.["data"][0]["title"]}</h1>

        <p>Captured On: {dateConverter(data?.["data"][0]["date_created"])}</p>
        <img
          className="detail-img"
          src={data?.links[0].href}
          alt={`preview`}
          height="300px"
          width="300px"
          onClick={() => {
            window.open(data?.links[0].href, "_blank");
          }}
        />

        <p>{data["data"][0]["description"]}</p>
      </div>
    </>
  );
};

export default Detail;
