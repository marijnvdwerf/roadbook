import { cn } from "@/lib/utils";

export type SectionId =
  | "event"
  | "organization"
  | "location"
  | "registration"
  | "classes"
  | "technical"
  | "routeRules"
  | "tieBreaker"
  | "navigationSystems";

interface Section {
  id: SectionId;
  title: string;
}

export const sections: Section[] = [
  { id: "event", title: "Evenement" },
  { id: "organization", title: "Organisatie" },
  { id: "location", title: "Locaties" },
  { id: "registration", title: "Inschrijving" },
  { id: "classes", title: "Klassen" },
  { id: "technical", title: "Technisch" },
  { id: "routeRules", title: "Routebepalingen" },
  { id: "tieBreaker", title: "Ex Aequo" },
  { id: "navigationSystems", title: "Navigatiesystemen" },
];

interface SectionNavProps {
  currentSection: SectionId;
  onSectionChange: (section: SectionId) => void;
}

export function SectionNav({ currentSection, onSectionChange }: SectionNavProps) {
  return (
    <nav className="flex flex-col">
      {sections.map((section) => {
        const isCurrent = currentSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={cn(
              "px-4 py-2 text-left text-sm transition-colors rounded-md",
              isCurrent
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {section.title}
          </button>
        );
      })}
    </nav>
  );
}
