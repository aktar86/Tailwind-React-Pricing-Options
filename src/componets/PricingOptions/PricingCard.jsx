import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  const { title, price, info, features } = pricing;
  return (
    <div className="border border-amber-100 bg-amber-500 mb-5 p-3">
    {/* card head */}
      <div>
        <h1>{title}</h1>
        <p>${price}</p>
      </div>
      <p className="h-[55px]">{info.length > 70 ? info.slice(0, 70) + "..." : info}</p>
      {/* card body */}
      <div className="bg-amber-200 text-black p-2 space-y-2">
        {
            features.map((featur, index) => <PricingFeatures key={index} featur={featur}></PricingFeatures>)
        }
      </div>
    </div>
  );
};

export default PricingCard;
