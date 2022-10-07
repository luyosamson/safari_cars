import React,{useState} from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {

  const [data,setData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    from:"",
    destination:"",
    seats:"",




  })

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <input type="number" placeholder="Number of seats" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
       <input type="number" placeholder="Approximate luggage size in kg" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>

        <div className="payment text-end mt-5">
        <button>Reserve Now</button>
      </div>
    </Form>
  );
};

export default BookingForm;
