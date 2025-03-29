"use client";

import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={`w-full h-full p-4 ${className}`}>{children}</div>;
};

export default Container;
