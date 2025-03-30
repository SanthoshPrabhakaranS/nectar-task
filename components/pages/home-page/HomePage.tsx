"use client";

import React, { useState, useMemo, useCallback } from "react";
import Container from "@/components/container/Container";
import OrderCard from "./OrderCard";
import { Filter } from "@/components/filter";
import { Order } from "./types";
import { orderFilters } from "@/utils/constants/constants";
import { OrderDetailsModal } from "@/components/modals/order-details";
import { Pagination } from "@/components/pagination";
import { usePagination } from "@/components/hooks/usePagination";
import data from "@/components/data/data.json";
import { ScrollText } from "lucide-react";

const HomePage = () => {
  const [filterValue, setFilterValue] = useState<string>(orderFilters[0].value);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = useMemo(() => {
    if (filterValue === orderFilters[0].value) return data;

    return data.filter(
      (order) =>
        order.Order_Type === filterValue ||
        order.Delivery_Status === filterValue ||
        order.Order_Status === filterValue
    );
  }, [filterValue]);

  const { currentPage, setCurrentPage, paginatedItems, totalPages } =
    usePagination(filteredOrders, 8);

  const handleDetailsClick = useCallback(
    (orderId: number) => {
      const order = data.find((order) => order.Order_ID === orderId);
      setSelectedOrder(order || null);
    },
    [data, setSelectedOrder, setCurrentPage]
  );

  const closeModal = useCallback(() => {
    setSelectedOrder(null);
  }, [setSelectedOrder]);

  return (
    <Container className="flex flex-col gap-4">
      {/* Order Details Modal */}
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          closeShowDetailsModal={closeModal}
        />
      )}

      <div className="w-full flex justify-between items-center">
        <h1 className="font-semibold text-lg flex flex-row items-center gap-2">
          Orders ({filteredOrders.length}) <ScrollText size={20} />
        </h1>
        <Filter
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedItems.map((order) => (
          <OrderCard
            key={order.Order_ID}
            order={order}
            onDetailsClick={handleDetailsClick}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default HomePage;
