import {
  format,
  formatDistanceToNow,
  isWithinInterval,
  subDays,
} from "date-fns";
import { orderStatus } from "../constants/constants";
import { OrderItem } from "@/components/pages/home-page/types";

// To format the order time in a specific format
export const formatOrderTime = (dateString: string) => {
  if (dateString === "") return "-";

  const date = new Date(dateString);
  const now = new Date();

  if (
    isWithinInterval(date, {
      start: subDays(now, 1),
      end: now,
    })
  ) {
    return formatDistanceToNow(date, { addSuffix: true })
      .split(" ")
      .slice(1)
      .join(" ");
  } else {
    return format(date, "dd/MM/yyyy");
  }
};

// To render the order status in a specific color
export const orderStatusClass = (status: string) => {
  switch (status) {
    case orderStatus.delivered:
      return "bg-green-500 text-white";
    case orderStatus.pending:
      return "bg-red-500 text-white";
    case orderStatus.inTransist:
      return "bg-yellow-500 text-white";
  }
};

// To get the total price of the order
export const getTotalPrice = (items: OrderItem[]) => {
  return items.reduce((acc, item) => acc + item.Total_Price, 0).toFixed(2);
};
