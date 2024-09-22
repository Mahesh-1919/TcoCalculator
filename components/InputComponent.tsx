"use client";
import React from "react";
import { Input } from "./ui/input";
import { TcoData } from "@/store/atom";

import { useRecoilState } from "recoil";

type Props = {
  id: string;

  required: boolean;
  title: string;
  label: string;
};

type TcoDataType = {
  averageTravelRange: number;
  calculationDuration: number;
  iceVehiclePrice: number;
  iceVehicleMileage: number;
  iceFuelCost: number;
  iceFuelType: string;
  iceMaintainceCost: number;
  iceResaleCost: number;
  iceInsuranceCost: number;
  evVehiclePrice: number;
  evBatteryCapacity: number;
  evChargeCost: number;
  evVehicleMileage: number;
  evMaintainceCost: number;
  evResaleCost: number;
  evInsuranceCost: number;
  fuelCostperKm: number;
  chargeCostperKm: number;
  iceTco: number;
  evTco: number;
  savings: number;
  [key: string]: number | string;
};

const InputComponent = ({ title, required, label, id }: Props) => {
  const [tcoData, setTcoData] = useRecoilState<TcoDataType>(TcoData);

  const handleChange = async (e: any) => {
    await setTcoData({
      ...tcoData,
      [id]: e.target.value,
    });
  };
  return (
    <div className="grid grid-cols-2 md:px-2">
      <label className="block mb-2">{title}</label>
      <div className="flex">
        <Input
          type="number"
          value={tcoData[id]}
          className="rounded-r-none"
          required={required}
          onChange={(e) => handleChange(e)}
          id={id}
        />
        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 bg-teal-500 text-white">
          {label}
        </span>
      </div>
    </div>
  );
};

export default InputComponent;
