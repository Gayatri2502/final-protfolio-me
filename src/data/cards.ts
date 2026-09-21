export interface CardData {
  id: number;
  title: string;
  description: string;
  color: string;
  image?: string;
  tags?: string[];
  link?: string;
}

export const cardData: CardData[] = [
  {
    id: 1,
    title: "Neural Search Engine",
    description: "Semantic search powered by transformer embeddings with real-time indexing. Handles 10M+ documents with sub-100ms latency.",
    color: "rgba(6, 182, 212, 0.8)",
    tags: ["AI/ML", "Vector Search", "Transformers"],
    link: "/projects/neural-search",
  },
  {
    id: 2,
    title: "LLM Fine-tuning Platform",
    description: "No-code platform for fine-tuning LLMs on custom datasets with LoRA/QLoRA. Supports 7B-70B parameter models.",
    color: "rgba(168, 85, 247, 0.8)",
    tags: ["LLMs", "Fine-tuning", "LoRA"],
    link: "/projects/llm-platform",
  },
  {
    id: 3,
    title: "Multimodal RAG System",
    description: "Retrieval-augmented generation for text, images, and code with citations. Cross-modal retrieval across text/image/code.",
    color: "rgba(34, 211, 238, 0.8)",
    tags: ["RAG", "Multimodal", "LLMs"],
    link: "/projects/multimodal-rag",
  },
  {
    id: 4,
    title: "AI Code Assistant",
    description: "Context-aware code generation and refactoring tool. Integrates with IDEs for real-time suggestions and documentation.",
    color: "rgba(250, 204, 21, 0.8)",
    tags: ["Code Gen", "IDE Integration", "RAG"],
    link: "/projects/ai-code-assistant",
  },
  {
    id: 5,
    title: "MLOps Pipeline",
    description: "End-to-end ML pipeline with automated training, evaluation, and deployment. GitOps-based model versioning and monitoring.",
    color: "rgba(16, 185, 129, 0.8)",
    tags: ["MLOps", "Kubernetes", "Monitoring"],
    link: "/projects/mlops-pipeline",
  },
  {
    id: 6,
    title: "Edge AI Inference",
    description: "Optimized model serving at the edge with quantization and compilation. Sub-10ms latency on edge devices.",
    color: "rgba(249, 115, 22, 0.8)",
    tags: ["Edge AI", "ONNX", "TensorRT"],
    link: "/projects/edge-ai",
  },
];