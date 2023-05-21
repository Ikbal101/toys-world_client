// import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

const UpdateToyModal = (props) => {

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm();
    
      const { handleToyUpdate } = props;
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Toy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleSubmit(handleToyUpdate)}>
       

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              className="form-control border rounded bg-orange-50"
              {...register("price", { required: true })}
              id="price"
              type="number"
              defaultValue={props?.toy?.price}
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
              defaultValue={props?.toy?.rating}
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
              defaultValue={props?.toy?.quantity}
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
            Update Toy
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default UpdateToyModal;