import { Badge } from "@/components/ui/badge";

const skills = [
  "C++",
  "Python",
  "HTML",
  "CSS",
  "SQL",
  "Qt",
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-headline text-primary mb-12 text-center">
          // About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
             <div className="p-6 bg-background rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold font-headline mb-4 text-primary">My Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                    </Badge>
                ))}
                </div>
             </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hello! I'm Kagozie, a dedicated third-year Computer Engineering student at the University of Maiduguri with a strong passion for building robust desktop applications and exploring the infinite possibilities of machine learning. I thrive on diving deep into algorithms and system architecture, and I am always eager to apply theoretical knowledge to real-world coding challenges.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              With a growing foundation in software engineering and data science, I enjoy creating efficient software solutions that leverage the power of intelligent systems. When I'm not coding or studying, you can find me keeping up with the latest hardware innovations or climbing leaderboards in my favorite video games.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
