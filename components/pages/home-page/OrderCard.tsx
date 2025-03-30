"use client";

import React, { FC } from "react";
import { Order } from "./types";
import { orderStatus, orderType } from "@/utils/constants/constants";
import Button from "@/components/shared/Button";
import {
  formatOrderTime,
  getTotalPrice,
  orderStatusClass,
} from "@/utils/util-functions/util-functions";
import SplitBetweenElement from "@/components/shared/SplitBetweenElement";

interface OrderCardProps {
  order: Order;
  onDetailsClick: (orderId: number) => void;
}

const OrderCard: FC<OrderCardProps> = ({ order, onDetailsClick }) => {
  return (
    <div className="w-full border border-gray-400 rounded-md p-2 flex flex-col gap-3 text-sm font-medium shadow">
      <SplitBetweenElement>
        <p>Order Id: {order.Order_ID}</p>
        <SplitBetweenElement className="gap-1 justify-end text-[10px]">
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
        </SplitBetweenElement>
      </SplitBetweenElement>

      <div className="flex flex-col gap-1 font-semibol mb-2">
        <SplitBetweenElement>
          Ordered Items
          <p>{order.Items.length}</p>
        </SplitBetweenElement>

        <SplitBetweenElement>
          Total amount
          <p>${getTotalPrice(order.Items)}</p>
        </SplitBetweenElement>

        <SplitBetweenElement className="w-full flex flex-row items-center justify-between">
          Ordered Time
          <p>{formatOrderTime(order.Ordered_Time)}</p>
        </SplitBetweenElement>

        <SplitBetweenElement className="w-full flex flex-row items-center justify-between">
          Delivery Time
          <p>{formatOrderTime(order.Delivered_Time)}</p>
        </SplitBetweenElement>
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
