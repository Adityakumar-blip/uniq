import { useState } from "react";
import { ChevronRight, BarChart, BookOpen, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

const QuestionItem = ({ question, index }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

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

  const getQuestionTypeIcon = (type) => {
    switch (type) {
      case "theoretical":
        return <BookOpen className="h-4 w-4 mr-1.5" />;
      case "practical":
        return <Wrench className="h-4 w-4 mr-1.5" />;
      default:
        return null;
    }
  };

  //   to={`/question/${question.id}`}

  const handleQuestionClick = () => {
    router.push({
      pathname: "/qna/technology/question",
      query: { questionId: question.id },
    });
  };

  return (
    <div
      onClick={() => handleQuestionClick()}
      className={cn(
        "block p-5 rounded-xl transition-all duration-200",
        "bg-card border shadow-sm hover:shadow-md",
        "hover:translate-y-[-2px]",
        "stagger-item",
        `stagger-${(index % 5) + 1}`,
        "hover:cursor-pointer"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <span
              className={cn(
                "flex items-center text-xs px-2.5 py-1 rounded-full font-medium mr-2",
                question.type === "theoretical"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-purple-100 text-purple-700"
              )}
            >
              {getQuestionTypeIcon(question.type)}
              {question.type === "theoretical" ? "Theory" : "Practical"}
            </span>
            <h3 className="font-medium text-black text-lg line-clamp-2">
              {question.title}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {question.description}
          </p>

          <div className="flex flex-wrap gap-2 items-center">
            <span
              className={cn(
                "text-xs px-2.5 py-1 rounded-full font-medium",
                getDifficultyColor(question.difficulty)
              )}
            >
              {question.difficulty}
            </span>

            <div className="flex items-center gap-1.5 bg-secondary/80 px-2.5 py-1 rounded-full">
              <BarChart className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-black">
                Frequency: {question.frequency}/10
              </span>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "p-2 rounded-full bg-secondary/50 self-center transition-all",
            isHovered ? "bg-primary/10" : ""
          )}
        >
          <ChevronRight
            className={cn(
              "h-5 w-5 transition-all duration-300",
              isHovered ? "text-primary" : "text-muted-foreground"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
