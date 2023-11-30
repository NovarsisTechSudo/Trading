import React from "react";

const STradeCard = ({title,desc}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:gap-x-5 w-[260px] lg:w-[300px]">
      <img className="w-[50px] lg:w-[70px] lg:h-[70px]" src="goldroundlogo.png" alt="" />
      <div className="flex flex-col gap-3">
      <h3 className="lg:text-2xl font-semibold">{title}</h3>
      <p className="lg:text-xl text-gray-400">
        Lorem ipsumamet consectetur adipisicing elit. Omnis,
        praesentium!
      </p>
      </div>
    </div>
  );
};

export default STradeCard;
