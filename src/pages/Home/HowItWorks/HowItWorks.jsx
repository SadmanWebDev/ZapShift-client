import React from "react";
import { LiaTruckPickupSolid } from "react-icons/lia";

const HowItWorks = () => {
  const worksData = [
    {
      icon: <LiaTruckPickupSolid />,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <LiaTruckPickupSolid />,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <LiaTruckPickupSolid />,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <LiaTruckPickupSolid />,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="my-28">
      <h1 className="text-3xl font-bold mb-8">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {worksData.map((workData) => (
          <div className="card p-6 shadow bg-white rounded-3xl gap-3">
            <span className="text-5xl">{workData.icon}</span>
            <h3 className="text-xl font-semibold">{workData.title}</h3>
            <p>{workData.description}</p>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default HowItWorks;
