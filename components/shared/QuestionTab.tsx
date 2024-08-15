import { getUserQuestions } from "@/lib/actions/user.action";
import React from "react";
import QuestionCard from "../cards/QuestionCard";

interface Props {
  searchParams: string;
  userId: string;
  clerkId?: string | null;
}

const QuestionTab = async ({ searchParams, userId, clerkId }: Props) => {
  const result = await getUserQuestions({
    userId,
  });
  return (
    <div className="flex w-full flex-col gap-6">
      {result.questions.map((question) => (
        <QuestionCard
          key={question._id}
          _id={question._id}
          clerkId={clerkId}
          title={question.title}
          tags={question.tags}
          author={question.author}
          upvotes={question.upvotes}
          views={question.views}
          answers={question.answers}
          createdAt={question.createdAt}
        />
      ))}
    </div>
  );
};

export default QuestionTab;
