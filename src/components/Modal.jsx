import React from 'react'
import { TiWarning } from "react-icons/ti";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Modal = ({ message, onClose }) => {
  if (!message) return null;

  const isError = message.startsWith("Please")

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-500/30 bg-opacity-50 z-50">
      <div className={` p-6 rounded-xl bg-white shadow-lg w-80 text-center`}>
        <h3
          className={`text-lg font-semibold ${
            isError ? "text-red-600" : "text-green-500"
          } text-blue-800 mb-3 flex justify-center`}
        >
          {isError ? (
            <TiWarning size={40} />
          ) : (
            <IoMdCheckmarkCircle size={40} />
          )}
        </h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className={` ${
            isError ? "bg-red-600" : "bg-green-600"
          }  text-white px-6 py-2 rounded-lg transition-all`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal
