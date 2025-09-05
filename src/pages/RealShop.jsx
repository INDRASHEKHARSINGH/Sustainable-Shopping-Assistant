import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';


function RealShop () {
    const navigate = useNavigate();

    const [rows, setRows] = useState([
    { product: '', quantity: '' },
  ]);
    


   const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' && index === rows.length - 1) {
      setRows([...rows, { product: '', quantity: '' }]);
    }
  };

     const handleSubmit = () => {
    // Filter out completely empty rows
    const filledRows = rows.filter(
      (row) => row.product.trim() !== '' || row.quantity !== ''
    );
    

    
  
    // Replace with API call or backend integration
    console.log('Submitted data:', filledRows);
    alert('Data submitted successfully!');
    
  };


    return (
        <>
        <h1 className="m-5 border w-120 p-2 text-center rounded-3xl bg-yellow-300">Shop Like a Real Store — <span className="text-green-800  font-bold">Just Order</span>,  No need to Searching!</h1>


        <div className="w-4/5 mx-auto mb-10 ">

         <div className="w-full max-w-4xl h-80 mx-auto mt-6  border rounded shadow-md hover:shadow-green-800 hover:scale-[1.02]  overflow-hidden">
      {/* Fixed header table */}
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full table-fixed">
          <thead className="bg-green-200 text-gray-800">
            <tr>
              <th className="w-1/6 px-4 py-2 text-centre border">Item No.</th>
              <th className="w-4/6 px-4 py-2 text-centre border">Product</th>
              <th className="w-1/6 px-4 py-2 text-centre border">Quantity</th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Scrollable table body */}
      <div className="overflow-x-auto max-h-64 overflow-y-auto">
        <table className="min-w-[600px] w-full table-fixed">
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
              >
                <td className="w-1/6 px-4 py-2 border text-center">{index + 1}</td>
                <td className="w-4/6 px-4 py-2 border">
                  <input
                    type="text"
                    className="w-full p-1 "
                    placeholder="Enter product"
                    onChange={(e) => handleChange(index, 'product', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                </td>
                <td className="w-1/6 px-4 py-2  border text-centre">
                  <input
                    type="number"
                    className="w-full p-1 "
                    placeholder="0"
                    onChange={(e) => handleChange(index, 'quantity', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       
    </div>
    <div className="p-4 text-right mr-40 bg-white">
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>   

        {/* Show Submitted Data */}
      
    </div>
    
        
        </>
    );
}


export default RealShop;