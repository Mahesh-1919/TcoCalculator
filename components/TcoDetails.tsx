import React from "react";

import InputComponent from "./InputComponent";

const TcoDetails = () => {
  return (
    <div>
      <div className="bg-teal-500 text-white py-2 px-4 mb-4">TCO Details</div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4 p-4">
        <InputComponent
          id="averageTravelRange"
          required={true}
          title="Average Travel Range"
          label="KM"
        />
        <InputComponent
          id="calculationDuration"
          required
          title="Years Of Ownership"
          label="Years"
        />
      </div>
    </div>
  );
};

export default TcoDetails;
