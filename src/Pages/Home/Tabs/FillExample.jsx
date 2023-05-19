import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// eslint-disable-next-line react/prop-types
function Card({ image, name, price, rating }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
      <button>View Details</button>
    </div>
  );
}

function TabSection() {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanel>
        <div className="card-container">
          <Card
            image="/path/to/image1.jpg"
            name="Product 1"
            price="$19.99"
            rating="4.5"
          />
          <Card
            image="/path/to/image2.jpg"
            name="Product 2"
            price="$24.99"
            rating="4.2"
          />
        </div>
      </TabPanel>

      <TabPanel>
        <div className="card-container">
          <Card
            image="/path/to/image3.jpg"
            name="Product 3"
            price="$14.99"
            rating="4.7"
          />
          <Card
            image="/path/to/image4.jpg"
            name="Product 4"
            price="$29.99"
            rating="4.9"
          />
        </div>
      </TabPanel>

      <TabPanel>
        <div className="card-container">
          <Card
            image="/path/to/image5.jpg"
            name="Product 5"
            price="$22.99"
            rating="4.4"
          />
          <Card
            image="/path/to/image6.jpg"
            name="Product 6"
            price="$17.99"
            rating="4.8"
          />
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default TabSection;
