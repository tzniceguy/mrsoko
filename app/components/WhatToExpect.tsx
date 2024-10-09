import Expectation from "./Expectation";

export default function WhatToExpect() {
  return (
    <div className="h-screen md:grid md:grid-cols-2 bg-sky-100 p-10 gap-2">
      <div>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-400">
          What to expect with every order you make
        </h2>
        <div className="mt-12">
          <Expectation
            title="Freshness"
            description="guaranteed fresh products"
          />
          <Expectation
            title="Quality"
            description="Rigorous quality control for the best product"
          />
          <Expectation
            title="Variety"
            description="exotic fruits, organic vegetables, aromatic spices and wholesome"
          />
          <Expectation
            title="Sustainability"
            description="supporting local farmers and eco-friendly practices"
          />
        </div>
      </div>
      <div
        className="bg-cover bg-gradient-to-br from-sky-400 to indigo-350"
        style={{ backgroundImage: "url('/delivery-bike-unsplash.jpg')" }}
      ></div>
    </div>
  );
}
