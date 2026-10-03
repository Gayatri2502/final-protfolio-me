"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  [
    { role: "RAG Systems", count: "2–4 week builds" },
    { role: "LLM Fine-tuning", count: "LoRA / QLoRA" },
    { role: "AI Agents", count: "Guardrailed tools" },
    { role: "Vector Search", count: "10M+ docs" },
    { role: "Model Evals", count: "Grounded metrics" },
    { role: "Prompt Systems", count: "Versioned & tested" },
    { role: "Chatbots", count: "Cited answers" },
    { role: "Doc Intelligence", count: "OCR + extract" },
    { role: "AI Prototypes", count: "Days, not months" },
    { role: "AI Audits", count: "Find the leaks" },
  ],
  [
    { role: "MLOps Pipelines", count: "Train → deploy" },
    { role: "Model Serving", count: "vLLM · Triton" },
    { role: "Edge Inference", count: "Sub-10ms" },
    { role: "Quantization", count: "4-bit · 8-bit" },
    { role: "Monitoring", count: "Drift & quality" },
    { role: "Healthcare AI", count: "HIPAA-aware" },
    { role: "Fraud Models", count: "Real-time score" },
    { role: "Recommendations", count: "Personalization" },
    { role: "Forecasting", count: "Demand · churn" },
    { role: "AI Roadmaps", count: "Sequenced by ROI" },
  ],
  [
    { role: "Data Pipelines", count: "Batch + stream" },
    { role: "Lakehouse Setup", count: "Delta · Iceberg" },
    { role: "Feature Stores", count: "Train/serve parity" },
    { role: "BI Dashboards", count: "KPIs that match" },
    { role: "Data Quality", count: "Tests & contracts" },
    { role: "ML Platforms", count: "Internal tooling" },
    { role: "Team Training", count: "Workshops" },
    { role: "Advisory Retainer", count: "Monthly" },
    { role: "Build Sprints", count: "2-week blocks" },
    { role: "Full-time Embed", count: "Join your team" },
  ],
]

export default function JobSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrev = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  const handleNext = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  return (
    <section
      className="
      w-full flex flex-col md:flex-row items-center justify-between
      rounded-2xl border
      bg-[#fdf7f3] dark:bg-neutral-900
      border-gray-200 dark:border-neutral-700
      py-10 px-6 m-4 md:m-8
      relative min-h-[400px] transition-colors
      "
    >
      {/* Right Section */}
      <div className="w-full md:w-2/5 text-left space-y-4">
        <Image
          src="https://cdn.21st.dev/assets/mirror/63/633172958fbafeb8ecfd70d783e2a37d002439c088458abd29061ba84389f0b6.png"
          alt="Explore AI/ML services"
          width={300}
          height={300}
          className="rounded-xl mx-auto md:mx-0"
        />
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-gray-100">
          Explore AI/ML services for every stage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Pick a service to start your AI build — from prototype to production ML.
        </p>
      </div>

      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center relative mt-10 md:mt-0">
        {/* Prev Arrow */}
        <Button
          variant="ghost"
          size="icon"
          className="
            absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2
            rounded-full bg-white dark:bg-neutral-800
            shadow hover:bg-gray-100 dark:hover:bg-neutral-700
          "
          onClick={handlePrev}
        >
          <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </Button>

        {/* Slider */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="
                  grid grid-cols-1 sm:grid-cols-2 gap-4
                  min-w-full p-4 rounded-xl
                  bg-gray-100 dark:bg-neutral-800
                "
              >
                {slide.map((job, idx) => (
                  <Card
                    key={idx}
                    className="
                      text-center shadow-md p-4
                      bg-white dark:bg-neutral-900
                      border border-gray-200 dark:border-neutral-700
                      transition-colors
                    "
                  >
                    <CardHeader className="text-base sm:text-lg font-semibold p-0 text-gray-800 dark:text-gray-100">
                      {job.role}
                    </CardHeader>
                    <CardContent className="text-sm text-gray-500 dark:text-gray-400 p-0 mt-1">
                      {job.count}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Next Arrow */}
        <Button
          variant="ghost"
          size="icon"
          className="
            absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2
            rounded-full bg-white dark:bg-neutral-800
            shadow hover:bg-gray-100 dark:hover:bg-neutral-700
          "
          onClick={handleNext}
        >
          <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </Button>
      </div>
    </section>
  )
}
