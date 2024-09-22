import React from "react";
import IcePieChart from "@/components/evPieChart";
import LineChart from "@/components/lineChart";
import EvPieChart from "@/components/icePieChart";

type Props = {};

const graphs = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-4 place-items-center p-4  ">
        <IcePieChart />

        <EvPieChart />
      </div>
      <div className="col-span-2 px-4">
        <LineChart />
      </div>
    </>
  );
};

export default graphs;
