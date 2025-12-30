import { cn } from "@/lib/utils";
import { Check, Circle } from "lucide-react";
import type { ReglementConfig } from "@/types/config";

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
  description: string;
}

export const sections: Section[] = [
  {
    id: "event",
    title: "Evenement",
    description: "Naam, datum, wedstrijdgebied",
  },
  {
    id: "organization",
    title: "Organisatie",
    description: "Comité en functionarissen",
  },
  {
    id: "location",
    title: "Locaties",
    description: "Start- en finishlocatie",
  },
  {
    id: "registration",
    title: "Inschrijving",
    description: "Data, kosten, deelname",
  },
  {
    id: "classes",
    title: "Klassen",
    description: "Toer, Sport, Expert",
  },
  {
    id: "technical",
    title: "Technisch",
    description: "Kaarten, controles, proeven",
  },
  {
    id: "routeRules",
    title: "Routebepalingen",
    description: "Weggebruik en regels",
  },
  {
    id: "tieBreaker",
    title: "Ex Aequo",
    description: "Bij gelijke stand",
  },
  {
    id: "navigationSystems",
    title: "Navigatiesystemen",
    description: "Welke systemen worden gebruikt",
  },
];

// Check if a section has required fields filled
function isSectionComplete(sectionId: SectionId, config: ReglementConfig): boolean {
  switch (sectionId) {
    case "event":
      return !!(config.event.name && config.event.date && config.event.organizationName);
    case "organization":
      return !!(
        config.organization.secretary.name &&
        config.organization.raceDirector.name &&
        config.organization.emergencyHead.name
      );
    case "location":
      return !!(
        config.location.startLocation.name &&
        config.location.startLocation.address &&
        config.location.startTime
      );
    case "registration":
      return !!(
        config.registration.openingDate &&
        config.registration.closingDate &&
        config.registration.fee > 0
      );
    case "classes":
      return !!(
        config.classes.highest.name &&
        config.classes.middle.name &&
        config.classes.lowest.name
      );
    case "technical":
      return !!config.technical.mapScales;
    case "routeRules":
      return true; // Has sensible defaults
    case "tieBreaker":
      return true; // Has sensible defaults
    case "navigationSystems":
      // At least one system should be selected
      const ns = config.navigationSystems;
      return (
        ns.ingetekendeLijn ||
        ns.ingetekendeLijnBarricades ||
        ns.grensbenadering ||
        ns.pijlenKortste.enabled ||
        ns.blokkerendePijlen.enabled ||
        ns.puntenKortste.enabled ||
        ns.blokkerendePunten.enabled ||
        ns.vakkenLangste ||
        ns.tSystemen ||
        ns.bolPijl ||
        ns.visgraat
      );
    default:
      return false;
  }
}

interface SectionNavProps {
  currentSection: SectionId;
  onSectionChange: (section: SectionId) => void;
  config: ReglementConfig;
}

export function SectionNav({ currentSection, onSectionChange, config }: SectionNavProps) {
  const completedCount = sections.filter((s) => isSectionComplete(s.id, config)).length;

  return (
    <nav className="flex flex-col gap-1">
      <div className="mb-4 px-3">
        <div className="text-sm text-muted-foreground">
          {completedCount} van {sections.length} secties ingevuld
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${(completedCount / sections.length) * 100}%` }}
          />
        </div>
      </div>

      {sections.map((section) => {
        const isComplete = isSectionComplete(section.id, config);
        const isCurrent = currentSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
              "hover:bg-muted/50",
              isCurrent && "bg-muted"
            )}
          >
            <div
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                isComplete
                  ? "border-primary bg-primary text-primary-foreground"
                  : isCurrent
                    ? "border-primary"
                    : "border-muted-foreground/30"
              )}
            >
              {isComplete ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Circle className={cn("h-2 w-2", isCurrent && "fill-primary text-primary")} />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div
                className={cn(
                  "truncate text-sm font-medium",
                  isCurrent ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {section.title}
              </div>
              <div className="truncate text-xs text-muted-foreground/70">
                {section.description}
              </div>
            </div>
          </button>
        );
      })}
    </nav>
  );
}
