import { useState } from "react";

const BatchForm = () => {

    const [batchName, setBatchName] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div>
            <div className="relative">
      {/* Button to Open the Form */}
      

      {/* Overlay & Popup */}
 
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md z-50">
          {/* Popup Box */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4">Add New Batch</h2>
            
            {/* Batch Name Input */}
            <input
              type="text"
              placeholder="Enter Batch Name"
              value={batchName}
              onChange={(e) => setBatchName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Buttons */}
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => setIsFormOpen(false)}
                className="px-4 py-2 text-gray-400 border border-gray-200  rounded-md hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Batch "${batchName}" added!`);
                  setBatchName("");
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-[#2ec4b6] text-white rounded-md hover:bg-[#2ec4b6]transition"
              >
                Add Batch
              </button>
            </div>
          </div>
        </div>
      
    </div>
        </div>
    )
}

export default BatchForm
