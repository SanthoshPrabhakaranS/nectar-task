import React, { FC } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import { Order } from "../home-page/types";
import { orderStatus } from "@/utils/constants/constants";

interface BarChartUIProps {
  data: Order[];
}

const BarChartUI: FC<BarChartUIProps> = ({ data }) => {
  const DATA = [
    {
      name: "Pending",
      orders: data.filter((item) => item.Order_Status === orderStatus.pending)
        .length,
    },
    {
      name: "In Transit",
      orders: data.filter(
        (item) => item.Order_Status === orderStatus.inTransist
      ).length,
    },
    {
      name: "Delivered",
      orders: data.filter((item) => item.Order_Status === orderStatus.delivered)
        .length,
    },
  ];
  return (
    <div className="w-full sm:max-w-[50%]">
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart
          data={DATA}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="orders"
            fill="#B3CDAD"
            activeBar={<Rectangle fill="blue" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartUI;
