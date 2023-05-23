import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <section className="banner mb-16 rounded-xl">
        <div className="banner-overlay">
          <h1>Welcome to the Marvel Toy Store</h1>
          <p>Discover the world of Marvel heroes and collectibles</p>
          <button className="shop-btn">See Now</button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
