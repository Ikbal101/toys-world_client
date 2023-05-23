import { useContext, useEffect, useState } from 'react';
import './AllToy.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const ToysTable = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const {user}=useContext(AuthContext)

  useEffect(() => {
    fetch('https://toys-world-server-alpha.vercel.app/toys')
      .then(response => response.json())
      .then(toysData => {
        setToys(toysData.slice(0, 20));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleShowAll = () => {
    setShowAll(true);
    fetch('https://toys-world-server-alpha.vercel.app/toys')
      .then(response => response.json())
      .then(toysData => {
        setToys(toysData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const filteredToys = showAll
    ? toys
    : toys.filter(toy =>
        toy.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const handleViewDetails = (toy) => {
        if (user) {
          // User is logged in, allow viewing details
          // Add your logic here to handle the view details action
          console.log("View Details clicked for toy:", toy);
        } else {
          // User is not logged in, show toast message or redirect to login page
          console.log("You need to log in first to view details");
        }
      };
  return (
    <div>
      <div className='text-center'>
        <h2 className='text-2xl font-bold'>Marvel Toys</h2>
        <p className='font-bold'>
          Marvel Universe Collectibles: Assemble Your Epic Collection!
        </p>
      </div>
      <div className='mx-auto w-72'>
        <input
          type='text'
          placeholder='Search by Toy Name'
          value={searchQuery}
          onChange={handleSearchChange}
          className='search'
        />
      </div>

      <table className='toys-table'>
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
          {filteredToys.map(toy => (
            <tr key={toy._id}>
              <td>{toy.sellerName || ''}</td>
              <td>{toy.name}</td>
              <td>{toy.category || toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                {/* View Details button */}
                {user ? (
                  <Link to={`/details/${toy._id}`}>
                    <button onClick={() => handleViewDetails(toy)}>View Details</button>
                  </Link>
                ) : (
                  <p className="font-bold text-red-800">You have to log in first to view details</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!showAll && (
        <div className='show-all-container'>
          <button onClick={handleShowAll} className='show-all-btn'>
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default ToysTable;
