import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import clsx from 'clsx';

const questions = [
    {
        id: 'age',
        question: "What is your age range?",
        options: [
            { value: 'under_20', label: "Under 20" },
            { value: '20_30', label: "20 - 30" },
            { value: '30_40', label: "30 - 40" },
            { value: '40_plus', label: "40+" }
        ]
    },
    {
        id: 'familyHistory',
        question: "Do you have a family history of hair loss?",
        options: [
            { value: 'yes', label: "Yes, immediate family" },
            { value: 'some', label: "Yes, extended family" },
            { value: 'no', label: "No / Unsure" }
        ]
    },
    {
        id: 'hairline',
        question: "How would you describe your hairline?",
        options: [
            { value: 'intact', label: "Intact / No Recruitment" },
            { value: 'mild', label: "Mild Recession (M-Shape developing)" },
            { value: 'deep', label: "Deep Recession (Distinct M/U Shape)" }
        ]
    },
    {
        id: 'crown',
        question: "How is the hair density on your crown (top of head)?",
        options: [
            { value: 'intact', label: "Thick / No Scalp Visible" },
            { value: 'thinning', label: "Thinning / Scalp Starting to Show" },
            { value: 'bald', label: "Visible Bald Spot" }
        ]
    },
    {
        id: 'density',
        question: "How would you describe your overall hair density?",
        options: [
            { value: 'thick', label: "Thick" },
            { value: 'thin', label: "Thin / Fine" },
            { value: 'very_thin', label: "Very Thin / Diffuse Thinning" }
        ]
    }
];

const Assessment = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});

    const currentQuestion = questions[step];

    const handleOptionSelect = (value) => {
        const newAnswers = { ...answers, [currentQuestion.id]: value };
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            // Completed
            onComplete(newAnswers);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            <div className="mb-8">
                <div className="h-1 w-full bg-zinc-800 rounded-full">
                    <div
                        className="h-1 bg-blue-600 rounded-full transition-all duration-300"
                        style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                    />
                </div>
                <p className="text-zinc-400 text-sm mt-2">Question {step + 1} of {questions.length}</p>
            </div>

            <h2 className="text-3xl font-bold mb-6">{currentQuestion.question}</h2>

            <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => handleOptionSelect(option.value)}
                        className={clsx(
                            "w-full p-4 text-left rounded-xl border transition-all duration-200 group",
                            "border-zinc-800 hover:border-blue-500 hover:bg-zinc-900",
                            "flex items-center justify-between"
                        )}
                    >
                        <span className="text-lg font-medium text-zinc-200 group-hover:text-white">
                            {option.label}
                        </span>
                        <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-blue-500" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Assessment;
