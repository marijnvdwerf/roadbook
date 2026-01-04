import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
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
import { Eye, FileText, ChevronRight, Download } from "lucide-react";
import { defaultConfig, type ReglementConfig } from "@/types/config";
import { generateDocument } from "@/lib/generateDocument";

export function WizardConfigurator() {
  const [config, setConfig] = useState<ReglementConfig>(defaultConfig);
  const [currentSection, setCurrentSection] = useState<SectionId>("event");
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleDownload = async () => {
    await generateDocument(config);
  };

  // Override the global overflow-hidden for this page
  useEffect(() => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const currentIndex = sections.findIndex((s) => s.id === currentSection);
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  const goForward = () => {
    if (nextSection) {
      setCurrentSection(nextSection.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderSection = () => {
    const props = { config, onChange: setConfig };

    switch (currentSection) {
      case "event":
        return <EventSection {...props} />;
      case "organization":
        return <OrganizationSection {...props} />;
      case "location":
        return <LocationSection {...props} />;
      case "registration":
        return <RegistrationSection {...props} />;
      case "classes":
        return <ClassesSection {...props} />;
      case "technical":
        return <TechnicalSection {...props} />;
      case "routeRules":
        return <RouteRulesSection {...props} />;
      case "tieBreaker":
        return <TieBreakerSection {...props} />;
      case "navigationSystems":
        return <NavigationSystemsSection {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-background">
      {/* Centered container for everything */}
      <div className="mx-auto max-w-5xl px-6">
        {/* Header row */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              &larr; Terug
            </Link>
            <div className="h-4 w-px bg-border" />
            <h1 className="text-lg font-semibold">Reglement Configurator</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4" />
              Download Word
            </Button>

            <Sheet open={previewOpen} onOpenChange={setPreviewOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Eye className="h-4 w-4" />
                Preview
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
          </div>
        </header>

        {/* Main layout: sidebar + content */}
        <div className="flex gap-16 pb-24">
          {/* Sidebar - sticky to top */}
          <aside className="w-44 shrink-0">
            <nav className="sticky top-8">
              <SectionNav
                currentSection={currentSection}
                onSectionChange={setCurrentSection}
              />
            </nav>
          </aside>

          {/* Content */}
          <div className="min-w-0 flex-1">
            {renderSection()}

            {/* Next button */}
            {nextSection && (
              <div className="mt-12 pt-8 border-t">
                <Button onClick={goForward} className="gap-2">
                  Volgende: {nextSection.title}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Final section */}
            {!nextSection && (
              <div className="mt-12 pt-8 border-t">
                <div className="rounded-lg border bg-muted/50 p-6">
                  <h3 className="font-medium">Configuratie compleet</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Je hebt alle secties doorlopen. Gebruik de Preview knop om je reglement te bekijken.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => setPreviewOpen(true)}
                    >
                      <Eye className="h-4 w-4" />
                      Preview Reglement
                    </Button>
                    <Button className="gap-2" onClick={handleDownload}>
                      <Download className="h-4 w-4" />
                      Download Word
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
