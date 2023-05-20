import  { useEffect, useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "./FillExample.css";

const Example = () => {
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    // Fetch the data from the server
    fetch("http://localhost:5000/toys")
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
                    <img src={toy.photoUrl} alt={toy.name} />
                    <h3>{toy.name}</h3>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <Link to={`/details/${toy._id}`} className="bg-orange-600 btn">
                      View Details
                    </Link>
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
