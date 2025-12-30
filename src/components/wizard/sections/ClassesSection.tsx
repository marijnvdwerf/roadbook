import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import type { ReglementConfig } from "@/types/config";

interface ClassesSectionProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

function ClassCard({
  level,
  title,
  hint,
  classData,
  onChange,
}: {
  level: "highest" | "middle" | "lowest";
  title: string;
  hint: string;
  classData: { name: string; description: string };
  onChange: (data: { name: string; description: string }) => void;
}) {
  const colors = {
    highest: "border-l-red-500",
    middle: "border-l-orange-500",
    lowest: "border-l-green-500",
  };

  return (
    <div className={`rounded-lg border border-l-4 ${colors[level]} bg-muted/30 p-4`}>
      <div className="mb-3">
        <h4 className="font-medium">{title}</h4>
        <p className="text-xs text-muted-foreground">{hint}</p>
      </div>
      <div className="space-y-3">
        <div className="space-y-1.5">
          <Label className="text-xs">
            Naam <span className="text-destructive">*</span>
          </Label>
          <Input
            placeholder={
              level === "highest" ? "bijv. Expert" : level === "middle" ? "bijv. Sport" : "bijv. Toer"
            }
            value={classData.name}
            onChange={(e) => onChange({ ...classData, name: e.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Omschrijving (optioneel)</Label>
          <Textarea
            placeholder="Korte omschrijving van deze klasse..."
            rows={2}
            value={classData.description}
            onChange={(e) => onChange({ ...classData, description: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

export function ClassesSection({ config, onChange }: ClassesSectionProps) {
  const updateClass = (
    level: "highest" | "middle" | "lowest",
    data: { name: string; description: string }
  ) => {
    onChange({
      ...config,
      classes: { ...config.classes, [level]: data },
    });
  };

  return (
    <div className="space-y-8">
      {/* Section intro */}
      <div>
        <h2 className="text-2xl font-semibold">Klassen</h2>
        <p className="mt-2 text-muted-foreground">
          Elke deelnemer rijdt in een van de drie klassen, van beginners tot experts. Deelnemers
          kiezen zelf hun klasse bij inschrijving. De hoogste klasse heeft de moeilijkste opdrachten.
        </p>
      </div>

      <Separator />

      {/* Info box */}
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm dark:border-blue-900 dark:bg-blue-950">
        <p className="font-medium text-blue-900 dark:text-blue-100">Hoe werken klassen?</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-blue-800 dark:text-blue-200">
          <li>Elke klasse krijgt dezelfde route, maar met verschillende navigatiesystemen</li>
          <li>De hoogste klasse krijgt de moeilijkste systemen, de laagste krijgt de makkelijkste</li>
          <li>Routecontroles kunnen per klasse verschillen</li>
          <li>Deelnemers kunnen promotie of degradatie verdienen naar een andere klasse</li>
        </ul>
      </div>

      <Separator />

      {/* Classes */}
      <div className="space-y-4">
        <h3 className="font-medium">Definieer je klassen</h3>
        <div className="grid gap-4 lg:grid-cols-3">
          <ClassCard
            level="highest"
            title="Hoogste klasse"
            hint="Voor zeer ervaren deelnemers"
            classData={config.classes.highest}
            onChange={(data) => updateClass("highest", data)}
          />
          <ClassCard
            level="middle"
            title="Middelste klasse"
            hint="Voor ervaren deelnemers"
            classData={config.classes.middle}
            onChange={(data) => updateClass("middle", data)}
          />
          <ClassCard
            level="lowest"
            title="Laagste klasse"
            hint="Instapklasse voor beginners"
            classData={config.classes.lowest}
            onChange={(data) => updateClass("lowest", data)}
          />
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">
          <strong>Tip:</strong> Veelgebruikte klassennamen zijn: Expert/Sport/Toer, Master/Sporting/Tour,
          Ster/Roos/Kaart, of A/B/C. Kies namen die passen bij de sfeer van je evenement.
        </p>
      </div>
    </div>
  );
}
