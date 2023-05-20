import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css"

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [toyData, setToyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setToyData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {toyData && (
            <div className="card">
              <img
                src={toyData.photoUrl}
                alt={toyData.name}
                className="card-image"
              />
              <div className="card-details">
                <h3 className="card-title">{toyData.name}</h3>
                <p className="card-text">Seller: {toyData.sellerName}</p>
                <p className="card-text">Seller Email: {toyData.sellerEmail}</p>
                <p className="card-text">Price: ${toyData.price}</p>
                <p className="card-text">Rating: {toyData.rating}</p>
                <p className="card-text">Quantity: {toyData.quantity}</p>
                <p className="card-text">Description: {toyData.description}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
