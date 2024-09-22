import { atom } from "recoil";

export const TcoData = atom({
  key: "TcoData",
  default: {
    averageTravelRange: 0,
    calculationDuration: 1,
    iceVehiclePrice: 0,
    iceVehicleMileage: 0,
    iceFuelCost: 0,
    iceFuelType: "petrol",
    iceMaintainceCost: 0,
    iceResaleCost: 0,
    iceInsuranceCost: 0,
    evVehiclePrice: 0,
    evBatteryCapacity: 0,
    evChargeCost: 0,
    evVehicleMileage: 0,
    evMaintainceCost: 0,
    evResaleCost: 0,
    evInsuranceCost: 0,
    fuelCostperKm: 0,
    chargeCostperKm: 0,
    iceTco: 0,
    evTco: 0,
    savings: 0,
  },
});

export const visible = atom({
  key: "visible",
  default: false,
});
