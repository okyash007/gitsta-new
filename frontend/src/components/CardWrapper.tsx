import React from "react";

interface cardProp {
  children: React.ReactNode;
}

const CardWrapper = ({ children }: cardProp) => {
  return (
    <div className="flex flex-col hover:ring-2 ring-black dark:ring-white bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 transition-all hover:dark:bg-opacity-50 hover:bg-slate-200">
      {children}
    </div>
  );
};

export default CardWrapper;