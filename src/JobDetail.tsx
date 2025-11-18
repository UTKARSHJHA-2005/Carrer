import React from "react";
import {
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Target,
  Users,
  Calendar,
  Building2,
  Share2,
  Sparkles,
  TrendingUp,
  Heart
} from "lucide-react";

export interface JobDetail {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  salary?: string;
  requirements: string[];
  responsibilities: string[];
  niceToHave?: string[];
  benefits: string[];
  aboutRole: string;
}

interface JobDetailPageProps {
  job: JobDetail;
  onBack: () => void;
}

export function JobDetailPage({ job, onBack }: JobDetailPageProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="relative backdrop-blur-xl bg-slate-900/50 border-b border-slate-800/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="group text-slate-400 hover:text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all hover:bg-slate-800/50"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Careers</span>
          </button>
        </div>
      </div>

      {/* Hero Section with Gradient */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-blue-600/20">
              {job.department}
            </span>
            <span className="backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 text-slate-300 px-4 py-1.5 rounded-full text-sm font-medium">
              {job.type}
            </span>
            <span className="ml-auto flex items-center gap-2 text-slate-400 text-sm">
              <Calendar className="w-4 h-4" />
              Posted 2 days ago
            </span>
          </div>

          <h1 className="mb-6 text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-slate-400 mb-10">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                <Building2 className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-slate-300">{job.department}</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                <MapPin className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-slate-300">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                <Briefcase className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-slate-300">{job.type}</span>
            </div>
            {job.salary && (
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-green-600/20 transition-colors">
                  <DollarSign className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-slate-300 font-semibold">{job.salary}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="group relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105">
              <span className="flex items-center gap-2">
                Apply for this Position
                <Sparkles className="w-5 h-5" />
              </span>
            </button>
            <button className="backdrop-blur-sm bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105">
              <span className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Save Job
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="px-6 pb-20 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="group backdrop-blur-sm bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 hover:border-slate-700/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">About the Role</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">{job.aboutRole}</p>
            </div>
            <div className="group backdrop-blur-sm bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 hover:border-slate-700/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-purple-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">What You'll Do</h2>
              </div>
              <div className="space-y-4">
                {job.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-4 group/item">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-slate-300 text-lg leading-relaxed group-hover/item:text-white transition-colors">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="group backdrop-blur-sm bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 hover:border-slate-700/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600/20 to-green-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">What We're Looking For</h2>
              </div>
              <div className="space-y-4">
                {job.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-4 group/item">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-slate-300 text-lg leading-relaxed group-hover/item:text-white transition-colors">{requirement}</span>
                  </div>
                ))}
              </div>
              {job.niceToHave && job.niceToHave.length > 0 && (
                <>
                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                  <h3 className="mb-5 text-xl font-semibold text-slate-300 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    Nice to Have
                  </h3>
                  <div className="space-y-4">
                    {job.niceToHave.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 group/item">
                        <div className="w-6 h-6 rounded-lg bg-slate-800/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                        </div>
                        <span className="text-slate-400 text-lg leading-relaxed group-hover/item:text-slate-300 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-gradient-to-br from-slate-900/80 to-slate-900/50 border border-slate-800/50 rounded-2xl p-6 sticky top-24 shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-600/30">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Ready to Apply?</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Join our team and help us maintain excellence through discipline and innovation.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-3.5 rounded-xl mb-3 transition-all font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105">
                Apply Now
              </button>
              <button className="w-full backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-800 py-3.5 rounded-xl transition-all font-semibold hover:scale-105 flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Share this Job
              </button>
            </div>
            <div className="backdrop-blur-sm bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-slate-700/50 transition-all">
              <h3 className="mb-5 text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                Benefits & Perks
              </h3>
              <div className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group/benefit">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover/benefit:scale-110 transition-transform" />
                    <span className="text-slate-300 leading-relaxed group-hover/benefit:text-white transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
