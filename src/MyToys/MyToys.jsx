import { useEffect, useState } from 'react';

const MyToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then(res => res.json())
      .then(data => setToys(data));
  }, []);

  return (
    <div>
      <h2>My Toys</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Seller Name</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {toys.map(toy => (
            <tr key={toy._id}>
              <td>{toy.name}</td>
              <td>{toy.sellerName}</td>
              <td>{toy.price}</td>
              <td>{toy.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
