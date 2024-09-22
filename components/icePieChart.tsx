"use client";

import { Pie, PieChart } from "recharts";

import { TcoData } from "@/store/atom";
import { useRecoilValue } from "recoil";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Vehicle Price",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Fuel Cost",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Insurance",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "maintanance",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "resale",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function Component() {
  const tcoData = useRecoilValue(TcoData);

  const vehiclePrice = Number(tcoData.iceVehiclePrice);
  const fuelCost = Number(tcoData.fuelCostperKm * 365);
  const insuranceCost = Number(tcoData.iceInsuranceCost);
  const maintainceCost = Number(tcoData.iceMaintainceCost);
  const resaleCost = Number(tcoData.iceResaleCost);

  const chartData = [
    {
      browser: "Vehicle Price",
      visitors: vehiclePrice,
      fill: "var(--color-chrome)",
    },
    {
      browser: "Fuel Cost",
      visitors: fuelCost,
      fill: "var(--color-safari)",
    },
    {
      browser: "Insurance",
      visitors: insuranceCost,
      fill: "var(--color-firefox)",
    },
    {
      browser: "maintanance",
      visitors: maintainceCost,
      fill: "var(--color-edge)",
    },
    { browser: "resale", visitors: resaleCost, fill: "var(--color-other)" },
  ];

  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>EV Details</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square  pb-0 [&_.recharts-pie-label-text]:fill-foreground h-96 w-full"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
