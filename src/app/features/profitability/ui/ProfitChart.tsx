import { CustomTooltip } from "@/app/features/profitability/ui/CustomTooltip";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, defs, linearGradient, stop, ComposedChart } from "recharts";

type Props = {
  fullStatistics: number[];
  startDate: string;
};

export const ProfitChart = ({ fullStatistics, startDate }: Props) => {

  const hoursCount = fullStatistics.length;
  const daysCount = Math.ceil(hoursCount / 12);

  const dates = Array.from({ length: daysCount }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    return date.toISOString().split("T")[0].split("-").join('.');
  });

  const chartData = dates.map((date, dayIndex) => {
    const startHour = dayIndex * 24;
    const dailyValues = fullStatistics.slice(startHour, startHour + 24);
    const avgProfit = dailyValues.reduce((sum, val) => sum + val, 0) / dailyValues.length || 0;
    return { date, profit: avgProfit };
  });

  return (
    <div className="w-full h-[20%] grow overflow-x-auto bg-dark">
      <div className="min-w-[1200px] h-[11rem]">
        <ResponsiveContainer height="100%" width={chartData.length * 80}>
          <ComposedChart 
          data={chartData} 
          margin={{right: 30, left: 0, bottom: 20 }} >
            <CartesianGrid strokeOpacity={0.2} vertical={true} />
            <defs>
              <linearGradient id="profitGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#0080e5" stopOpacity={0} />
                <stop offset="100%" stopColor="#0080e5" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" tickFormatter={(tick) => tick.slice(5)} tick={{ fill: "#4d6078", }} tickLine={false} dy={10} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="profit" stroke="#0080e5" fill="url(#profitGradient)" />
            <Line type="monotone" dataKey="profit" stroke="#0080e5" strokeWidth={2} dot={false} />
            <CartesianGrid strokeOpacity={0.2} horizontal={true} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
