import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import "./AddToy.css";
import { AuthContext } from "../Providers/AuthProviders";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedToys, setSelectedToys] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Send the data to the server
    data.subCategory = selectedToys.value;
    fetch("https://toys-world-server-alpha.vercel.app/adding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };

  const options = [
    { value: "Marvel Toys", label: "Marvel Toys" },
    { value: "Dc Toys", label: "Dc Toys" },
    { value: "Science Toys", label: "Science Toys" },
  ];

  return (
    <div className="add-toy-container mt-36 mb-40">
      <div className="add-toy">
        <h2 className="font-bold text-2xl text-orange-800">Add Toy</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="photoUrl">Picture URL of the toy:</label>
            <input
              className="form-control border rounded bg-orange-50"
              {...register("photoUrl", { required: true })}
              id="photoUrl"
              type="text"
            />
            {errors.photoUrl && (
              <span className="error">This field is required</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control border rounded bg-orange-50"
              {...register("name", { required: true })}
              id="name"
              type="text"
            />
            {errors.name && (
              <span className="error">This field is required</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="sellerName">Seller Name:</label>
            <input
              className="form-control border rounded bg-orange-50"
              {...register("sellerName")}
              id="sellerName"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="sellerEmail">Seller Email:</label>
            {/* <input
                            className="form-control border rounded bg-orange-50"
                            {...register("sellerEmail")}
                            id="sellerEmail"
                            type="email"
                        /> */}
            <input
              className="form-control border rounded bg-orange-50"
              value={user?.email}
              {...register("postedBy")}
              type="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subCategory">Sub-category:</label>
            <CreatableSelect
              className="react-select-container"
              classNamePrefix="react-select"
              defaultValue={selectedToys}
              onChange={setSelectedToys}
              options={options}
              id="subCategory"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              className="form-control border rounded bg-orange-50"
              {...register("price", { required: true })}
              id="price"
              type="number"
            />
            {errors.price && (
              <span className="error">This field is required</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input
              className="form-control border rounded bg-orange-50"
              {...register("rating", { required: true })}
              id="rating"
              type="number"
            />
            {errors.rating && (
              <span className="error">This field is required</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Available Quantity:</label>
            <input
              className="form-control border rounded bg-orange-50"
              {...register("quantity", { required: true })}
              id="quantity"
              type="number"
            />
            {errors.quantity && (
              <span className="error">This field is required</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Detail Description:</label>
            <textarea
              className="form-control border rounded bg-orange-50"
              {...register("description", { required: true })}
              id="description"
            ></textarea>
            {errors.description && (
              <span className="error">This field is required</span>
            )}
          </div>

          <button className="btn btn-primary" type="submit">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
