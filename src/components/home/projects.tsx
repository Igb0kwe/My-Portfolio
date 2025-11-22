import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ProjectCard } from "./project-card";

const projectsData = [
  {
    title: "Personal Portfolio",
    description: "A responsive and modern personal portfolio website to showcase my skills and projects, featuring a sleek design and smooth animations.",
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-3')?.imageUrl ?? "",
    imageHint: PlaceHolderImages.find(p => p.id === 'project-3')?.imageHint ?? "",
    codeUrl: "https://github.com/Igb0kwe/My-Portfolio",
  },
  {
    title: "Land Price Prediction Model",
    description: "A machine learning model built to predict the price of land based on area, using regression techniques.",
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-1')?.imageUrl ?? "",
    imageHint: PlaceHolderImages.find(p => p.id === 'project-1')?.imageHint ?? "",
    codeUrl: "https://github.com/Igb0kwe/Land-price-prediction-model",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-headline text-primary mb-12 text-center">
          // Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
