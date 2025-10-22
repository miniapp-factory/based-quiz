"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (question: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const score = Object.values(answers).filter((v) => v === "yes").length;
    let verdict = "";
    if (score <= 1) {
      verdict = "Not based";
    } else if (score <= 3) {
      verdict = "Somewhat based";
    } else {
      verdict = "Fully based";
    }
    setResult(`You scored ${score}/5. Verdict: ${verdict}`);
  };

  const handleRetake = () => {
    setAnswers({
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
    });
    setResult(null);
  };

  return (
    <Card className="max-w-2xl mx-auto mt-8 p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Base Quiz</CardTitle>
        <CardDescription>
          Answer the following questions to see how based you are on Base.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-2">
              1️⃣ Do you trade on Base?
            </label>
            <RadioGroup
              value={answers.q1}
              onValueChange={(v) => handleChange("q1", v)}
              className="flex space-x-4"
            >
              <RadioGroupItem value="yes" id="q1-yes" />
              <label htmlFor="q1-yes" className="cursor-pointer">
                Yes
              </label>
              <RadioGroupItem value="no" id="q1-no" />
              <label htmlFor="q1-no" className="cursor-pointer">
                No
              </label>
            </RadioGroup>
          </div>
          <div>
            <label className="block font-medium mb-2">
              2️⃣ Do you create content on Base?
            </label>
            <RadioGroup
              value={answers.q2}
              onValueChange={(v) => handleChange("q2", v)}
              className="flex space-x-4"
            >
              <RadioGroupItem value="yes" id="q2-yes" />
              <label htmlFor="q2-yes" className="cursor-pointer">
                Yes
              </label>
              <RadioGroupItem value="no" id="q2-no" />
              <label htmlFor="q2-no" className="cursor-pointer">
                No
              </label>
            </RadioGroup>
          </div>
          <div>
            <label className="block font-medium mb-2">
              3️⃣ Are you building on Base?
            </label>
            <RadioGroup
              value={answers.q3}
              onValueChange={(v) => handleChange("q3", v)}
              className="flex space-x-4"
            >
              <RadioGroupItem value="yes" id="q3-yes" />
              <label htmlFor="q3-yes" className="cursor-pointer">
                Yes
              </label>
              <RadioGroupItem value="no" id="q3-no" />
              <label htmlFor="q3-no" className="cursor-pointer">
                No
              </label>
            </RadioGroup>
          </div>
          <div>
            <label className="block font-medium mb-2">
              4️⃣ Do you combine trading, content, and building on Base?
            </label>
            <RadioGroup
              value={answers.q4}
              onValueChange={(v) => handleChange("q4", v)}
              className="flex space-x-4"
            >
              <RadioGroupItem value="yes" id="q4-yes" />
              <label htmlFor="q4-yes" className="cursor-pointer">
                Yes
              </label>
              <RadioGroupItem value="no" id="q4-no" />
              <label htmlFor="q4-no" className="cursor-pointer">
                No
              </label>
            </RadioGroup>
          </div>
          <div>
            <label className="block font-medium mb-2">
              5️⃣ How often do you engage with Base?
            </label>
            <RadioGroup
              value={answers.q5}
              onValueChange={(v) => handleChange("q5", v)}
              className="flex space-x-4"
            >
              <RadioGroupItem value="yes" id="q5-yes" />
              <label htmlFor="q5-yes" className="cursor-pointer">
                Frequently
              </label>
              <RadioGroupItem value="no" id="q5-no" />
              <label htmlFor="q5-no" className="cursor-pointer">
                Rarely
              </label>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-accent rounded-md">
            <p className="font-medium">{result}</p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={handleRetake}
            >
              Retake Quiz
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
