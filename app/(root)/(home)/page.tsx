import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "q67890",
    title: "Bagaimana cara menggunakan TypeScript di Node.js?",
    tags: [
      { _id: "t1", name: "TypeScript" },
      { _id: "t2", name: "Node.js" },
    ],
    author: {
      _id: "a001",
      name: "Budi Santoso",
      picture: "https://example.com/budi.jpg",
    },
    upvotes: 35,
    views: 800,
    answers: [
      {
        _id: "ans1",
        text: "Mulailah dengan menginstal TypeScript dan buat file tsconfig.json untuk mengonfigurasi proyek...",
        author: {
          _id: "a002",
          name: "Siti Aminah",
          picture: "https://example.com/siti.jpg",
        },
        upvotes: 25,
        createdAt: new Date("2024-08-10T08:00:00Z"),
      },
    ],
    createdAt: new Date("2024-08-09T14:00:00Z"),
  },
  {
    _id: "q67891",
    title: "Apa perbedaan antara React dan Angular?",
    tags: [
      { _id: "t3", name: "React" },
      { _id: "t4", name: "Angular" },
    ],
    author: {
      _id: "a003",
      name: "Ahmad Wijaya",
      picture: "https://example.com/ahmad.jpg",
    },
    upvotes: 50,
    views: 2350000,
    answers: [
      {
        _id: "ans2",
        text: "React lebih fokus pada UI, sedangkan Angular adalah framework yang lebih lengkap...",
        author: {
          _id: "a004",
          name: "Dewi Lestari",
          picture: "https://example.com/dewi.jpg",
        },
        upvotes: 40,
        createdAt: new Date("2024-08-11T10:30:00Z"),
      },
    ],
    createdAt: new Date("2024-08-10T09:00:00Z"),
  },
  {
    _id: "q67892",
    title: "Bagaimana cara membuat aplikasi mobile dengan React Native?",
    tags: [
      { _id: "t5", name: "React Native" },
      { _id: "t6", name: "Mobile Development" },
    ],
    author: {
      _id: "a005",
      name: "Rini Handayani",
      picture: "https://example.com/rini.jpg",
    },
    upvotes: 60,
    views: 2000,
    answers: [
      {
        _id: "ans3",
        text: "React Native memungkinkan kita untuk membangun aplikasi mobile dengan JavaScript...",
        author: {
          _id: "a006",
          name: "Joko Prasetyo",
          picture: "https://example.com/joko.jpg",
        },
        upvotes: 55,
        createdAt: new Date("2024-08-12T08:00:00Z"),
      },
    ],
    createdAt: new Date("2024-08-11T12:00:00Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeHolder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
