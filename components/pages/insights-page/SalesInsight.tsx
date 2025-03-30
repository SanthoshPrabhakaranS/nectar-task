"use client";

import React, { FC } from "react";
import { Order } from "../home-page/types";
import { orderStatus } from "@/utils/constants/constants";
import SplitBetweenElement from "@/components/shared/SplitBetweenElement";

interface SalesInsightProps {
  data: Order[];
}

const SalesInsight: FC<SalesInsightProps> = ({ data }) => {
  const calculateTotal = (status: string) => {
    return data
      .filter((item) => item.Order_Status === status)
      .reduce(
        (acc, item) =>
          acc + item.Items.reduce((sum, item) => sum + item.Item_Price, 0),
        0
      );
  };

  const DATA = [
    {
      name: "Amount in Pending",
      amount: calculateTotal(orderStatus.pending),
      color: "bg-red-500",
    },
    {
      name: "Amount In Transit",
      amount: calculateTotal(orderStatus.inTransist),
      color: "bg-yellow-500",
    },
    {
      name: "Amount in Delivered",
      amount: calculateTotal(orderStatus.delivered),
      color: "bg-green-500",
    },
    {
      name: "Total Sales",
      amount: data.reduce(
        (acc, item) =>
          acc + item.Items.reduce((sum, item) => sum + item.Item_Price, 0),
        0
      ),
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="w-full sm:max-w-[50%] flex flex-col gap-4">
      {DATA.map((item, Idx) => {
        return (
          <SplitBetweenElement
            key={Idx}
            className="p-2 sm:px-5 text-sm font-semibold rounded-md border border-gray-300 shadow h-[60px]"
          >
            <div className="flex flex-row items-center gap-2">
              <p>{item.name}</p>
              <div className={`h-2 w-2 ${item.color} rounded-full`}></div>
            </div>
            <p>${item.amount.toFixed(2)}</p>
          </SplitBetweenElement>
        );
      })}
    </div>
  );
};

export default SalesInsight;
