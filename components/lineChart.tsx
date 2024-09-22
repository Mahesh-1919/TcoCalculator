"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { TcoData } from "@/store/atom";
import { useRecoilValue } from "recoil";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

export const description = "A multiple line chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Component() {
  const data = useRecoilValue(TcoData);
  const [iceTco, setIcoTco] = useState(0);
  const [evTco, setEvTco] = useState(0);

  useEffect(() => {
    if (data.calculationDuration === 1) {
      setIcoTco(data.iceTco);
      setEvTco(data.evTco);
    } else {
      setIcoTco(data.iceTco / data.calculationDuration);
      setEvTco(data.evTco / data.calculationDuration);
    }
  }, [data]);

  const chartData = [
    { year: "1", ICE: iceTco, EV: evTco },
    { year: "2", ICE: iceTco * 2, EV: evTco * 2 },
    { year: "3", ICE: iceTco * 3, EV: evTco * 3 },
    { year: "4", ICE: iceTco * 4, EV: evTco * 4 },
    { year: "5", ICE: iceTco * 5, EV: evTco * 5 },
    { year: "6", ICE: iceTco * 6, EV: evTco * 6 },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Year-On-Year cost savings between EVs and ICE </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-96 w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value: any) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="ICE"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="EV"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-center">years</div>
      </CardFooter>
    </Card>
  );
}
