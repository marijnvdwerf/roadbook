import { useState } from "react";
import { SectionNav, sections, type SectionId } from "./SectionNav";
import {
  EventSection,
  OrganizationSection,
  LocationSection,
  RegistrationSection,
  ClassesSection,
  TechnicalSection,
  RouteRulesSection,
  TieBreakerSection,
  NavigationSystemsSection,
} from "./sections";
import { Reglement } from "../Reglement";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Eye, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { defaultConfig, type ReglementConfig } from "@/types/config";

export function WizardConfigurator() {
  const [config, setConfig] = useState<ReglementConfig>(defaultConfig);
  const [currentSection, setCurrentSection] = useState<SectionId>("event");
  const [previewOpen, setPreviewOpen] = useState(false);

  const currentIndex = sections.findIndex((s) => s.id === currentSection);
  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < sections.length - 1;

  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  const goBack = () => {
    if (prevSection) {
      setCurrentSection(prevSection.id);
    }
  };

  const goForward = () => {
    if (nextSection) {
      setCurrentSection(nextSection.id);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case "event":
        return <EventSection config={config} onChange={setConfig} />;
      case "organization":
        return <OrganizationSection config={config} onChange={setConfig} />;
      case "location":
        return <LocationSection config={config} onChange={setConfig} />;
      case "registration":
        return <RegistrationSection config={config} onChange={setConfig} />;
      case "classes":
        return <ClassesSection config={config} onChange={setConfig} />;
      case "technical":
        return <TechnicalSection config={config} onChange={setConfig} />;
      case "routeRules":
        return <RouteRulesSection config={config} onChange={setConfig} />;
      case "tieBreaker":
        return <TieBreakerSection config={config} onChange={setConfig} />;
      case "navigationSystems":
        return <NavigationSystemsSection config={config} onChange={setConfig} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between border-b px-6 py-4">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Terug naar klassieke weergave
          </a>
          <div className="h-4 w-px bg-border" />
          <h1 className="text-lg font-semibold">Reglement Configurator</h1>
        </div>

        <Sheet open={previewOpen} onOpenChange={setPreviewOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Eye className="h-4 w-4" />
              Preview Reglement
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-4xl p-0 sm:max-w-4xl">
            <SheetHeader className="border-b px-6 py-4">
              <SheetTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Preview Reglement
              </SheetTitle>
              <SheetDescription>
                Bekijk hoe je reglement er uiteindelijk uitziet
              </SheetDescription>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-80px)]">
              <div className="p-8">
                <Reglement config={config} />
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 border-r bg-muted/30">
          <ScrollArea className="h-full py-4">
            <div className="px-3">
              <SectionNav
                currentSection={currentSection}
                onSectionChange={setCurrentSection}
                config={config}
              />
            </div>
          </ScrollArea>
        </aside>

        {/* Content area */}
        <main className="flex flex-1 flex-col overflow-hidden">
          <ScrollArea className="flex-1">
            <div className="mx-auto max-w-3xl px-8 py-8">{renderSection()}</div>
          </ScrollArea>

          {/* Bottom navigation */}
          <div className="flex items-center justify-between border-t bg-background px-8 py-4">
            <Button
              variant="outline"
              onClick={goBack}
              disabled={!prevSection}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              {prevSection?.title ?? "Vorige"}
            </Button>

            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} van {sections.length}
            </span>

            <Button
              onClick={goForward}
              disabled={!nextSection}
              className="gap-2"
            >
              {nextSection?.title ?? "Volgende"}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
