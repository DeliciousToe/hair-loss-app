import React from 'react';
import { Info, AlertTriangle } from 'lucide-react';

const TreatmentCard = ({ title, description, instructions, warnings }) => (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-white max-w-[80%]">{title}</h3>
            <Info className="w-5 h-5 text-zinc-600" />
        </div>
        <p className="text-zinc-400 mb-6 text-sm leading-relaxed">{description}</p>

        <div className="space-y-6">
            <div>
                <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">How to Use</h4>
                <ul className="space-y-2">
                    {instructions.map((inst, i) => (
                        <li key={i} className="text-zinc-300 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-1.5 shrink-0" />
                            <span>{inst}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {warnings && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex gap-3 items-start">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-red-400 text-xs font-medium leading-relaxed">
                        {warnings}
                    </p>
                </div>
            )}
        </div>
    </div>
);

const TreatmentInfo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TreatmentCard
                title="Minoxidil 5%"
                description="A topical vasodilator that revives dormant hair follicles."
                instructions={[
                    "Apply 1ml to dry scalp twice daily (Morning/Night).",
                    "Focus on the crown and receding areas.",
                    "Wash hands immediately after use.",
                    "Wait 4 hours before swimming or washing hair."
                ]}
                warnings="Initial shedding is normal. Toxic to cats/dogs - keep away from pets."
            />
            <TreatmentCard
                title="Dermaroller (0.5mm - 1.5mm)"
                description="Induces collagen and enhances topical absorption via micro-channels."
                instructions={[
                    "Soak roller in 70% Alcohol for 10 mins before use.",
                    "Roll horizontally, vertically, and diagonally (4-5x each).",
                    "Apply moderate pressure - should feel prickly, not painful.",
                    "Clean again after use."
                ]}
                warnings="Wait 24 hours before applying Minoxidil to avoid systemic absorption. Don't press too hard."
            />
            <TreatmentCard
                title="Key Vitamins (Biotin & D)"
                description="Foundation for hair structure and follicle health."
                instructions={[
                    "Take daily with a meal.",
                    "Look for 'Hair, Skin & Nails' formulas.",
                    "Check Vitamin D levels with a doctor if possible."
                ]}
            />
            <TreatmentCard
                title="Finasteride (Medical)"
                description="Prescription DHT blocker. The most effective FDA-approved pill."
                instructions={[
                    "Must consult a doctor.",
                    "Typically 1mg daily.",
                    "Stops hair loss in ~90% of men."
                ]}
                warnings="Discuss side effects with your physician. Women should not handle broken tablets."
            />
        </div>
    );
};

export default TreatmentInfo;
