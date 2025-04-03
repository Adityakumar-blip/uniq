import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import phonepe from "@/assets/phonepe.png";
import googlepay from "@/assets/googlepay.png";
import paytm from "@/assets/paytm.png";
import creditcard from "@/assets/creditcard.png";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const pricingPlans = [
    {
      id: "starter",
      name: "Starter",
      icon: "🚀",
      description:
        "Perfect for students and freshers starting their interview journey.",
      monthly: {
        price: 499,
        suffix: "/month",
      },
      annual: {
        price: 399,
        suffix: "/month",
        savings: "Save ₹1,200/year",
      },
      features: [
        "50 practice questions/month",
        "3 mock interviews",
        "Basic progress tracking",
        "Campus placement preparation",
        "Email support",
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "secondary",
    },
    {
      id: "professional",
      name: "Professional",
      icon: "⭐",
      popular: true,
      description:
        "For experienced professionals targeting top-tier companies.",
      monthly: {
        price: 999,
        suffix: "/month",
      },
      annual: {
        price: 799,
        suffix: "/month",
        savings: "Save ₹2,400/year",
      },
      features: [
        "Unlimited practice questions",
        "15 mock interviews/month",
        "Personalized study plan",
        "Advanced analytics",
        "Company-specific question banks",
        "WhatsApp & email support",
        "Interview recordings with feedback",
      ],
      buttonText: "7-Day Free Trial",
      buttonVariant: "primary",
    },
    {
      id: "premium",
      name: "Premium",
      icon: "💎",
      description:
        "For serious aspirants targeting FAANG and product companies.",
      monthly: {
        price: 1999,
        suffix: "/month",
      },
      annual: {
        price: 1599,
        suffix: "/month",
        savings: "Save ₹4,800/year",
      },
      features: [
        "Everything in Professional plan",
        "Unlimited mock interviews",
        "2 1-on-1 mentor sessions/month",
        "Resume review & optimization",
        "System design interview prep",
        "Salary negotiation guidance",
        "Priority support with 6hr response",
      ],
      buttonText: "Get Started",
      buttonVariant: "dark",
    },
  ];

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    document
      .getElementById("pricing-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="pricing-section" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4"
          >
            Affordable Plans for Every Career Stage
          </motion.h2>
          <motion.p
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Invest in your future with our budget-friendly plans designed
            specifically for Indian tech professionals. No hidden charges,
            cancel anytime.
          </motion.p>
        </div>

        {/* Special Offer Banner */}
        <motion.div
          //   initial={{ opacity: 0, y: 20 }}
          //   whileInView={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 mb-10 text-center"
        >
          <p className="text-amber-800 font-medium flex items-center justify-center">
            <span className="mr-2">🎉</span>
            Special offer: Use code{" "}
            <span className="mx-2 bg-amber-100 px-2 py-1 rounded font-bold">
              NEWUSER30
            </span>{" "}
            for 30% off your first 3 months!
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          //   initial={{ opacity: 0, y: 20 }}
          //   whileInView={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-full p-1 shadow-md inline-flex">
            <button
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium transition-colors relative ${
                billingCycle === "annual"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              Annual
              <span className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const isActive = selectedPlan === plan.id;
            const pricingData =
              billingCycle === "monthly" ? plan.monthly : plan.annual;

            return (
              <motion.div
                key={plan.id}
                // initial={{ opacity: 0, y: 30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? "shadow-lg border-2 border-primary relative transform md:-translate-y-4 hover:shadow-xl"
                    : "shadow-md border border-gray-100 hover:shadow-lg"
                } ${isActive ? "ring-4 ring-primary ring-opacity-50" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-sm font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary text-xl">{plan.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-end mb-1">
                    <span className="text-lg font-medium text-gray-500 line-through mr-2">
                      {plan.id === "starter"
                        ? "₹599"
                        : plan.id === "professional"
                        ? "₹1,299"
                        : "₹2,499"}
                    </span>
                    <span className="text-4xl font-bold text-primary">
                      ₹{pricingData.price}
                    </span>
                    <span className="text-gray-500 ml-1 mb-1">
                      {pricingData.suffix}
                    </span>
                  </div>

                  {pricingData.savings && (
                    <div className="mb-4">
                      <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        {pricingData.savings}
                      </span>
                    </div>
                  )}

                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-primary mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 pb-8">
                  <button
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`w-full py-3 font-medium rounded-xl transition-colors ${
                      plan.buttonVariant === "primary"
                        ? "bg-primary hover:bg-primary/90 text-white shadow-md"
                        : plan.buttonVariant === "dark"
                        ? "bg-gray-800 hover:bg-gray-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-primary"
                    } ${isActive ? "ring-2 ring-offset-2 ring-primary" : ""}`}
                  >
                    {isActive ? "Selected" : plan.buttonText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Plan Summary */}
        {selectedPlan && (
          <motion.div
            // initial={{ opacity: 0, height: 0 }}
            // animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-12 bg-white rounded-2xl shadow-md p-6 border border-primary"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Your Selected Plan:{" "}
                {pricingPlans.find((p) => p.id === selectedPlan)?.name}
              </h3>
              <button
                onClick={() => setSelectedPlan(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col md:flex-row md:items-center">
              <div className="bg-primary/10 p-4 rounded-xl mr-6 mb-4 md:mb-0">
                <span className="text-primary text-2xl">
                  {pricingPlans.find((p) => p.id === selectedPlan)?.icon}
                </span>
              </div>

              <div className="mb-4 md:mb-0">
                <p className="text-gray-600 mb-2">
                  You've selected the{" "}
                  {pricingPlans.find((p) => p.id === selectedPlan)?.name} plan
                  with {billingCycle} billing.
                </p>
                <div className="flex items-center">
                  <span className="font-bold text-primary text-xl mr-2">
                    ₹
                    {
                      pricingPlans.find((p) => p.id === selectedPlan)?.[
                        billingCycle
                      ].price
                    }
                  </span>
                  <span className="text-gray-500">
                    {
                      pricingPlans.find((p) => p.id === selectedPlan)?.[
                        billingCycle
                      ].suffix
                    }
                  </span>

                  {billingCycle === "annual" &&
                    pricingPlans.find((p) => p.id === selectedPlan)?.annual
                      .savings && (
                      <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        {
                          pricingPlans.find((p) => p.id === selectedPlan)
                            ?.annual.savings
                        }
                      </span>
                    )}
                </div>
              </div>

              <div className="ml-auto">
                <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-colors shadow-md">
                  Proceed to Payment
                </button>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-50 rounded-lg text-green-800 text-sm flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm11 14a1 1 0 001-1v-6h-14v6a1 1 0 001 1h12z"
                  clipRule="evenodd"
                />
              </svg>
              Apply coupon code <strong className="mx-1">NEWUSER30</strong> at
              checkout for 30% off your first 3 months
            </div>
          </motion.div>
        )}

        <motion.div
          //   initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="bg-white rounded-2xl  p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Flexible Payment Options
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <img src={paytm.src} alt="Paytm" className="h-8 object-contain" />
              <img
                src={googlepay.src}
                alt="Google Pay"
                className="h-8 object-contain"
              />
              <img
                src={phonepe.src}
                alt="PhonePe"
                className="h-8 object-contain"
              />
              <img
                src={creditcard.src}
                alt="Visa"
                className="h-6 object-contain"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-gray-600">50,000+ Engineers</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 116 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">Secure Payment Gateways</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">WhatsApp Support</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Information */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>
            All prices are inclusive of 18% GST. EMI options available on
            purchases above ₹3,000.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
