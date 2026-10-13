
import React from "react";
import { FiBox } from "react-icons/fi";
import { LuRocket } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";

const Price = () => {
  const starterFeatures = [
    "Upload event photos",
    "Create client galleries",
    "Client favourite selection",
    "Organize selected photos",
    "Secure photo delivery",
    "Easy photo downloads",
  ];

  const premiumFeatures = [
    "Everything in Starter Plan",
    "Unlimited event galleries",
    "Large photo collections",
    "Priority photo delivery",
    "Advanced gallery management",
    "Premium photographer support",
  ];

  return (
    <section className="w-full bg-[#f7f7f3] py-20">
      <div className="container mx-auto max-w-7xl px-4">

        {/* HEADING */}
        <div className="mb-12 text-center">
          <p className="bg-black inline-block text-white font-medium px-4 py-2 rounded-lg mb-10">
            ₹ Pricing
          </p>

          <h2 className="text-4xl font-medium leading-tight md:text-6xl">
            Flexible plans that fit
            <br />
            <span className="text-orange-500">
              your photography
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600 md:text-xl">
            Simple, transparent pricing designed for photographers and studios of
            every size.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">

          {/* STARTER PLAN */}
          <div className="rounded-[28px] border border-gray-300 bg-white p-8 md:p-10">

            {/* PLAN NAME */}
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gray-100 p-3">
                <FiBox className="text-2xl" />
              </div>

              <h3 className="text-3xl font-medium">
                Starter Plan
              </h3>
            </div>

            {/* PRICE */}
            <div className="mt-8 flex items-end gap-3">
              <h2 className="text-5xl font-medium md:text-6xl">
                ₹499
              </h2>

              <p className="mb-2 text-xl">
                /month
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-md text-lg leading-7 text-gray-600">
              Perfect for individual photographers and small photography studios.
            </p>

            {/* BUTTON */}
            <button className="mt-7 flex items-center gap-5 rounded-full bg-black py-2 pl-6 pr-2 font-semibold text-white">
              Get Started

              <span className="rounded-full bg-white p-3 text-black">
                <HiArrowUpRight />
              </span>
            </button>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">
              {starterFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="rounded-full bg-orange-500 p-1 text-xs text-white">
                    <FaCheck />
                  </span>

                  <p className="text-lg">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PREMIUM PLAN */}
          <div className="rounded-[28px] bg-orange-500 p-[4px]">
            <div className="h-full rounded-[24px] bg-white p-8 md:p-10">

              {/* PLAN NAME */}
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gray-100 p-3">
                  <LuRocket className="text-2xl" />
                </div>

                <h3 className="text-3xl font-medium">
                  Premium Plan
                </h3>
              </div>

              {/* PRICE */}
              <div className="mt-8 flex items-end gap-3">
                <h2 className="text-5xl font-medium md:text-6xl">
                  ₹1000
                </h2>

                <p className="mb-2 text-xl">
                  /month
                </p>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-md text-lg leading-7 text-gray-600">
                Designed for professional photographers and growing photography
                studios.
              </p>

              {/* BUTTON */}
              <button className="mt-7 flex items-center gap-5 rounded-full bg-black py-2 pl-6 pr-2 font-semibold text-white">
                Choose Premium

                <span className="rounded-full bg-white p-3 text-black">
                  <HiArrowUpRight />
                </span>
              </button>

              {/* FEATURES */}
              <div className="mt-10 space-y-5">
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="rounded-full bg-orange-500 p-1 text-xs text-white">
                      <FaCheck />
                    </span>

                    <p className="text-lg">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Price;
