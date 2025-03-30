export const orderType = {
  online: "Online",
  dineIn: "Dine In",
};

export const orderStatus = {
  pending: "Pending",
  delivered: "Delivered",
  inTransist: "In Transit",
};

export const orderFilters = [
  { label: "All", value: "all" },
  { label: "Online", value: orderType.online },
  { label: "Dine In", value: orderType.dineIn },
  { label: "Pending", value: orderStatus.pending },
  { label: "Delivered", value: orderStatus.delivered },
  { label: "In Transit", value: orderStatus.inTransist },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Insights", href: "/insights" },
];
