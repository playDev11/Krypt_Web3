import React from 'react'

const Receipt = ({
  transactionId,
  date,
  amount,
  cryptoType,
  sender,
  receiver,
  status,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Crypto Transaction Receipt
        </h2>
        <p className="text-sm text-gray-500">Thank you for your transaction</p>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Transaction ID:</span>
          <span className="font-medium text-gray-700">{transactionId}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-500">Date:</span>
          <span className="font-medium text-gray-700">{date}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-500">Amount:</span>
          <span className="font-medium text-gray-700">
            {amount} {cryptoType}
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-500">Sender:</span>
          <span className="font-medium text-gray-700">{sender}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-500">Receiver:</span>
          <span className="font-medium text-gray-700">{receiver}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-500">Status:</span>
          <span
            className={`font-medium ${
              status === 'Success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm">
          This receipt is generated electronically and is valid without a
          signature.
        </p>
      </div>
    </div>
  )
}

export default Receipt
