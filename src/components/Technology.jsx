import { useEffect, useState } from "react";
import QuestionItem from "@/components/QuestionItem";
import { ArrowLeft, BookOpen, Wrench } from "lucide-react";
import AnimatedTransition from "./AnimatedTransition";
import { Tabs, TabsList, TabsTrigger } from "./Design/Tabs";
import { useRouter } from "next/router";
import { questions, technologies } from "../../data/mockdata";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionsByCategory } from "@/Store/Reducers/QuestionSlice";

const Technology = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { techId } = router.query;
  const [activeTab, setActiveTab] = useState("all");

  const { allCategories, allQuestions } = useSelector(
    ({ QuestionSlice }) => QuestionSlice
  );

  // Find the selected technology
  const technology = allCategories.find((tech) => tech._id === techId);

  // Filter questions for this technology
  const techQuestions = questions.filter((q) => q.technologyId === techId);

  // Sort questions by frequency (most frequently asked first)
  const sortedQuestions =
    allQuestions.length > 0 &&
    [...allQuestions].sort((a, b) => b.frequency - a.frequency);

  // Categorize questions by type
  const theoreticalQuestions =
    sortedQuestions.length > 0 &&
    sortedQuestions?.filter((q) => q.type === "Theoretical");
  const practicalQuestions =
    sortedQuestions.length > 0 &&
    sortedQuestions?.filter((q) => q.type === "Practical");

  // Determine which questions to show based on the active tab
  const questionsToShow = () => {
    switch (activeTab) {
      case "Theoretical":
        return theoreticalQuestions;
      case "Practical":
        return practicalQuestions;
      default:
        return sortedQuestions;
    }
  };

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab("all"); // Reset to "all" tab when changing technology
  }, [techId]);

  useEffect(() => {
    dispatch(getQuestionsByCategory(techId));
  }, [techId]);

  if (!technology) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Technology not found</h1>
        </div>
      </div>
    );
  }

  return (
    <AnimatedTransition>
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-16">
        {/* <a
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all technologies
        </a> */}

        <div className="mb-8 bg-card rounded-xl p-6 shadow-sm border">
          <div className="flex text-black items-center gap-4 mb-4">
            <div
              className="w-16 h-16 flex font-semibold items-center justify-center rounded-full text-2xl"
              style={{ backgroundColor: `${technology.color}20` }}
            >
              {technology.name[0]}
            </div>
            <div>
              <h1 className="text-3xl text-black font-medium">
                {technology.name}
              </h1>
              <p className="text-muted-foreground mt-1">
                {sortedQuestions.length} interview questions, sorted by
                frequency
              </p>
            </div>
          </div>

          <div className="mt-4 bg-muted/40 rounded-lg p-4">
            <h2 className="text-sm font-medium text-black mb-2">
              About this collection
            </h2>
            <p className="text-sm text-muted-foreground">
              These {technology.name} interview questions are selected based on
              their frequency in real interviews. Practice these to prepare
              effectively for your next technical interview.
            </p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="all" className="flex items-center gap-2">
              All ({sortedQuestions.length})
            </TabsTrigger>
            <TabsTrigger
              value="theoretical"
              className="flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Theoretical ({theoreticalQuestions.length})
            </TabsTrigger>
            <TabsTrigger value="practical" className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              Practical ({practicalQuestions.length})
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-3">
          {questionsToShow().length > 0 &&
            questionsToShow()?.map((question, index) => (
              <QuestionItem
                key={question._id}
                question={question}
                index={index}
              />
            ))}
        </div>

        {questionsToShow()?.length === 0 && (
          <div className="text-center py-16 bg-muted/30 rounded-xl">
            <p className="text-muted-foreground">
              No questions found for this type.
            </p>
            <button
              onClick={() => setActiveTab("all")}
              className="mt-4 inline-block text-primary hover:underline"
            >
              Show all questions
            </button>
          </div>
        )}
      </div>
    </AnimatedTransition>
  );
};

export default Technology;
