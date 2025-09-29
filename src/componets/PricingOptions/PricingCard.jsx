import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  const { title, price, info, features } = pricing;
  return (
    <div className=" flex flex-col bg-amber-500 mb-5 p-3">
    {/* card head */}
      <div>
        <h1 className="font-bold text-3xl">{title}</h1>
        <p>${price}.99/month</p>
      </div>
      <p className="lg:h-[55px]">{info.length > 70 ? info.slice(0, 70) + "..." : info}</p>
      {/* card body */}
      <div className="bg-amber-200 text-black p-2 space-y-2 flex-1">
        {
            features.map((featur, index) => <PricingFeatures key={index} featur={featur}></PricingFeatures>)
        }
      </div>
      <button className="btn w-full mt-3">Subscribe</button>
    </div>
  );
};

export default PricingCard;
