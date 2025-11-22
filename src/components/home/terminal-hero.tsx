"use client";

import { useState, useEffect } from "react";

export function TerminalHero() {
  const [name, setName] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const fullName = "Kagozie Igbokwe";
  const subtitle = "Computer Engineer";
  const typingSpeed = 100;

  useEffect(() => {
    if (name.length < fullName.length) {
      const timeoutId = setTimeout(() => {
        setName(fullName.slice(0, name.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } else {
      const subtitleTimeout = setTimeout(() => {
        setShowSubtitle(true);
      }, 500);
      return () => clearTimeout(subtitleTimeout);
    }
  }, [name]);

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-background">
      <div className="text-center p-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline text-primary mb-4">
          {name}
          <span className="animate-blink text-primary">|</span>
        </h1>
        <div className="h-8">
            {showSubtitle && (
            <p className="text-xl sm:text-2xl text-accent-foreground transition-opacity duration-1000 opacity-100">
                {subtitle}
            </p>
            )}
        </div>
      </div>
    </section>
  );
}
