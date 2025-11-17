import { useEffect } from "react";
import { MapPin, Briefcase, ArrowRight, DollarSign, Clock, Sparkles } from "lucide-react";
import AOS from "aos";
import 'aos/dist/aos.css'

interface JobCardProps {
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    salary?: string;
    onClick: () => void;
}

export function JobCard({
    title,
    department,
    location,
    type,
    description,
    salary,
    onClick,
}: JobCardProps) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div data-aos="flip-left" className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/20 cursor-pointer overflow-hidden hover:scale-[1.02]"
            onClick={onClick}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30">
                        {department}
                    </span>
                    <span className="px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 text-slate-300">
                        {type}
                    </span>
                    <div className="ml-auto flex items-center gap-1.5 text-slate-500 text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>2d ago</span>
                    </div>
                </div>
                <h3 className="text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 text-xl font-bold leading-tight">
                    {title}
                </h3>
                <p className="text-slate-400 mb-5 line-clamp-2 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 group/meta">
                        <div className="w-7 h-7 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover/meta:bg-blue-600/20 transition-colors">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover/meta:text-blue-400 transition-colors" />
                        </div>
                        <span className="text-sm text-slate-300">{location}</span>
                    </div>
                    <div className="flex items-center gap-2 group/meta">
                        <div className="w-7 h-7 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover/meta:bg-blue-600/20 transition-colors">
                            <Briefcase className="w-3.5 h-3.5 text-slate-400 group-hover/meta:text-blue-400 transition-colors" />
                        </div>
                        <span className="text-sm text-slate-300">{type}</span>
                    </div>
                    {salary && (
                        <div className="flex items-center gap-2 group/meta">
                            <div className="w-7 h-7 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover/meta:bg-green-600/20 transition-colors">
                                <DollarSign className="w-3.5 h-3.5 text-slate-400 group-hover/meta:text-green-400 transition-colors" />
                            </div>
                            <span className="text-sm text-slate-300 font-semibold">{salary}</span>
                        </div>
                    )}
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-4 group-hover:via-blue-500/30 transition-colors"></div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                        <span className="text-sm">View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
}