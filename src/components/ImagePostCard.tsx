import React from "react";

interface cardProp {
  children: React.ReactNode;
}

const ImagePostCard = ({ children }: cardProp) => {
  return (
    <div
      className="bg-cover bg-center aspect-square transition-all rounded-lg hover:ring-4 ring-black dark:ring-white relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80)",
      }}
    >
      <div className="absolute bg-gradient-to-t flex flex-row items-end from-white dark:from-black bottom-0 w-full h-36 rounded-lg p-2">
        {children}
      </div>
    </div>
  );
};

export default ImagePostCard;
