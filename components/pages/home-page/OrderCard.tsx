"use client";

import React, { FC } from "react";
import { Order } from "./types";
import { orderStatus, orderType } from "@/utils/constants/constants";
import Button from "@/components/shared/Button";
import {
  formatOrderTime,
  orderStatusClass,
} from "@/utils/util-functions/util-functions";

interface OrderCardProps {
  order: Order;
  onDetailsClick: (orderId: number) => void;
}

const OrderCard: FC<OrderCardProps> = ({ order, onDetailsClick }) => {
  return (
    <div className="w-full border border-gray-400 rounded-md p-2 flex flex-col gap-3 text-sm font-medium">
      <div className="w-full flex items-center justify-between">
        <p>Order Id: {order.Order_ID}</p>
        <div className="flex items-center gap-1 text-[10px]">
          <div
            className={`py-1 px-2 font-medium rounded-full border flex items-center gap-1`}
          >
            {order.Order_Type}{" "}
            <div
              className={`h-2 w-2 rounded-full ${
                order.Order_Type == orderType.online
                  ? "bg-green-500"
                  : "bg-amber-800"
              }`}
            ></div>
          </div>
          <p
            className={`px-2 py-1 rounded-full ${orderStatusClass(
              order.Order_Status
            )}`}
          >
            {order.Order_Status}{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1 font-semibol mb-2">
        <div className="w-full flex flex-row items-center justify-between">
          Ordered Items
          <p>{order.Items.length}</p>
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          Total amount
          <p>
            $
            {order.Items.reduce(
              (acc, item) => acc + item.Total_Price,
              0
            ).toFixed(2)}
          </p>
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          Ordered Time
          <p>{formatOrderTime(order.Ordered_Time)}</p>
        </div>
      </div>

      <Button
        label="Details"
        onClick={() => {
          onDetailsClick(order.Order_ID);
        }}
      />
    </div>
  );
};

export default OrderCard;
