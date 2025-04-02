import AnimatedTransition from "@/components/AnimatedTransition";
import TechCard from "@/components/TechCard";
import React, { useEffect } from "react";
import { technologies } from "../../../data/mockdata";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/Store/Reducers/QuestionSlice";

const Front = () => {
  const dispatch = useDispatch();
  const { allCategories } = useSelector(({ QuestionSlice }) => QuestionSlice);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <AnimatedTransition>
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Master Your Tech Interview Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Practice the most frequently asked interview questions organized by
            technology, curated by experts.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl text-black font-medium mb-8 border-b pb-4">
            Popular Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCategories.map((technology, index) => (
              <TechCard
                key={technology._id}
                technology={technology}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-24 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium text-black mb-6">
            Why Practice with Dlabss?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our platform focuses on the questions that actually matter - curated
            based on their frequency in real interviews.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border shadow-sm flex flex-col items-center bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2 text-black">
                Curated Questions
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Focus on what matters with carefully selected questions from
                real interviews.
              </p>
            </div>

            <div className="p-6 rounded-xl border shadow-sm flex flex-col items-center bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2 text-black">
                Frequency Insights
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Know which questions are asked most often to prioritize your
                preparation.
              </p>
            </div>

            <div className="p-6 rounded-xl border shadow-sm flex flex-col items-center bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2 text-black">
                Expert Answers
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Clear, concise explanations that help you truly understand the
                concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Front;
