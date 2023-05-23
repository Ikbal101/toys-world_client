import { useEffect, useState, useContext } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "./FillExample.css";
import { AuthContext } from "../../../Providers/AuthProviders";

const Example = () => {
  const [toysData, setToysData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch the data from the server
    fetch("https://toys-world-server-alpha.vercel.app/toys")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((toy) => ({
          ...toy,
          category: getCategoryFromId(toy.id),
        }));
        setToysData(updatedData);
      })
      .catch((error) => console.log(error));
  }, []);

  const getCategoryFromId = (id) => {
    if (id >= 1 && id <= 3) {
      return "Avengers";
    } else if (id >= 4 && id <= 6) {
      return "Star Wars";
    } else if (id >= 7 && id <= 10) {
      return "Transformers";
    } else {
      return "Other";
    }
  };

  const categories = ["Avengers", "Star Wars", "Transformers"];

  return (
    <Tabs value="avengers">
      <TabsHeader>
        {categories.map((category) => (
          <Tab key={category} value={category.toLowerCase()}>
            {category}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {categories.map((category) => (
          <TabPanel key={category} value={category.toLowerCase()}>
            <div className="card-container">
              {toysData
                .filter((toy) => toy.category.toLowerCase() === category.toLowerCase())
                .slice(0, 2) // Display only the first 2 cards for each category
                .map((toy) => (
                  <div key={toy._id} className="cards">
                    <img src={toy.photoUrl || toy.pictureUrl} alt={toy.name} />
                    <h3>{toy.name}</h3>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                     {user ? (
                      <Link to={`/details/${toy._id}`}>
                        <button className="bg-orange-600 btn"> View Details</button>
                      </Link>
                    ) : (
                      <p className="font-bold text-red-800">You have to log in first to view details</p>
                    )} 

                  </div>
                ))}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default Example;
