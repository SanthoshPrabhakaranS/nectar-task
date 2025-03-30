"use client";

import React from "react";
import Container from "@/components/container/Container";
import data from "@/components/data/data.json";
import { orderStatus } from "@/utils/constants/constants";
import SplitBetweenElement from "@/components/shared/SplitBetweenElement";
import { ScrollText } from "lucide-react";
import BarChartUI from "./BarChartUI";
import SalesInsight from "./SalesInsight";

const InsightsPage = () => {
  const getFilteredData = (value: string) => {
    const filterData = data.filter(
      (item) =>
        item.Order_Type === value ||
        item.Order_Status === value ||
        item.Delivery_Status === value
    );

    return filterData;
  };

  const DATA = [
    {
      id: 1,
      title: "Orders in Pending",
      total: getFilteredData(orderStatus.pending).length,
      color: "text-red-500",
    },
    {
      id: 2,
      title: "Orders in Transit",
      total: getFilteredData(orderStatus.inTransist).length,
      color: "text-yellow-500",
    },
    {
      id: 3,
      title: "Orders Delivered",
      total: getFilteredData(orderStatus.delivered).length,
      color: "text-green-500",
    },
  ];

  return (
    <Container className="w-full flex flex-col gap-10">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {DATA.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-gray-300 rounded-md p-3 shadow flex flex-col gap-6"
            >
              <SplitBetweenElement>
                <p className="font-medium text-sm text-gray-800">
                  {item.title}
                </p>
                <ScrollText size={22} />
              </SplitBetweenElement>
              <h1 className={`text-center text-4xl mb-3 ${item.color}`}>
                {String(item.total).padStart(2, "0")}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="w-full flex flex-col sm:flex-row items-center gap-2">
        <BarChartUI data={data} />
        <SalesInsight data={data} />
      </div>
    </Container>
  );
};

export default InsightsPage;
