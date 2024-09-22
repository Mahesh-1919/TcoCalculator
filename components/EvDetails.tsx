import React, { useEffect } from "react";

import { Button } from "./ui/button";
import InputComponent from "./InputComponent";

import { TcoData, visible } from "@/store/atom";
import { useResetRecoilState } from "recoil";

const EvDetails = () => {
  const resetData = useResetRecoilState(TcoData);
  const resetvisibled = useResetRecoilState(visible);

  const resetHandler = () => {
    resetData();
    resetvisibled();
  };

  return (
    <div>
      <div className="bg-teal-500 text-white py-2 px-4 mb-4">Ev Details</div>

      <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4 p-4">
          <InputComponent
            id="evVehiclePrice"
            required
            title="Vehicle Price"
            label="₹"
          />
          <InputComponent
            id="evVehicleMileage"
            required
            title="Mailege"
            label="KM"
          />
          <InputComponent
            id="evBatteryCapacity"
            required
            title=" Battery Capacity"
            label="KWH"
          />
          <InputComponent
            id="evChargeCost"
            required
            title="Charge Cost"
            label="₹"
          />
          <InputComponent
            id="evMaintainceCost"
            required
            title="Maintainace Cost"
            label="₹"
          />
          <InputComponent
            id="evInsuranceCost"
            required
            title="Insurance Cost"
            label="₹"
          />

          <InputComponent
            id="evResaleCost"
            required
            title="Resale Cost"
            label="₹"
          />
        </div>

        <div className="flex justify-center items-center my-4">
          <div className="space-x-2">
            <Button className="bg-red-500" onClick={resetHandler} type="button">
              Reset
            </Button>
            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white"
              type="submit"
            >
              Calculate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvDetails;
