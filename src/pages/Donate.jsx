import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import SearchForm from './SearchForm';

const ConfirmationForm = ({ rowData, onCancel, onConfirm }) => {
  const { pintsOfBlood, ...restData } = rowData;
  const [editablePintsOfBlood, setEditablePintsOfBlood] = useState(pintsOfBlood);

  const handlePintsOfBloodChange = (e) => {
    setEditablePintsOfBlood(e.target.value);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Confirm Request</h2>
      <div className="flex flex-col mb-4">
        <label className="text-sm font-semibold text-gray-600 mb-1">Pints of Blood:</label>
        <input
          type="text"
          value={editablePintsOfBlood}
          onChange={handlePintsOfBloodChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      {Object.keys(restData).map((name, index) => (
        <div key={index} className="flex flex-col mb-4">
          <label className="text-sm font-semibold text-gray-600 mb-1">{name}:</label>
          <input
            type="text"
            value={restData[name]}
            className="w-full p-2 border border-gray-300 rounded-md"
            readOnly
          />
        </div>
      ))}
      <div className="flex justify-between">
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Cancel
        </button>
        <button
          onClick={() => onConfirm({ ...rowData, pintsOfBlood: editablePintsOfBlood })}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Confirm Request
        </button>
      </div>
    </div>
  );
};

export default function Donate() {
  const [data, setData] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showConfirmationForm, setShowConfirmationForm] = useState(false);
  const [requestStatus, setRequestStatus] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleConfirmRequest = async (rowData) => {
    try {
      const response = await fetch('http://localhost:1280/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rowData),
      });

      if (response.ok) {
        console.log('Donation request sent successfully');
        setRequestStatus('success');
        setShowSuccessMessage(true);

        // Hide confirmation form and success message after 3 seconds (adjust the time as needed)
        setTimeout(() => {
          setShowConfirmationForm(false);
          setShowSuccessMessage(false);
        }, 3000);
      } else {
        console.error('Error sending donation request');
        setRequestStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setRequestStatus('error');
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch('http://localhost:1280/bloodinventory');
        let json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleSearch = async (searchData) => {
    try {
      let response = await fetch(
        `http://localhost:1280/bloodinventory?bloodGroup=${searchData.bloodGroup}&location=${searchData.location}&pints=${searchData.pintsOfBlood}`
      );
      let json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleMakeRequest = (rowData) => {
    setSelectedRowData(rowData);
    setShowConfirmationForm(true);
    setRequestStatus(null); // Reset request status when showing the form
  };

  const handleCancelRequest = () => {
    setShowConfirmationForm(false);
    setShowSuccessMessage(false); // Reset success message when canceling the request
  };

  return (
    <div>
      <Navbar />
      <SearchForm onSearch={handleSearch} />
      {data.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center bg-gradient-to-r from-[#E36414] to-[#FB8B24] p-4 rounded-md shadow-md">
            {Object.keys(data[0]).map((name, index) => (
              <p key={index} className="text-white font-bold">
                {name}
              </p>
            ))}
            <p className="text-white font-bold">Actions</p>
          </div>
          {data.map((item, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center bg-white p-4 border-b border-gray-300 transition duration-300 ease-in-out hover:bg-gray-100 transform hover:shadow-md relative"
            >
              {Object.keys(item).map((name, colIndex) => (
                <>
                  {name !== "blood_bank_id" && (
                    <div key={colIndex} className="text-black flex-grow">
                      {name === 'pintsOfBlood' ? item[name] : <div>{item[name]}</div>}
                    </div>
                  )}
                </>
              ))}
              <button
                onClick={() => handleMakeRequest(item)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer mt-2"
              >
                Make a Request
              </button>
            </div>
          ))}
          {showConfirmationForm && (
            <div>
              {showSuccessMessage && (
                <div className="text-green-500 font-bold mb-4">
                  Donation request sent successfully! This message will disappear in a few seconds.
                </div>
              )}
              {requestStatus === 'error' && (
                <div className="text-red-500 font-bold mb-4">Error sending donation request.</div>
              )}
              <ConfirmationForm
                rowData={selectedRowData}
                onCancel={handleCancelRequest}
                onConfirm={handleConfirmRequest}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

