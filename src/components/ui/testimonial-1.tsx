"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

export default function Testimonial1() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  interface StatItem {
    percentage: string;
    logo: string;
    label: string;
    isIncrease: boolean;
  }

  const stats: StatItem[] = [
    {
      percentage: "2021",
      label: "AI Intern",
      isIncrease: true,
      logo: "/customer/netflix.png",
    },
    {
      percentage: "2022",
      label: "ML Engineer",
      isIncrease: true,
      logo: "/customer/vercel.png",
    },
    {
      percentage: "2023",
      label: "Senior AI Engineer",
      isIncrease: true,
      logo: "/customer/amazon.png",
    },
    {
      percentage: "2024",
      label: "AI Architect",
      isIncrease: true,
      logo: "/customer/alibaba.png",
    },
  ];
  return (
    <div className="bg-transparent min-h-[68vh] w-full grid place-content-center py-12 px-4 md:px-8 lg:px-16 relative border-b border-white/10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur text-white border border-white/10 px-4 py-1 rounded-full text-xs uppercase tracking-widest font-medium">
            Certified Journey
          </div>
        </div>

        {/* Main Heading with Images */}
        <div className="text-center max-w-screen-xl mx-auto relative text-white">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight text-white">
            <span className="text-primary">Skills</span> forged in <br className="sm:hidden" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block mx-2 align-middle relative">
                    <div className="relative overflow-hidden sm:w-16 w-12 h-12 origin-center transition-all duration-300 md:hover:w-36 hover:-24 rounded-full border-2 border-primary/50 shadow-[0_0_18px_hsl(var(--primary)/0.35)]">
                      <img
                        src={`https://cdn.21st.dev/assets/mirror/1f/1f43e291faebd2de8864c22c3b9a53c93d84f1138fd95fa6da0c616dfff95df6.png`}
                        alt="Project work"
                        className="object-cover w-full h-full"
                        style={{ objectPosition: "center" }}
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="max-w-xs bg-zinc-900 text-white p-4 rounded-lg shadow-xl border border-white/10"
                >
                  <p className="mb-2 text-sm text-zinc-100">
                    &quot;Every project taught me something new — from Python basics to shipping RAG over 10M docs.&quot;
                  </p>
                  <p className="font-medium text-sm text-white">Gayatri — Project Learning</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            real projects
          </h1>

          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white">
            and <span className="text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-[0.9em]">certified</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block mx-2 align-middle">
                    <div className="relative overflow-hidden sm:w-16 w-14 h-14 origin-center transition-all duration-300 lg:hover:w-36 md:hover:w-24 hover:-20 rounded-full border-2 border-primary/50 shadow-[0_0_18px_hsl(var(--primary)/0.35)]">
                      <img
                        src={`https://cdn.21st.dev/assets/mirror/a3/a3b6d56d7da3c49b9119c9636d845709742eb41e1ac164a252f8ed7411055312.jpg`}
                        alt="Certification"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="max-w-xs bg-zinc-900 text-white p-4 rounded-lg shadow-xl border border-white/10"
                >
                  <p className="mb-2 text-sm text-zinc-100">
                    &quot;Certifications validated the journey — AWS, TensorFlow, CKAD — each marking a year of growth.&quot;
                  </p>
                  <p className="font-medium text-sm text-white">Gayatri — Certified Skills</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            along the way
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            <span className="text-primary">to prove it</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
