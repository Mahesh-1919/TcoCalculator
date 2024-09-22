export default function Calulator(tcoData: any) {
  const fuelCostperKm = tcoData.iceFuelCost / tcoData.iceVehicleMileage;
  const chargeCostperKm =
    (tcoData.evChargeCost * tcoData.evBatteryCapacity) /
    tcoData.evVehicleMileage;

  const iceTcoCalculator = () => {
    const iceVehiclePrice: number = tcoData.iceVehiclePrice;
    const iceVehicleMileage: number = tcoData.iceVehicleMileage;
    const iceFuelCost: number = tcoData.iceFuelCost;
    const iceMaintainceCost: number = tcoData.iceMaintainceCost;
    const iceResaleCost: number = tcoData.iceResaleCost;
    const iceInsuranceCost: number = tcoData.iceInsuranceCost;
    const averageTravelRange: number = tcoData.averageTravelRange;
    const calculationDuration: number = tcoData.calculationDuration;

    const finalFuelCost =
      (iceFuelCost / iceVehicleMileage) * averageTravelRange * 365;

    const totalCost =
      Number(iceVehiclePrice) -
      Number(iceResaleCost) +
      (Number(finalFuelCost) +
        Number(iceMaintainceCost) +
        Number(iceInsuranceCost) * Number(calculationDuration));

    return totalCost;
  };

  const evTcoCalculator = () => {
    const evVehiclePrice = tcoData.evVehiclePrice;
    const evVehicleMileage = tcoData.evVehicleMileage;
    const evChargeCost = tcoData.evChargeCost;
    const evMaintainceCost = tcoData.evMaintainceCost;
    const evResaleCost = tcoData.evResaleCost;
    const evInsuranceCost = tcoData.evInsuranceCost;
    const averageTravelRange = tcoData.averageTravelRange;
    const calculationDuration = tcoData.calculationDuration;
    const evBatteryCapacity = tcoData.evBatteryCapacity;

    const finalChargeCost =
      ((evChargeCost * evBatteryCapacity) / evVehicleMileage) *
      averageTravelRange *
      365;

    const totalCost =
      Number(evVehiclePrice) -
      Number(evResaleCost) +
      (Number(finalChargeCost) +
        Number(evMaintainceCost) +
        Number(evInsuranceCost) * Number(calculationDuration));

    return totalCost;
  };

  return {
    iceTco: iceTcoCalculator(),
    evTco: evTcoCalculator(),
    difference: iceTcoCalculator() - evTcoCalculator(),
    fuelCostperKm,
    chargeCostperKm,
  };
}
