import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import UpdateToyModal from "../UpdateToyModal/UpdateToyModal";
import "./MyToys.css";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);

  useEffect(() => {
    fetchToys();
  }, [user]);

  const fetchToys = () => {
    fetch(`http://localhost:5000/myToy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.log("Error fetching toys:", error);
      });
  };

  const handleUpdateToy = (toy) => {
    setSelectedToy(toy);
    setModalOpen(true);
  };

  const handleDeleteToy = (id) => {
    fetch(`http://localhost:5000/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the toys list after deleting the toy
        if (data.deletedCount === 1) {
          const updatedToys = toys.filter((toy) => toy._id !== id);
          setToys(updatedToys);
        }
      })
      .catch((error) => {
        console.log("Error deleting toy:", error);
      });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    fetchToys(); // Fetch toys data again after closing the modal
  };

  return (
    <div>
      <table className="w-full">

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
            <tr key={toy._id || index}>
              <td>{index + 1}</td>
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
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleUpdateToy(toy)}
                >
                  Update
                </button>
                <br />
                <button
                  className="action-button"
                  onClick={() => handleDeleteToy(toy._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

       {selectedToy && (
        <UpdateToyModal
          toy={selectedToy}
          isOpen={modalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MyToys;
