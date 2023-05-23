import { useForm } from "react-hook-form";

const UpdateToyModal = ({ toy, isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleToyUpdate = (data) => {
    // Send a PUT request to update the toy on the server
    fetch(`https://toys-world-server-alpha.vercel.app/toys/${toy._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        console.log("Updated toy data:", updatedToy);
        onClose(); // Close the modal after updating
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
      });
  };
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 z-10">
        <h2 className="text-2xl font-bold mb-4">Update Toy</h2>
        <form onSubmit={handleSubmit(handleToyUpdate)}>
          <div className="mb-4">
            <label htmlFor="price" className="block font-medium">
              Price:
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              id="price"
              defaultValue={toy?.price}
              className="border rounded bg-gray-100 p-2 w-full"
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block font-medium">
              Rating:
            </label>
            <input
              {...register("rating", { required: true })}
              type="number"
              id="rating"
              defaultValue={toy?.rating}
              className="border rounded bg-gray-100 p-2 w-full"
            />
            {errors.rating && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block font-medium">
              Available Quantity:
            </label>
            <input
              {...register("quantity", { required: true })}
              type="number"
              id="quantity"
              defaultValue={toy?.quantity}
              className="border rounded bg-gray-100 p-2 w-full"
            />
            {errors.quantity && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block font-medium">
              Detail Description:
            </label>
            <textarea
              {...register("description", { required: true })}
              id="description"
              className="border rounded bg-gray-100 p-2 w-full"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Toy
            </button>
            <button
              onClick={onClose}
              className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToyModal;
