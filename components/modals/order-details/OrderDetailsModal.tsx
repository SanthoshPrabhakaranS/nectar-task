"use client";

import { Order } from "@/components/pages/home-page/types";
import Button from "@/components/shared/Button";
import SplitBetweenElement from "@/components/shared/SplitBetweenElement";
import { orderType } from "@/utils/constants/constants";
import {
  formatOrderTime,
  orderStatusClass,
} from "@/utils/util-functions/util-functions";
import React, { FC, useEffect } from "react";

interface OrderDetailsModalProps {
  order: Order | null;
  closeShowDetailsModal: () => void;
}

const OrderDetailsModal: FC<OrderDetailsModalProps> = ({
  order,
  closeShowDetailsModal,
}) => {
  if (!order) {
    return null;
  }

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "";
  };

  useEffect(() => {
    disableBodyScroll();
    return () => enableBodyScroll();
  }, []);

  return (
    <div className="w-full min-h-screen h-full absolute left-0 top-0 bg-black/50 z-10 flex items-center justify-center">
      <div className="bg-white z-50 p-3 rounded-lg w-full max-w-[450px]">
        <div className="w-ful rounded-md p-2 flex flex-col gap-3 text-sm font-medium">
          <SplitBetweenElement className="w-full flex items-center justify-between">
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
          </SplitBetweenElement>

          <div className="flex flex-col gap-1 font-semibol mb-2">
            <SplitBetweenElement>
              Ordered Items
              <p>{order.Items.length}</p>
            </SplitBetweenElement>

            <SplitBetweenElement>
              Total amount
              <p>
                $
                {order.Items.reduce(
                  (acc, item) => acc + item.Total_Price,
                  0
                ).toFixed(2)}
              </p>
            </SplitBetweenElement>

            <SplitBetweenElement>
              Ordered Time
              <p>{formatOrderTime(order.Ordered_Time)}</p>
            </SplitBetweenElement>

            <SplitBetweenElement>
              <p>Customer Name</p>
              <p>{order.Customer_Name}</p>
            </SplitBetweenElement>

            <SplitBetweenElement>
              <p>Customer Phone</p>
              <p>{order.Customer_Phone}</p>
            </SplitBetweenElement>

            <SplitBetweenElement>
              <p>Customer Address</p>
              <p>{order.Customer_Address}</p>
            </SplitBetweenElement>

            <SplitBetweenElement>
              <p>Delivery Person</p>
              <p>
                {order.Delivery_Person != ""
                  ? order.Delivery_Person
                  : "Not assigned"}
              </p>
            </SplitBetweenElement>
          </div>

          <Button label="Close" onClick={closeShowDetailsModal} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
