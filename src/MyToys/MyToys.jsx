import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import "./MyToys.css";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const handleUpdateToy = (id) => {
    // Handle update logic for the toy with the given id
    console.log("Update toy with id:", id);
  };

  const handleDeleteToy = (id) => {
    // Handle delete logic for the toy with the given id
    console.log("Delete toy with id:", id);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Picture URL</th>
            <th>Name</th>
            <th>Seller Name</th>
            <th>Seller Email</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Available Quantity</th>
            <th>Detail Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy.id}>
              <td>{toy.pictureUrl}</td>
              <td>{toy.name}</td>
              <td>{toy.sellerName}</td>
              <td>{toy.sellerEmail}</td>
              <td>{toy.subcategory}</td>
              <td>{toy.price}</td>
              <td>{toy.rating}</td>
              <td>{toy.quantity}</td>
              <td>{toy.description}</td>
              <td>
                <button
                  className="action-button mb-3"
                  onClick={() => handleUpdateToy(toy.id)}
                >
                  Update
                </button>
                <br />
                <button
                  className="action-button"
                  onClick={() => handleDeleteToy(toy.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
