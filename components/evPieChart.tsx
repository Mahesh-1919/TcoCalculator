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

  const vehiclePrice = Number(tcoData.evVehiclePrice);
  const chargeCost = Number(tcoData.chargeCostperKm * 365);
  const insuranceCost = Number(tcoData.evInsuranceCost);
  const maintainceCost = Number(tcoData.evMaintainceCost);
  const resaleCost = Number(tcoData.evResaleCost);

  const chartData = [
    {
      browser: "Vehicle Price",
      visitors: vehiclePrice,
      fill: "var(--color-chrome)",
    },
    {
      browser: "Charge Cost",
      visitors: chargeCost,
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
    <Card className="flex flex-col w-full break-before-page">
      <CardHeader className="items-center pb-0">
        <CardTitle>ICE Details</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0 flex items-center justify-center w-full h-full">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square  pb-0 [&_.recharts-pie-label-text]:fill-foreground h-96 w-full "
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
