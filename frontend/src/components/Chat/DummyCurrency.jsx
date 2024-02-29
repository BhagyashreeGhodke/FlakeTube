import React, { useState } from 'react';

const DummyCurrencyComponent = () => {
    // State for DC balance
    const [dcBalance, setDCBalance] = useState(1000); // Initial balance, you can set it as per your requirement

    // Function to handle DC transactions (spending or earning)
    const handleTransaction = (amount) => {
        // Update DC balance based on the transaction amount
        setDCBalance(dcBalance + amount);
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Your Dummy Cash (DC) Balance:</h2>
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span className="text-xl font-bold">{dcBalance} DC</span>
                <div className="flex space-x-4">
                    {/* Button to spend DC */}
                    <button onClick={() => handleTransaction(-100)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Spend 100 DC</button>
                    {/* Button to earn DC */}
                    <button onClick={() => handleTransaction(100)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">Earn 100 DC</button>
                </div>
            </div>
        </div>
    );
};

export default DummyCurrencyComponent;
