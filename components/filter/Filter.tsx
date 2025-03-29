"use client";

import { orderFilters } from "@/utils/constants/constants";
import React, { FC } from "react";

interface FilterProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filter: FC<FilterProps> = ({ onChange, value }) => {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="filter" className="text-sm font-semibold">
        Filter by:
      </label>
      <select
        value={value}
        onChange={onChange}
        name="filter"
        id="filter"
        className="border border-gray-300 rounded-md p-2 text-sm cursor-pointer focus:outline-none"
      >
        {orderFilters.map((status, Idx) => {
          return (
            <option key={Idx} value={status.value}>
              {status.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
