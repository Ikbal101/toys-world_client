import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [toyData, setToyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://toys-world-server-alpha.vercel.app/toys/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setToyData(data);
        console.log(data);
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
            <div>
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={toyData?.photoUrl || toyData?.pictureUrl} alt={toyData.name}  className="h-96" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{toyData.name}</h2>
                  <p>Seller: {toyData.sellerName}</p>
                  <p>Seller Email: {toyData.sellerEmail}</p>
                  <p>Price: ${toyData.price}</p>
                  <p>Rating: {toyData.rating}</p>
                  <p>Quantity: {toyData.quantity}</p>
                  <p>Description: {toyData.description}</p>
                  <div className="card-actions justify-end d-flex items-center">
                    <span><b>Wants to add more toys?</b></span>
                    <Link to="/add">
                    <button className="btn btn-primary">Add A toy</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
