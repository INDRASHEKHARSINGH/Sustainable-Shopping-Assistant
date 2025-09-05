import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function BuyNow() {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState("card");
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    village: "",
    city: "",
    landmark: "",
    district: "",
    pincode: ""
  });

  const [details, setDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Optional: restrict phone/age to digits only
    if (( name === "phone" || pincode === "pincode") && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email,  phone, village, city, landmark, district, pincode } = formData;
  {/*
    if (!name || !email ||  !phone ||!village ||!city ||!landmark ||!district ||!pincode) {
      alert("All fields are required.");
      return;
    }
   */}
   {/*
    if (paymentMethod === "card") {
      if (!details.cardNumber || !details.expiry || !details.cvv) {
        alert("Please fill all card details.");
        return;
      }
    }
*/}
    if (paymentMethod === "upi") {
      if (!details.upiId) {
        alert("Please enter your UPI ID.");
        return;
      }
    }

    {/*
    alert(`Submitted:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);

    alert(`Payment Method: ${paymentMethod.toUpperCase()} submitted successfully.`);
    console.log({ paymentMethod, details });
    */}
  };

  return (
  <>
        <button onClick={() => navigate(-1)} className="text-gray-700 hover:underline m-5">
        ← Back
        </button>

    <div className="grid sm:sm:grid-cols-2 ml-5 mr-5 mb-10">
        <form
      onSubmit={handleSubmit}
      className="w-130 mx-auto mt-2  p-6 bg-gray-100 rounded-lg shadow space-y-6"
    >
     
      {/* Name */}
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full p-1 border bg-white  border-gray-300 rounded"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full bg-white p-1 border border-gray-300 rounded"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-1 font-medium">Phone Number</label>
        <input
          type="number"
          name="phone"
          required
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="w-full bg-white p-1 border border-gray-300 rounded"
        />
      </div>

      {/* village */}
      <div>
        <label className="block mb-1 font-medium">Village\Town</label>
        <input
          type="text"
          name="village"
          required
          onChange={handleChange}
          placeholder="Enter your village"
          className="w-full bg-white p-1 border border-gray-300 rounded"
        />
      </div>

      {/* city */}
      <div>
        <label className="block mb-1 font-medium">City</label>
        <input
          type="text"
          name="city"
          required
          onChange={handleChange}
          placeholder="Enter your city"
          className="w-full bg-white p-1 border border-gray-300 rounded"
        />
      </div>

      {/* landmark */}
     
      <div>
        <label className="block mb-1 font-medium">Landmark</label>
        <input
          type="text"
          name="landmark"
          onChange={handleChange}
          placeholder="Enter your landmark"
          className="w-full bg-white p-1 border border-gray-300 rounded"
        />
      </div>

      {/* district */}
     
      <div>
        <label className="block mb-1 font-medium">District</label>
        <input
          type="text"
          name="district"
          onChange={handleChange}
          placeholder="Enter your district"
          className="w-full bg-white p-1 border border-gray-300 rounded"
        />
      </div>

       <div>
        <label className="block mb-1 font-medium">Pincode</label>
        <input
          type="number"
          name="pincode"
          onChange={handleChange}
          placeholder="Enter your pincode"
          className="w-full bg-white p-1 border border-gray-300 rounded"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className=" w-30 bg-yellow-400 text-white py-2 px-4 rounded hover:bg-blue-700 "
      >
        Submit
      </button>
    </form>
  
  <form
      onSubmit={handleSubmit}
      className="max-w-md h-110 mx-auto p-6 bg-gray-100 rounded-lg shadow space-y-6"
    >
      <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>

      {/* Payment Options */}
      <div className="space-y-2">
        {["card", "upi", "cod"].map((method) => (
          <label key={method} className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value={method}
              checked={paymentMethod === method}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="capitalize">{method}</span>
          </label>
        ))}
      </div>

      {/* Card Details */}
      {paymentMethod === "card" && (
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              maxLength={16}
              required
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              className="w-full bg-white  border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">Expiry</label>
              <input
                type="text"
                name="expiry"
                required
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full bg-white  border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">CVV</label>
              <input
                type="password"
                name="cvv"
                maxLength={3}
                required
                onChange={handleChange}
                placeholder="123"
                className="w-full bg-white  border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </div>
      )}

      {/* UPI Details */}
      {paymentMethod === "upi" && (
        <div>
          <label className="block font-medium mb-1">UPI ID</label>
          <input
            type="text"
            name="upiId"
            required
            onChange={handleChange}
            placeholder="example@upi"
            className="w-full bg-white  border border-gray-300 p-2 rounded"
          />
        </div>
      )}

      {/* COD Info */}
      {paymentMethod === "cod" && (
        <p className="text-green-600 font-medium">Cash on Delivery selected.</p>
      )}

      <button
        type="submit"
        className="w-40 bg-green-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Confirm Payment
      </button>
    </form>
    </div>
   
    </>
  );
}

export default BuyNow;