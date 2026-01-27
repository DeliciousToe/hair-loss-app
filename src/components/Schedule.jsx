import React from 'react';
import { Calendar, Clock, AlertCircle, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';

const ScheduleItem = ({ task, type, frequency }) => {
    const isMorning = task.toLowerCase().includes('morning');
    const isEvening = task.toLowerCase().includes('evening');

    return (
        <div className="flex items-start gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
            <div className={clsx(
                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border",
                (isMorning || (!isMorning && !isEvening)) && type === 'topical' && "bg-blue-500/10 border-blue-500/20 text-blue-500",
                isEvening && "bg-indigo-500/10 border-indigo-500/20 text-indigo-500",
                type === 'supplement' && "bg-green-500/10 border-green-500/20 text-green-500",
                type === 'device' && "bg-purple-500/10 border-purple-500/20 text-purple-500",
                type === 'wash' && "bg-cyan-500/10 border-cyan-500/20 text-cyan-500",
                type === 'medical' && "bg-red-500/10 border-red-500/20 text-red-500"
            )}>
                {isMorning ? <Sun className="w-5 h-5" /> : isEvening ? <Moon className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
            </div>
            <div>
                <h4 className="text-zinc-200 font-medium leading-tight">{task}</h4>
                {frequency && <p className="text-zinc-500 text-xs mt-1.5 font-medium bg-zinc-950 inline-block px-2 py-1 rounded">{frequency}</p>}
            </div>
        </div>
    );
};

const Schedule = ({ protocol }) => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-10 text-center shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 p-24 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

                <div className="relative z-10">
                    <h2 className="text-xs font-bold text-blue-200 uppercase tracking-[0.2em] mb-3">Your Personalized Plan</h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{protocol.title}</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">{protocol.description}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 pl-1">
                        <span className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                            <Sun className="w-4 h-4 text-amber-400" />
                        </span>
                        Daily Routine
                    </h3>
                    <div className="space-y-3">
                        {protocol.schedule.daily.map((item, idx) => (
                            <ScheduleItem key={idx} {...item} />
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 pl-1">
                        <span className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-purple-400" />
                        </span>
                        Weekly Tasks
                    </h3>
                    <div className="space-y-3">
                        {protocol.schedule.weekly.map((item, idx) => (
                            <ScheduleItem key={idx} {...item} />
                        ))}
                    </div>
                </div>
            </div>

            {protocol.schedule.note && (
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5 flex gap-4 items-start">
                    <div className="bg-orange-500/20 p-2 rounded-full shrink-0">
                        <AlertCircle className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                        <h4 className="text-orange-400 font-bold text-sm uppercase tracking-wide mb-1">Important Note</h4>
                        <p className="text-orange-200 text-sm leading-relaxed">{protocol.schedule.note}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Schedule;
