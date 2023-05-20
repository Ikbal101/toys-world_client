import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [toyDetails, setToyDetails] = useState(null);

  useEffect(() => {
    // Fetch the toy details based on the id from the server
    fetch(`http://localhost:5000/toys/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setToyDetails(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!toyDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={toyDetails.photoUrl} alt={toyDetails.name} />
      <h3>{toyDetails.name}</h3>
      <p>Seller: {toyDetails.sellerName}</p>
      <p>Seller Email: {toyDetails.sellerEmail}</p>
      <p>Price: ${toyDetails.price}</p>
      <p>Rating: {toyDetails.rating}</p>
      <p>Available Quantity: {toyDetails.quantity}</p>
      <p>Description: {toyDetails.description}</p>
    </div>
  );
};

export default Details;
