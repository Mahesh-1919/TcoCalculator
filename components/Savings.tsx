import React from "react";

interface AnnualSavingsProps {
  amount: number;
}

export default function AnnualSavings({ amount }: AnnualSavingsProps) {
  return (
    <div className="w-full md:max-w-md mx-auto bg-gray-900 p-8 rounded-lg relative overflow-hidden my-4 container px-8 break-before-page ">
      <div className="text-center relative z-10">
        <h2 className="text-2xl font-bold text-white mb-6">Annual Savings</h2>
        <div className="bg-green-800 rounded-lg p-4 mb-6">
          <p className="text-3xl font-bold text-green-400">
            ₹{amount.toFixed(2)}
          </p>
        </div>

        <p className="text-lg text-gray-400">
          cost than a conventional vehicle
        </p>
      </div>
    </div>
  );
}
