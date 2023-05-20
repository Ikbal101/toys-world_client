import pic1 from "../../../assets/carousel/thor.webp";
import pic2 from "../../../assets/carousel/doctor.jpg";
const Special = () => {
  return (
    <div className="mb-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={pic1} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={pic2}
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
            <h1 className="text-5xl font-bold">
              We are ready to protect the world
            </h1>
            <p className="py-6">
              Thor, the Norse god of thunder and a prominent Marvel superhero,
              wields the mighty hammer Mjolnir and possesses incredible
              strength, lightning manipulation, and the ability to summon
              storms, making him a formidable force in battle and a key member
              of the Avengers.{" "}
            </p>
            <p className="py-6">
              Doctor Strange, a skilled sorcerer in the Marvel Universe,
              channels mystical energies to manipulate reality, time, and
              dimensions, employing powerful spells and artifacts like the Cloak
              of Levitation and the Eye of Agamotto, making him a master of the
              mystic arts and a defender against supernatural threat.{" "}
            </p>
            <button className="btn btn-warning" ><a href="https://en.wikipedia.org/wiki/Marvel_Legends" target="blank">Get More Info</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
