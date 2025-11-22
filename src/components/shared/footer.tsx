import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com/Igb0kwe", label: "GitHub" },
  {
    icon: (props: any) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    ),
    href: "https://x.com/igb0kwe",
    label: "X",
  },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kagozie/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kagozieigbokwe@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer id="contact" className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-headline text-primary mb-6">Get in Touch</h3>
            <div className="flex space-x-8">
            {socialLinks.map((link, index) => (
                <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-foreground/70 transition-colors hover:text-primary"
                >
                <link.icon className="h-8 w-8" />
                </Link>
            ))}
            </div>
            <p className="mt-8 text-sm text-foreground/50">
            © {new Date().getFullYear()} Kagozie Igbokwe. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
