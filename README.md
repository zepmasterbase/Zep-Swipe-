import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock quiz questions
const quizData = [
  {
    id: 1,
    question: "What is Zep Swipe?",
    options: [
      "A streaming platform",
      "A student & vendor wallet ecosystem",
      "A mobile game",
      "A crypto exchange",
    ],
    answer: 2,
  },
  {
    id: 2,
    question: "Which tokens can be used for payments in Zep Swipe?",
    options: ["BTC", "ETH", "BNB and $ZAC", "DOGE"],
    answer: 4,
  },
  {
    id: 3,
    question: "Who can sell digital products on Zep Swipe?",
    options: ["Vendors", "Only students", "Banks", "MTN staff"],
    answer: 2,
  },
  {
    id: 4,
    question: "What is Zep Shop used for?",
    options: [
      "Buying groceries",
      "Listing digital products and student deals",
      "Streaming music",
      "Sending emails",
    ],
    answer: 1,
  },
  {
    id: 5,
    question: "Zep Swipe is powered by which core feature?",
    options: [
      "Blockchain and mobile money",
      "VPN and cloud storage",
      "SMS integration",
      "Social media",
    ],
    answer: 1,
  },
];

const Gamify = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (index) => {
    const question = quizData[current];
    if (index === question.answer) {
      setScore(score + 10); // +10 $ZAC reward per correct answer
    }

    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-300 p-4">
      <Card className="max-w-md w-full rounded-2xl shadow-xl p-6 bg-white">
        <CardContent>
          {!completed ? (
            <>
              <h2 className="text-xl font-bold mb-4 text-indigo-700">
                Learn & Earn 💰
              </h2>
              <p className="text-gray-800 font-semibold mb-2">
                {quizData[current].question}
              </p>
              <div className="space-y-3">
                {quizData[current].options.map((opt, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="w-full"
                    onClick={() => handleAnswer(i)}
                  >
                    {opt}
                  </Button>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Question {current + 1} of {quizData.length}
              </p>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                🎉 Completed!
              </h2>
              <p className="text-gray-700 mb-4">
                You earned <span className="font-semibold">{score} $ZAC</span>
              </p>
              <Button
                onClick={() => {
                  setCurrent(0);
                  setScore(0);
                  setCompleted(false);
                }}
              >
                Retry Quiz
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Gamify;