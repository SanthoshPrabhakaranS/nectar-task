"use client";

import { useState, useEffect, useMemo } from "react";

export const usePagination = <T>(items: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, items, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  return {
    currentPage,
    setCurrentPage,
    paginatedItems,
    totalPages,
  };
};
