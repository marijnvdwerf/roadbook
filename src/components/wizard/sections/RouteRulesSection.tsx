import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { SelectableCard } from "../SelectableCard";
import { ArrowRight, ArrowLeftRight, GitBranch, BookOpen, FileText, Files } from "lucide-react";
import type { ReglementConfig } from "@/types/config";

interface RouteRulesSectionProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

export function RouteRulesSection({ config, onChange }: RouteRulesSectionProps) {
  const updateRules = <K extends keyof ReglementConfig["routeRules"]>(
    key: K,
    value: ReglementConfig["routeRules"][K]
  ) => {
    onChange({
      ...config,
      routeRules: { ...config.routeRules, [key]: value },
    });
  };

  return (
    <div className="space-y-8">
      {/* Section intro */}
      <div>
        <h2 className="text-2xl font-semibold">Routebepalingen</h2>
        <p className="mt-2 text-muted-foreground">
          Regels voor het construeren en rijden van de route. Deze bepalen hoe deelnemers met wegen
          en kruispunten moeten omgaan.
        </p>
      </div>

      <Separator />

      {/* Road usage */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Weggebruik</h3>
          <p className="text-sm text-muted-foreground">
            Hoe vaak en in welke richting mogen wegen in de route voorkomen?
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <SelectableCard
            selected={config.routeRules.roadUsage === "once_one_direction"}
            onToggle={() => updateRules("roadUsage", "once_one_direction")}
            icon={<ArrowRight className="h-10 w-10" />}
            title="Eén richting"
            description="Wegen mogen meerdere keren, maar altijd dezelfde richting"
          />
          <SelectableCard
            selected={config.routeRules.roadUsage === "multiple_both_directions"}
            onToggle={() => updateRules("roadUsage", "multiple_both_directions")}
            icon={<ArrowLeftRight className="h-10 w-10" />}
            title="Beide richtingen"
            description="Wegen mogen in beide richtingen in de route"
          />
          <SelectableCard
            selected={config.routeRules.roadUsage === "per_system"}
            onToggle={() => updateRules("roadUsage", "per_system")}
            icon={<GitBranch className="h-10 w-10" />}
            title="Per systeem"
            description="Staat bij elk navigatiesysteem apart vermeld"
          />
        </div>
      </div>

      <Separator />

      {/* Traffic rules */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Verkeersregels</h3>
          <p className="text-sm text-muted-foreground">
            Moeten deelnemers bij het construeren van de route rekening houden met verkeersregels?
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Switch
              id="traffic-rules"
              checked={config.routeRules.considerTrafficRules}
              onCheckedChange={(checked) => updateRules("considerTrafficRules", checked)}
            />
            <div>
              <Label htmlFor="traffic-rules" className="cursor-pointer">
                Rekening houden met verkeersregels
              </Label>
              <p className="text-xs text-muted-foreground">
                Eenrichtingsverkeer, inrijverboden etc. zijn van toepassing bij routeconstructie.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Switch
              id="dead-ends"
              checked={config.routeRules.deadEndRoadsAllowed}
              onCheckedChange={(checked) => updateRules("deadEndRoadsAllowed", checked)}
            />
            <div>
              <Label htmlFor="dead-ends" className="cursor-pointer">
                Doodlopende wegen toestaan
              </Label>
              <p className="text-xs text-muted-foreground">
                Doodlopende wegen mogen ingereden worden (en dus omgekeerd worden).
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Route interruptions */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Routeonderbrekingen</h3>
          <p className="text-sm text-muted-foreground">
            Hoe gaan de klassen om met routeonderbrekingen (barricades, afgesloten wegen)?
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Switch
              id="lowest-detour"
              checked={config.routeRules.lowestClassMustDetour}
              onCheckedChange={(checked) => updateRules("lowestClassMustDetour", checked)}
            />
            <div>
              <Label htmlFor="lowest-detour" className="cursor-pointer">
                Laagste klasse moet ook omrijden
              </Label>
              <p className="text-xs text-muted-foreground">
                Normaal mag de laagste klasse barricades negeren. Met deze optie moeten zij ook
                omrijden.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Switch
              id="detour-opposite"
              checked={config.routeRules.detourOppositeDirectionAllowed}
              onCheckedChange={(checked) => updateRules("detourOppositeDirectionAllowed", checked)}
            />
            <div>
              <Label htmlFor="detour-opposite" className="cursor-pointer">
                Omweg in tegengestelde richting toegestaan
              </Label>
              <p className="text-xs text-muted-foreground">
                Bij het construeren van een omweg mag een weg in tegengestelde richting worden
                opgenomen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Legend location */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Legenda</h3>
          <p className="text-sm text-muted-foreground">
            Waar staat de legenda met kaartsymbolen en navigatiesysteem-uitleg?
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <SelectableCard
            selected={config.routeRules.legendLocation === "appendix"}
            onToggle={() => updateRules("legendLocation", "appendix")}
            icon={<Files className="h-10 w-10" />}
            title="Bijlage"
            description="Als bijlage bij het reglement"
          />
          <SelectableCard
            selected={config.routeRules.legendLocation === "routebook"}
            onToggle={() => updateRules("legendLocation", "routebook")}
            icon={<BookOpen className="h-10 w-10" />}
            title="Routeboek"
            description="In het routeboek zelf"
          />
          <SelectableCard
            selected={config.routeRules.legendLocation === "separate"}
            onToggle={() => updateRules("legendLocation", "separate")}
            icon={<FileText className="h-10 w-10" />}
            title="Apart document"
            description="Als los document"
          />
        </div>
      </div>
    </div>
  );
}
