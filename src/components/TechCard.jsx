import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/router";

const TechCard = ({ technology, index }) => {
  const router = useRouter();

  const handleTechClick = () => {
    router.push({
      pathname: "/qna/technology",
      query: { techId: technology?._id },
    });
  };
  return (
    <div
      onClick={() => handleTechClick()}
      className="border p-4 rounded-xl  shadow-sm hover:cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 flex items-center text-black justify-center rounded-xl mb-2 text-2xl flex-shrink-0"
          style={{ backgroundColor: `#3776AB20` }}
        >
          {technology.name[0]}
        </div>

        <div className="flex-1">
          <h3 className="text-xl text-black font-medium mb-1">
            {technology.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {technology.questionCount} interview questions
          </p>
        </div>
      </div>

      <div className="mt-auto pt-4 flex justify-between items-center">
        <span
          className="text-xs text-black font-medium px-3 py-1.5 rounded-full inline-block"
          style={{
            backgroundColor: `${technology.color}20`,
            color: `${technology.color}`,
          }}
        >
          Explore questions
        </span>

        <div className="p-1.5 rounded-full bg-secondary">
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default TechCard;
