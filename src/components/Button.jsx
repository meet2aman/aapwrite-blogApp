import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${className} px-4 py-2 w-full rounded-lg justify-center items-center hover:bg-sky-700 ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
