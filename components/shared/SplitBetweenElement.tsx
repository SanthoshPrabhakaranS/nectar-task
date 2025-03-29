"use client";

import React, { FC } from "react";

interface SplitBetweenElementProps {
  children: React.ReactNode;
  className?: string;
}

const SplitBetweenElement: FC<SplitBetweenElementProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`w-full flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
};

export default SplitBetweenElement;
