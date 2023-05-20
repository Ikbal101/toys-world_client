import  { useEffect, useState } from "react";

const ToysTable = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((toysData) => {
        setToys(toysData.slice(0, 20));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Marvel Toys</h2>
        <p className="font-bold">
          Your Destination for Marvel Superhero Collectibles
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td>{toy.sellerName || ""}</td>
              <td>{toy.name}</td>
              <td>{toy.category}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <button
                  onClick={() =>
                    console.log("View Details clicked for toy:", toy)
                  }
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToysTable;
