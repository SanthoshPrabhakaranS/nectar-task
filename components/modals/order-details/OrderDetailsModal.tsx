"use client";

import { Order } from "@/components/pages/home-page/types";
import Button from "@/components/shared/Button";
import SplitBetweenElement from "@/components/shared/SplitBetweenElement";
import { orderType } from "@/utils/constants/constants";
import {
  formatOrderTime,
  orderStatusClass,
} from "@/utils/util-functions/util-functions";
import React, { FC, useEffect, useRef } from "react";
import OrderItem from "./OrderItems";
import OrderItems from "./OrderItems";

interface OrderDetailsModalProps {
  order: Order | null;
  closeShowDetailsModal: () => void;
}

const OrderDetailsModal: FC<OrderDetailsModalProps> = ({
  order,
  closeShowDetailsModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!order) return;

    const disableBodyScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableBodyScroll = () => {
      document.body.style.overflow = "";
    };

    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeShowDetailsModal();
      }
    };

    disableBodyScroll();
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      enableBodyScroll();
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [order, closeShowDetailsModal]);

  if (!order) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          ref={modalRef}
          className="relative bg-white rounded-lg w-full max-w-md mx-auto p-6 shadow-xl"
        >
          {/* Modal content */}
          <div className="w-ful rounded-md flex flex-col gap-3 text-sm font-medium">
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
              <OrderItems orderItems={order.Items} />

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
    </div>
  );
};

export default OrderDetailsModal;
