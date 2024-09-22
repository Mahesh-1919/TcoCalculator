"use client";
import React from "react";
import InputComponent from "./InputComponent";
import { useRecoilState } from "recoil";
import { TcoData } from "@/store/atom";
const IceDetails = () => {
  const [tcoData, setTcoData] = useRecoilState(TcoData);

  const handleChange = async (e: any) => {
    await setTcoData({
      ...tcoData,
      iceFuelType: e.target.value,
    });
  };

  return (
    <div>
      <div className="bg-red-400 text-white py-2 px-4 mb-4">ICE Details</div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4 p-4">
        <InputComponent
          id="iceVehiclePrice"
          required
          title="Vehicle Price"
          label="₹"
        />

        <div className="grid grid-cols-2">
          <label className="block mb-2">Vehicle Fuel Type</label>

          <select
            onChange={(e) => handleChange(e)}
            className=" border border-zinc-300 rounded-md md:mr-2 pl-2"
          >
            <option value={"petrol"}>Petrol</option>
            <option value={"diesel"}>Diesel</option>
          </select>
        </div>

        <InputComponent
          id="iceVehicleMileage"
          required
          title="Vehicle Mileage"
          label="KM"
        />
        <InputComponent id="iceFuelCost" required title="Fuel Cost" label="₹" />

        <InputComponent
          id="iceMaintainceCost"
          required
          title="Maintaince Cost"
          label="₹"
        />

        <InputComponent
          id="iceResaleCost"
          required
          title="Resale Cost "
          label="₹"
        />

        <InputComponent
          id="iceInsuranceCost"
          required
          title="Insurance Cost"
          label="₹"
        />
      </div>
    </div>
  );
};

export default IceDetails;
