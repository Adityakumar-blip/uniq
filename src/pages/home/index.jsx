import Flow from "@/components/Design/Flow";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { Safari } from "@/components/magicui/safari";
import { WarpBackground } from "@/components/magicui/warp-background";
import { cn } from "@/lib/utils";

import { useRouter } from "next/router";
import React from "react";
import {
  FiArrowRight,
  FiCheck,
  FiUsers,
  FiBook,
  FiTrendingUp,
  FiHeart,
} from "react-icons/fi";
import qna from "@/assets/qna.png";
import FeatureComponent from "@/components/Design/Features";
import Testimonial from "@/components/Design/Testimonial";
import MetricsBentoGrid from "@/components/Design/Metrics";
import PricingSection from "@/components/Design/Pricing";
import FAQSection from "@/components/Design/FAQSection";
import Footer from "@/components/Design/Footer";
import CTA from "@/components/Design/CTA";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className=" mt-8 ">
        <div className="relative  px-4 sm:px-6 lg:px-8 flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  bg-background p-20">
          <AnimatedGridPattern
            numSquares={100}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Fresh Ideas, Seasoned Expertise, One Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with others where new ideas meet expert knowledge. Work on
              projects together, learn from experienced professionals, and grow
              on a platform that brings everyone together.
            </p>
            <div className="flex items-center justify-center  sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => router.push("/projects")}
                className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-8 py-3 rounded-md shadow-lg flex items-center justify-center transform hover:scale-105 "
              >
                See Projects <FiArrowRight className="ml-2" />
              </button>
              <button
                onClick={() => router.push("/developers")}
                className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50  px-8 py-3 rounded-md shadow-lg transform hover:scale-105 transition"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
        <div className="relative mt-10  px-4 sm:px-6 lg:px-8">
          <Safari url="dlabss.com" className="size-full" imageSrc={qna.src} />
        </div>

        <div className=" px-4 sm:px-6 lg:px-8">
          <FeatureComponent />
        </div>

        <div className=" px-4 sm:px-6 lg:px-8">
          <Testimonial />
        </div>

        <div className=" px-4 sm:px-6 lg:px-8">
          <MetricsBentoGrid />
        </div>

        <div>
          <PricingSection />
        </div>

        <div>
          <FAQSection />
        </div>

        <CTA />

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
