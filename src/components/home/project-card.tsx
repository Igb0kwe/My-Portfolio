import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  codeUrl: string;
};

export function ProjectCard({
  title,
  description,
  imageUrl,
  imageHint,
  codeUrl,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button asChild variant="secondary" className="text-lg">
            <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> View Repo
            </Link>
          </Button>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription className="text-foreground/70 h-16">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-4"></CardContent>
    </Card>
  );
}
