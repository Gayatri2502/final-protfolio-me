export const galleryProjects = [
  { id: "aurora-dental", alt: "Aurora Dental Studio website", featured: true },
  { id: "aurora-booking", alt: "Aurora Dental appointment booking" },
  { id: "madhav-offset", alt: "Madhav Offset Printers website", featured: true },
  { id: "coldspace-home", alt: "ColdSpace marketplace website", featured: true },
  { id: "coldspace-marketplace", alt: "ColdSpace storage listings" },
  { id: "farmorigins", alt: "FarmOrigins product catalog", featured: true },
  { id: "f1-scenes", alt: "Formula 1 history video scenes", featured: true },
  { id: "solar-sales", alt: "Solar Sales Desk CRM dashboard", featured: true },
].map((project) => ({
  ...project,
  image: `/images/projects/${project.id}.jpg`,
}));
