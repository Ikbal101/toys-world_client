// MyToys.jsx
import React from 'react';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import "./MyToys.css";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import UpdateToyModal from '../UpdateToyModal/UpdateToyModal';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);


  

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
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
  {toys.map((toy, index) => (
    <tr key={toy.id || index}>

        <td>{ index + 1}</td>
              <td>
                <img src={toy.pictureUrl} alt={toy.name} className="toy-image" />
              </td>
              <td>{toy.name}</td>
              <td>{toy.sellerName}</td>
              <td>{toy.sellerEmail}</td>
              <td>{toy.subcategory}</td>
              <td>{toy.price}</td>
              <td>{toy.rating}</td>
              <td>{toy.quantity}</td>
              <td>{toy.description}</td>
              <td>
              <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Update
      </Button>

      <UpdateToyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        toy={toy}
        // handleToyUpdate ={handleToyUpdate}
        
      />
    </>

                <br />
                <button
                  className="action-button"
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
