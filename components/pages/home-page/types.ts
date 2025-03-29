export interface OrderItem {
  Item_Name: string;
  Item_Price: number;
  Quantity: number;
  Total_Price: number;
}

export interface Order {
  Order_ID: number;
  Customer_Name: string;
  Customer_Phone: string;
  Customer_Address: string;
  Items: OrderItem[];
  Order_Type: string;
  Order_Status: string;
  Delivery_Person: string;
  Delivery_Status: string;
  Ordered_Time: string;
  Delivered_Time: string;
}
