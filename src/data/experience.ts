export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "contract" | "freelance" | "advisor";
  technologies: string[];
  highlights: string[];
  color?: string;
}

export interface FreelanceProject {
  id: string;
  title: string;
  client: string;
  period: string;
  description: string;
  technologies: string[];
  outcomes: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  link?: string;
}

export interface Milestone {
  id: string;
  title: string;
  date: string;
  description: string;
  category: "career" | "project" | "speaking" | "award" | "publication" | "open-source";
  icon: string;
  link?: string;
  metrics?: { label: string; value: string }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialId: string;
  url: string;
  logo: string;
  skills: string[];
  level: "associate" | "professional" | "expert" | "specialty";
}

export const companies: Company[] = [
  {
    id: "techcorp-ai",
    name: "TechCorp AI",
    logo: "/images/companies/techcorp.svg",
    description: "Leading AI research and deployment company focused on building production-grade ML systems.",
    website: "https://techcorp.ai",
    role: "Senior AI Engineer",
    period: "2022 — Present",
    location: "San Francisco, CA",
    type: "full-time",
    technologies: ["Python", "PyTorch", "Kubernetes", "FastAPI", "Redis", "Weaviate", "LangChain"],
    highlights: [
      "Built semantic search engine handling 10M+ documents with sub-100ms latency",
      "Designed LLM fine-tuning platform supporting 7B-70B parameter models with LoRA/QLoRA",
      "Deployed multimodal RAG system to 500+ engineers reducing hallucination by 40%",
      "Established MLOps best practices reducing model deployment time by 80%",
    ],
    color: "#06b6d4",
  },
  {
    id: "neural-labs",
    name: "Neural Labs",
    logo: "/images/companies/neurallabs.svg",
    description: "AI research lab specializing in efficient model architectures and edge deployment.",
    website: "https://neurallabs.ai",
    role: "Machine Learning Engineer",
    period: "2020 — 2022",
    location: "Remote",
    type: "full-time",
    technologies: ["Python", "TensorFlow", "ONNX", "TensorRT", "Docker", "AWS", "MLflow"],
    highlights: [
      "Built distributed training pipeline reducing training time by 60%",
      "Optimized model inference achieving sub-10ms latency on edge devices",
      "Published 3 papers at top-tier ML conferences (NeurIPS, ICML, ICLR)",
      "Open-sourced model quantization library with 2k+ GitHub stars",
    ],
    color: "#a855f7",
  },
  {
    id: "dataflow-inc",
    name: "DataFlow Inc",
    logo: "/images/companies/dataflow.svg",
    description: "Enterprise data platform company enabling real-time analytics at scale.",
    website: "https://dataflow.inc",
    role: "Software Engineer",
    period: "2018 — 2020",
    location: "New York, NY",
    type: "full-time",
    technologies: ["Java", "Kafka", "Spark", "PostgreSQL", "Kubernetes", "GCP"],
    highlights: [
      "Processed 1TB+ daily data through streaming pipelines",
      "Reduced infrastructure costs by 40% through cloud optimization",
      "Mentored 5 junior engineers and established code review standards",
    ],
    color: "#10b981",
  },
];

export const freelanceProjects: FreelanceProject[] = [
  {
    id: "healthcare-ai",
    title: "Medical Imaging AI Platform",
    client: "MedTech Solutions",
    period: "2023",
    description: "Built end-to-end AI platform for automated medical image analysis and diagnosis assistance.",
    technologies: ["PyTorch", "MONAI", "FastAPI", "Kubernetes", "DICOM", "React"],
    outcomes: [
      "Reduced radiologist review time by 65%",
      "Achieved 94% accuracy on benchmark datasets",
      "Deployed to 12 hospitals across 3 countries",
    ],
    testimonial: {
      text: "Exceptional technical depth and delivery speed. The platform exceeded our clinical requirements.",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      company: "MedTech Solutions",
    },
    link: "https://github.com/alphacentauric/medical-ai",
  },
  {
    id: "fintech-fraud",
    title: "Real-time Fraud Detection System",
    client: "FinanceFlow",
    period: "2022",
    description: "Designed and deployed streaming ML pipeline for credit card fraud detection with sub-50ms latency.",
    technologies: ["Python", "Flink", "XGBoost", "Redis", "Kafka", "Prometheus"],
    outcomes: [
      "Detected 99.2% of fraudulent transactions",
      "Reduced false positives by 45%",
      "Processed 50K transactions/second",
    ],
    testimonial: {
      text: "The system's performance and reliability have been outstanding in production.",
      author: "Michael Torres",
      role: "VP Engineering",
      company: "FinanceFlow",
    },
  },
  {
    id: "retail-recommendation",
    title: "Personalization Engine",
    client: "ShopSmart",
    period: "2021",
    description: "Built real-time recommendation system serving personalized product suggestions to 5M+ users.",
    technologies: ["Python", "TensorFlow", "Redis", "Kubernetes", "GraphQL", "React"],
    outcomes: [
      "Increased conversion rate by 28%",
      "Improved user engagement by 40%",
      "A/B tested against 5 baseline models",
    ],
  },
];

export const milestones: Milestone[] = [
  {
    id: "neurips-2023",
    title: "NeurIPS 2023 Paper Accepted",
    date: "2023-09-15",
    description: "Published 'Efficient Transformer Architectures for Long-Sequence Modeling' at NeurIPS 2023.",
    category: "publication",
    icon: "📄",
    link: "https://arxiv.org/abs/2023.xxxxx",
    metrics: [{ label: "Citations", value: "120+" }],
  },
  {
    id: "icml-2022",
    title: "ICML 2022 Outstanding Paper Award",
    date: "2022-07-20",
    description: "Received Outstanding Paper Award for 'Quantization-Aware Training for Edge Deployment'.",
    category: "award",
    icon: "🏆",
    link: "https://icml.cc/2022/awards",
  },
  {
    id: "github-10k",
    title: "10K GitHub Stars on Open Source Project",
    date: "2023-03-10",
    description: "Open-source quantization library 'quantize-ml' reached 10,000 stars.",
    category: "open-source",
    icon: "⭐",
    link: "https://github.com/alphacentauric/quantize-ml",
    metrics: [{ label: "Contributors", value: "50+" }, { label: "Downloads/mo", value: "500K+" }],
  },
  {
    id: "ai-conf-keynote",
    title: "Keynote at AI Infrastructure Conference",
    date: "2024-02-15",
    description: "Delivered keynote on 'Building Production ML Systems at Scale' to 2,000+ attendees.",
    category: "speaking",
    icon: "🎤",
    link: "https://aiconf2024.com/speakers",
  },
  {
    id: "senior-promotion",
    title: "Promoted to Senior AI Engineer",
    date: "2022-01-15",
    description: "Promoted to Senior AI Engineer at TechCorp AI after 18 months.",
    category: "career",
    icon: "📈",
  },
  {
    id: "mlops-cert",
    title: "MLOps Certification - Expert Level",
    date: "2023-11-01",
    description: "Achieved expert-level MLOps certification from Cloud Native Computing Foundation.",
    category: "award",
    icon: "📜",
    link: "https://cncf.io/certification/mlops",
  },
  {
    id: "first-prod-model",
    title: "First Production ML Model Deployed",
    date: "2019-06-20",
    description: "Deployed first production ML model serving 1M+ predictions/day at DataFlow Inc.",
    category: "career",
    icon: "🚀",
  },
  {
    id: "patent-granted",
    title: "US Patent Granted for Adaptive Quantization",
    date: "2024-01-10",
    description: "Patent US2024XXXXXX granted for 'Adaptive Quantization Methods for Neural Networks'.",
    category: "award",
    icon: "📋",
    link: "https://patents.google.com/patent/US2024XXXXXX",
  },
];

export const certifications: Certification[] = [
  {
    id: "aws-ml-specialty",
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023-08-15",
    expiryDate: "2026-08-15",
    credentialId: "AWS-ML-2023-XXXXXX",
    url: "https://aws.amazon.com/verification",
    logo: "/images/certifications/aws.svg",
    skills: ["SageMaker", "MLOps", "Model Deployment", "Feature Engineering", "Hyperparameter Tuning"],
    level: "specialty",
  },
  {
    id: "gcp-ml-engineer",
    name: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    date: "2023-05-20",
    expiryDate: "2025-05-20",
    credentialId: "GCP-ML-2023-XXXXXX",
    url: "https://cloud.google.com/certification",
    logo: "/images/certifications/gcp.svg",
    skills: ["Vertex AI", "TensorFlow", "AutoML", "Model Monitoring", "Data Pipeline"],
    level: "professional",
  },
  {
    id: "cncf-mlops",
    name: "Certified MLOps Engineer (Expert)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023-11-01",
    expiryDate: "2025-11-01",
    credentialId: "CNCF-MLOPS-2023-XXXXXX",
    url: "https://cncf.io/certification/mlops",
    logo: "/images/certifications/cncf.svg",
    skills: ["Kubeflow", "MLflow", "Kubernetes", "GitOps", "Model Serving"],
    level: "expert",
  },
  {
    id: "nvidia-dl",
    name: "NVIDIA Deep Learning Institute - Computer Vision",
    issuer: "NVIDIA",
    date: "2022-09-10",
    credentialId: "NVIDIA-DLI-CV-2022",
    url: "https://dli.nvidia.com",
    logo: "/images/certifications/nvidia.svg",
    skills: ["CNNs", "Transfer Learning", "Object Detection", "Segmentation", "TensorRT"],
    level: "associate",
  },
  {
    id: "databricks-ml",
    name: "Databricks Certified ML Professional",
    issuer: "Databricks",
    date: "2023-02-28",
    expiryDate: "2025-02-28",
    credentialId: "DATABRICKS-ML-2023-XXXXXX",
    url: "https://databricks.com/certification",
    logo: "/images/certifications/databricks.svg",
    skills: ["MLflow", "Delta Lake", "Feature Store", "AutoML", "Model Registry"],
    level: "professional",
  },
  {
    id: "huggingface-llm",
    name: "Hugging Face LLM Course Certification",
    issuer: "Hugging Face",
    date: "2024-01-15",
    credentialId: "HF-LLM-2024-XXXXXX",
    url: "https://huggingface.co/learn",
    logo: "/images/certifications/huggingface.svg",
    skills: ["Transformers", "Fine-tuning", "PEFT/LoRA", "RLHF", "Model Deployment"],
    level: "specialty",
  },
];