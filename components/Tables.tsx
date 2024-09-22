import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TcoData } from "@/store/atom";
import { useRecoilValue } from "recoil";

type Props = {};

const Tables = (props: Props) => {
  const tcoData = useRecoilValue(TcoData);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-6 px-4">
      <div className="">
        <h3 className="text-lg font-semibold text-white mb-2 bg-red-400  text-center rounded-t-md p-2  ">
          ICE Vehicle
        </h3>

        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead>Particulars (Average Cost)</TableHead>
              <TableHead>Cost (₹/KM)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Vehicle Price</TableCell>
              <TableCell>{tcoData.iceVehiclePrice}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vehicle Mileage</TableCell>
              <TableCell>{tcoData.iceVehicleMileage}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Insurance Amount (₹)</TableCell>
              <TableCell>{tcoData.iceInsuranceCost}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fuel type </TableCell>
              <TableCell>{tcoData.iceFuelType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fuel Cost (₹)/KM</TableCell>
              <TableCell>{tcoData.fuelCostperKm || 0}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Maintenance Cost (₹)</TableCell>
              <TableCell>{tcoData.iceMaintainceCost}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Resale Cost (₹)</TableCell>
              <TableCell>{tcoData.iceResaleCost || 0}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Total Cost (₹)/KM</TableCell>
              <TableCell className="font-bold">{tcoData.iceTco}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="">
        <h3 className="text-lg font-semibold text-white mb-2 bg-red-400  text-center rounded-t-md p-2  ">
          EV Vehicle
        </h3>

        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead>Particulars (Average Cost)</TableHead>
              <TableHead>Cost (₹/KM)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Vehicle Price</TableCell>
              <TableCell>{tcoData.evVehiclePrice}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vehicle Mileage</TableCell>
              <TableCell>{tcoData.evVehicleMileage}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Insurance Amount (₹)</TableCell>
              <TableCell>{tcoData.evInsuranceCost}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Battery Capacity </TableCell>
              <TableCell>{tcoData.evBatteryCapacity}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Charge Cost (₹)/KM</TableCell>
              <TableCell>{tcoData.chargeCostperKm}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Maintenance Cost (₹)</TableCell>
              <TableCell>{tcoData.evMaintainceCost}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Resale Cost (₹)</TableCell>
              <TableCell>{tcoData.evResaleCost}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Total Cost (₹)/KM</TableCell>
              <TableCell className="font-bold">{tcoData.evTco}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
