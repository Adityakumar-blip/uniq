import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, Copy, Check, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedTransition from "@/components/AnimatedTransition";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { questions, technologies } from "../../data/mockdata";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionById } from "@/Store/Reducers/QuestionSlice";
import LoginModal from "./LoginModal";
import { setLogin } from "@/Store/Reducers/CommonSlice";

const Question = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { questionId } = router.query;
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { token, user } = useSelector(({ CommonSlice }) => CommonSlice);

  const { question, allCategories } = useSelector(
    ({ QuestionSlice }) => QuestionSlice
  );
  // Find the selected question
  // const question = questions.find((q) => q.id === questionId);

  // Find the related technology
  const technology = question
    ? allCategories.find((tech) => tech._id === question?.category?._id)
    : null;

  // Related questions (same technology, excluding current)
  const relatedQuestions = question
    ? questions
        .filter(
          (q) => q.technologyId === question.technologyId && q.id !== questionId
        )
        .sort((a, b) => b.frequency - a.frequency)
        .slice(0, 3)
    : [];

  const handleRevealAnswer = () => {
    if (token) {
      setShowAnswer(true);
    } else {
      dispatch(setLogin(true));
    }
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    setShowAnswer(true);
  };

  // Copy answer to clipboard
  const copyToClipboard = () => {
    if (question && question.answers && question.answers.length > 0) {
      const answer = question.answers[0];
      let textToCopy = answer.text || "";

      if (answer.codeSnippet) {
        textToCopy += "\n\nCode Example:\n" + answer.codeSnippet;
      }

      if (answer.references && answer.references.length > 0) {
        textToCopy +=
          "\n\nReferences:\n" +
          answer.references.map((ref) => ref.source).join("\n");
      }

      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowAnswer(false);
  }, [questionId]);

  useEffect(() => {
    dispatch(getQuestionById(questionId));
  }, [questionId]);

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4 text-black">
            Question not found
          </h1>
          <a
            href="/"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  // Calculate frequency display
  const frequencyBars = [];
  for (let i = 0; i < 10; i++) {
    frequencyBars.push(
      <div
        key={i}
        className={cn(
          "h-3 w-1.5 rounded-sm transition-all duration-300",
          i < question.frequency ? "bg-primary" : "bg-gray-200"
        )}
      ></div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <>
      <AnimatedTransition>
        <div className="max-w-3xl mx-auto px-4 pt-8 pb-16">
          <div className="mb-8">
            <p
              onClick={() => router.back()}
              className="inline-flex hover:cursor-pointer items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {technology?.name} questions
            </p>

            <div className="flex flex-wrap gap-3 items-center mb-6">
              <a
                href={`/technology/${technology?.id}`}
                className="text-sm px-3 py-1 rounded-full transition-colors hover:opacity-80"
                style={{
                  backgroundColor: `${technology?.color}20`,
                  color: `${technology?.color}`,
                }}
              >
                {technology?.name}
              </a>

              <span
                className={cn(
                  "text-sm px-3 py-1 rounded-full",
                  getDifficultyColor(question.difficulty)
                )}
              >
                {question.difficulty}
              </span>

              <div className="flex items-center gap-2 bg-secondary/80 px-3 py-1 rounded-full">
                <BarChart className="h-4 w-4 text-primary" />
                <div className="flex space-x-0.5 items-center">
                  {frequencyBars}
                </div>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl text-black font-medium mb-4">
              {question.question}
            </h1>

            <p className="text-muted-foreground">{question.description}</p>
          </div>

          <div className="mt-10">
            {showAnswer ? (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Answer</h3>
                  <button
                    onClick={copyToClipboard}
                    className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-secondary/50 p-4 md:p-6 rounded-lg text-foreground/90 leading-relaxed">
                  {/* Main answer text */}
                  {question.answers && question.answers.length > 0 && (
                    <div className="space-y-6">
                      <p>{question.answers[0].text}</p>

                      {/* Code snippet section */}
                      {question.answers[0].codeSnippet && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2">
                            Code Example:
                          </h4>
                          <pre className="bg-gray-800 text-gray-100 p-3 rounded-md overflow-x-auto">
                            <code>{question.answers[0].codeSnippet}</code>
                          </pre>
                        </div>
                      )}

                      {/* References section */}
                      {question.answers[0].references &&
                        question.answers[0].references.length > 0 && (
                          <div className="mt-4 border-t border-gray-200 pt-4">
                            <h4 className="text-sm font-medium mb-2">
                              References:
                            </h4>
                            <ul className="space-y-1">
                              {question.answers[0].references.map(
                                (ref, index) => (
                                  <li
                                    key={ref._id}
                                    className="flex items-center gap-1.5"
                                  >
                                    <ExternalLink className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                                    <a
                                      href={ref.source}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-primary hover:underline truncate"
                                    >
                                      {ref.source}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <button
                onClick={() => handleRevealAnswer()}
                className="w-full py-4 border-2 border-dashed border-primary/30 rounded-lg text-primary hover:bg-primary/5 transition-colors"
              >
                Reveal Answer
              </button>
            )}
          </div>

          {relatedQuestions.length > 0 && (
            <div className="mt-12 text-black">
              <h3 className="font-medium mb-4">Related Questions</h3>
              <div className="space-y-2">
                {relatedQuestions.map((relatedQuestion) => (
                  <div
                    key={relatedQuestion.id}
                    className="p-3 border border-border/60 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                    onClick={() => navigate(`/question/${relatedQuestion.id}`)}
                  >
                    <div className="flex items-start justify-between">
                      <p className="font-medium pr-6">
                        {relatedQuestion.title}
                      </p>
                      <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </AnimatedTransition>
    </>
  );
};

// Helper component for ChevronRight
const ChevronRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default Question;
