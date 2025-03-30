"use client";

import { OrderItem } from "@/components/pages/home-page/types";
import SplitBetweenElement from "@/components/shared/SplitBetweenElement";
import { getTotalPrice } from "@/utils/util-functions/util-functions";
import React, { FC } from "react";

interface OrderItemProps {
  orderItems: OrderItem[];
}

const OrderItems: FC<OrderItemProps> = ({ orderItems }) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-semibold">Items ({orderItems.length})</h1>

      {orderItems.map((item, Idx) => {
        return (
          <div key={Idx} className="flex flex-col font-semibold border-b">
            <SplitBetweenElement className="gap-1">
              <p>{item.Item_Name}</p>
              <p>${item.Item_Price.toFixed(2)}</p>
            </SplitBetweenElement>

            <SplitBetweenElement className="gap-1">
              <p>Quantity</p>
              <p>{item.Quantity}</p>
            </SplitBetweenElement>

            <SplitBetweenElement className="gap-1">
              <p>Price</p>
              <p>${item.Total_Price.toFixed(2)}</p>
            </SplitBetweenElement>
          </div>
        );
      })}
      <SplitBetweenElement className="font-semibold py-1">
        Total amount
        <p>${getTotalPrice(orderItems)}</p>
      </SplitBetweenElement>
    </div>
  );
};

export default OrderItems;
