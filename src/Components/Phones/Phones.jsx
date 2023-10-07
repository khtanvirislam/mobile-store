import React from "react";
import { PhoneCard } from "./PhoneCard";

export const Phones = ({ phones }) => {
  console.log(phones);

  return (
    <div className="py-10">
      <h1 className="text-2xl text-center font-medium">
        All Categories Phones Here:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5">
        {phones?.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};
