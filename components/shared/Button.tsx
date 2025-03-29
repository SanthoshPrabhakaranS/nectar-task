"use client";

import React, { FC } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`w-full h-8 bg-linear-to-r from-[#090979] to-blue-500 text-white rounded-md cursor-pointer hover:scale-[102%] transition-all text-sm font-semibold ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
