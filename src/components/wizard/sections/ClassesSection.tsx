import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import type { ReglementConfig } from "@/types/config";

interface ClassesSectionProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

export function ClassesSection({ config, onChange }: ClassesSectionProps) {
  const updateClassName = (level: "highest" | "middle" | "lowest", name: string) => {
    onChange({
      ...config,
      classes: {
        ...config.classes,
        [level]: { ...config.classes[level], name },
      },
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

      {/* Classes */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="class-highest">Hoogste klasse</Label>
          <p className="text-xs text-muted-foreground">
            Voor zeer ervaren deelnemers (vaak aangeduid als A-, Expert-, Master- of Sterklasse).
          </p>
          <Input
            id="class-highest"
            value={config.classes.highest.name}
            onChange={(e) => updateClassName("highest", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="class-middle">Middelste klasse</Label>
          <p className="text-xs text-muted-foreground">
            Voor deelnemers met ervaring (vaak aangeduid als B-, Sporting- of Sportklasse).
          </p>
          <Input
            id="class-middle"
            value={config.classes.middle.name}
            onChange={(e) => updateClassName("middle", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="class-lowest">Laagste klasse</Label>
          <p className="text-xs text-muted-foreground">
            Voor deelnemers met weinig ervaring (vaak aangeduid als C-, Touring-, Tour- of Toerklasse).
          </p>
          <Input
            id="class-lowest"
            value={config.classes.lowest.name}
            onChange={(e) => updateClassName("lowest", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
