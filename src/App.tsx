import { useState, ReactNode, useEffect } from "react";
import { JobCard } from "./JobCard";
import { JobDetailPage } from "./JobDetail";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Search, Shield, TrendingUp, Clock, Globe } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    className={`px-4 py-2 rounded-md font-medium transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

interface TabsProps {
  value: string;
  onValueChange: (val: string) => void;
  children: (onChange: (val: string) => void, activeValue: string) => ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ value, onValueChange, children }) =>
  <>{children(onValueChange, value)}</>;

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export const TabsList: React.FC<TabsListProps> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

interface TabsTriggerProps {
  value: string;
  activeValue: string;
  onChange: (val: string) => void;
  children: ReactNode;
  className?: string;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  activeValue,
  onChange,
  children,
  className = "",
}) => {
  const active = value === activeValue;

  return (
    <button
      onClick={() => onChange(value)}
      className={`${className} px-4 py-2.5 rounded-xl transition-all font-medium ${active
        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30 scale-105"
        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
        }`}
    >
      {children}
    </button>
  );
};
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

const jobsData: JobDetail[] = [
  {
    id: "1",
    title: "Senior Compliance Officer",
    department: "Compliance",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90K - $120K",
    description:
      "Lead compliance initiatives and ensure adherence to regulatory standards across all organizational operations.",
    aboutRole:
      "As a Senior Compliance Officer, you'll be at the forefront of maintaining our organization's integrity and regulatory adherence. You'll work closely with leadership to develop comprehensive compliance programs and ensure our operations meet all regulatory requirements.",
    requirements: [
      "5+ years of experience in compliance, risk management, or regulatory affairs",
      "Strong knowledge of federal and state regulations",
      "Excellent analytical and problem-solving skills",
      "Experience with compliance management systems",
      "Strong communication and training abilities",
      "Bachelor's degree in Law, Business, or related field"
    ],
    responsibilities: [
      "Develop and implement comprehensive compliance programs",
      "Conduct regular compliance audits and risk assessments",
      "Monitor regulatory changes and update policies accordingly",
      "Provide compliance training to staff at all levels",
      "Investigate potential compliance violations and recommend corrective actions",
      "Maintain relationships with regulatory bodies and external auditors",
      "Prepare compliance reports for executive leadership"
    ],
    niceToHave: ["Professional certification (CCEP, CRCM)", "Healthcare compliance experience"],
    benefits: ["Health insurance", "401(k) match", "4 weeks PTO", "Performance bonuses"]
  },
  {
    id: "2",
    title: "Workplace Safety Specialist",
    department: "Safety & Security",
    location: "Remote",
    type: "Full-time",
    salary: "$70K - $95K",
    description:
      "Develop and implement safety protocols to maintain a secure and disciplined work environment.",
    aboutRole:
      "Join our team as a Workplace Safety Specialist where you'll play a crucial role in creating and maintaining a safe work environment for all employees. You'll develop safety programs and conduct training sessions.",
    requirements: ["OSHA certification", "3+ years of OHS experience", "Strong training skills"],
    responsibilities: ["Conduct safety audits", "Develop safety programs", "Train employees on safety protocols"],
    niceToHave: ["CSP/ASP certification"],
    benefits: ["Remote work", "Health programs", "Certification support", "Flexible schedule"]
  },
  {
    id: "3",
    title: "Senior Product Designer",
    department: "Operations",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $160K",
    description:
      "Lead design initiatives and create exceptional user experiences that solve real problems.",
    aboutRole:
      "We're looking for a Senior Product Designer to join our growing team. You'll work closely with product managers and engineers to create exceptional user experiences.",
    requirements: ["5+ years in product design", "Strong portfolio", "Figma expertise"],
    responsibilities: ["Lead design projects", "Create wireframes and prototypes", "Mentor junior designers"],
    niceToHave: ["Motion design experience", "Accessibility knowledge"],
    benefits: ["Competitive salary", "Health insurance", "Unlimited PTO", "Home office stipend"]
  },
  {
    id: "4",
    title: "Quality Assurance Manager",
    department: "Quality",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$85K - $115K",
    description:
      "Oversee quality assurance processes and ensure excellence in all deliverables.",
    aboutRole:
      "As a QA Manager, you'll lead our quality assurance team and develop testing strategies that ensure our products meet the highest standards.",
    requirements: ["7+ years in QA", "Leadership experience", "Test automation expertise"],
    responsibilities: ["Develop QA strategies", "Lead testing teams", "Implement quality metrics"],
    niceToHave: ["Agile certification", "DevOps experience"],
    benefits: ["Health benefits", "Professional development", "Stock options", "Relocation assistance"]
  },
];

const departments = [
  "all",
  "Compliance",
  "Safety & Security",
  "Human Resources",
  "Operations",
  "Learning & Development",
  "Quality"
];
export default function App() {
  const [selectedJob, setSelectedJob] = useState<JobDetail | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const filteredJobs =
    selectedDepartment === "all"
      ? jobsData
      : jobsData.filter((job) => job.department === selectedDepartment);

  if (selectedJob) {
    return <JobDetailPage job={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  return (
    <div className="min-h-screen bg-black">
      <section data-aos="fade-up" className="relative min-h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight">
            Join Our Team
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
            A place where <span className="text-blue-400 font-semibold">discipline</span>, <span className="text-purple-400 font-semibold">excellence</span>, and <span className="text-indigo-400 font-semibold">innovation</span> come together.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-22 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all hover:scale-105"
              onClick={() =>
                document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" })
              }>
              View Open Positions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us</h2>
            <p className="text-slate-400 text-lg mb-10">
              We offer comprehensive experience and a supportive environment where you
              can grow your career while maintaining work-life balance.
            </p>
            <div className="space-y-6">
              <div data-aos="fade-down" className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/60 flex items-center justify-center">
                  <Shield className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Comprehensive Experience</h4>
                  <p className="text-slate-400">
                    Work with diverse and professional minds
                  </p>
                </div>
              </div>
              <div data-aos="fade-down" className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/60 flex items-center justify-center">
                  <Clock className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Flexible Schedule</h4>
                  <p className="text-slate-400">
                    Work-life balance with flexible hours and remote options
                  </p>
                </div>
              </div>
              <div data-aos="fade-down" className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/60 flex items-center justify-center">
                  <TrendingUp className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Professional Development</h4>
                  <p className="text-slate-400">
                    Continuous learning opportunities and career advancement
                  </p>
                </div>
              </div>
              <div data-aos="fade-down" className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/60 flex items-center justify-center">
                  <Globe className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Fresher Opportunities</h4>
                  <p className="text-slate-400">
                    Best Place to start the career journey
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="flip-right">
            <img src="https://images.unsplash.com/photo-1590650046871-92c887180603" alt="Working" className="rounded-3xl w-full object-cover" />
          </div>
        </div>
      </section>
      <section id="open-positions" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div data-aos="flip-left" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Open Positions
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Find your perfect role and join a team that values your growth and contribution
          </p>
        </div>
        <Tabs value={selectedDepartment} onValueChange={setSelectedDepartment}>
          {(onChange, activeValue) => (
            <TabsList className="flex flex-wrap justify-center gap-2 backdrop-blur-sm bg-slate-900/50 border border-slate-800/50 p-2 rounded-2xl mb-12">
              {departments.map((d) => (
                <TabsTrigger
                  key={d}
                  value={d}
                  activeValue={activeValue}
                  onChange={onChange}
                >
                  {d === "all" ? "All Jobs" : d}
                </TabsTrigger>
              ))}
            </TabsList>
          )}
        </Tabs>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} {...job} onClick={() => setSelectedJob(job)} />
          ))}
        </div>
        {filteredJobs.length === 0 && (
          <div data-aos="flip-right" className="text-center py-20">
            <div className="w-20 h-20 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No positions found</h3>
            <p className="text-slate-400 text-lg mb-6">Check back soon for new opportunities</p>
            <button
              onClick={() => setSelectedDepartment("all")}
              className="text-blue-400 hover:text-blue-300 font-medium">
              View all positions
            </button>
          </div>
        )}
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div data-aos="flip-down" className="relative overflow-hidden bg-blue-600 text-center rounded-3xl p-16">
          <div className="absolute inset-0 bg-blue-700/40 backdrop-blur-sm"></div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Don’t See the Right Role?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              We're always looking for talented individuals. Send us your resume and we'll
              keep you in mind for future opportunities.
            </p>
            <button data-aos="fade-up" className="bg-white hover:scale-110 text-blue-700 font-medium px-8 py-3 rounded-xl shadow-md hover:bg-slate-100 transition">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}