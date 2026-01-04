import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { SelectableCard } from "../SelectableCard";
import { MapPin, Smartphone, Layers } from "lucide-react";
import type { ReglementConfig } from "@/types/config";

interface TechnicalSectionProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

export function TechnicalSection({ config, onChange }: TechnicalSectionProps) {
  const updateTech = <K extends keyof ReglementConfig["technical"]>(
    key: K,
    value: ReglementConfig["technical"][K]
  ) => {
    onChange({
      ...config,
      technical: { ...config.technical, [key]: value },
    });
  };

  const updateArrows = <K extends keyof ReglementConfig["technical"]["routeArrows"]>(
    key: K,
    value: ReglementConfig["technical"]["routeArrows"][K]
  ) => {
    onChange({
      ...config,
      technical: {
        ...config.technical,
        routeArrows: { ...config.technical.routeArrows, [key]: value },
      },
    });
  };

  return (
    <div className="space-y-8">
      {/* Section intro */}
      <div>
        <h2 className="text-2xl font-semibold">Technisch</h2>
        <p className="mt-2 text-muted-foreground">
          Technische specificaties van het evenement: welke kaarten worden gebruikt, hoe werken de
          controles, en welke proeven zijn er?
        </p>
      </div>

      <Separator />

      {/* Maps */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Kaartmateriaal</h3>
          <p className="text-sm text-muted-foreground">
            Welke topografische kaarten worden gebruikt voor de navigatie?
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="map-scales">Kaartschaal</Label>
          <p className="text-xs text-muted-foreground">
            De meeste ritten gebruiken 1:50.000 kaarten. Vermeld alle schalen die gebruikt worden.
          </p>
          <Input
            id="map-scales"
            value={config.technical.mapScales}
            onChange={(e) => updateTech("mapScales", e.target.value)}
          />
        </div>
      </div>

      <Separator />

      {/* Controls */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Type controles</h3>
          <p className="text-sm text-muted-foreground">
            Hoe worden deelnemers gecontroleerd op de juiste route?
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <SelectableCard
            selected={config.technical.controlType === "physical"}
            onToggle={() => updateTech("controlType", "physical")}
            icon={<MapPin className="h-10 w-10" />}
            title="Fysiek"
            description="Borden, stempels, bemande posten"
          />
          <SelectableCard
            selected={config.technical.controlType === "virtual"}
            onToggle={() => updateTech("controlType", "virtual")}
            icon={<Smartphone className="h-10 w-10" />}
            title="Virtueel"
            description="Via app op smartphone"
          />
          <SelectableCard
            selected={config.technical.controlType === "combined"}
            onToggle={() => updateTech("controlType", "combined")}
            icon={<Layers className="h-10 w-10" />}
            title="Gecombineerd"
            description="Mix van fysiek en virtueel"
          />
        </div>

        {(config.technical.controlType === "virtual" ||
          config.technical.controlType === "combined") && (
          <div className="ml-4 space-y-3 border-l-2 border-primary/30 pl-4">
            <div className="space-y-2">
              <Label htmlFor="app-name">Naam van de app</Label>
              <Input
                id="app-name"
                value={config.technical.appName}
                onChange={(e) => updateTech("appName", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-manual">Link naar handleiding</Label>
              <Input
                id="app-manual"
                type="url"
                value={config.technical.appManualUrl}
                onChange={(e) => updateTech("appManualUrl", e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      <Separator />

      {/* Route arrows */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Routepijlen</h3>
          <p className="text-sm text-muted-foreground">
            Worden er routepijlen gebruikt om deelnemers de weg te wijzen bij omleidingen of
            moeilijke punten?
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="arrows-enabled"
            checked={config.technical.routeArrows.enabled}
            onCheckedChange={(checked) => updateArrows("enabled", checked)}
          />
          <Label htmlFor="arrows-enabled" className="cursor-pointer">
            Routepijlen gebruiken
          </Label>
        </div>

        {config.technical.routeArrows.enabled && (
          <div className="ml-10 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Type routepijlen</Label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => updateArrows("type", "physical")}
                  className={`flex-1 rounded-lg border-2 px-3 py-2 text-sm transition-colors ${
                    config.technical.routeArrows.type === "physical"
                      ? "border-primary bg-primary/5"
                      : "border-muted-foreground/20"
                  }`}
                >
                  Fysieke borden
                </button>
                <button
                  type="button"
                  onClick={() => updateArrows("type", "virtual")}
                  className={`flex-1 rounded-lg border-2 px-3 py-2 text-sm transition-colors ${
                    config.technical.routeArrows.type === "virtual"
                      ? "border-primary bg-primary/5"
                      : "border-muted-foreground/20"
                  }`}
                >
                  In de app
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="arrow-inscription">Opschrift op pijlen</Label>
              <Input
                id="arrow-inscription"
                value={config.technical.routeArrows.inscription}
                onChange={(e) => updateArrows("inscription", e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      <Separator />

      {/* Tests/Proeven */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Proeven</h3>
          <p className="text-sm text-muted-foreground">
            Welke speciale proeven bevat het evenement naast de reguliere route?
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Switch
              id="regularity-test"
              checked={config.technical.regularityTest}
              onCheckedChange={(checked) => updateTech("regularityTest", checked)}
            />
            <div>
              <Label htmlFor="regularity-test" className="cursor-pointer">
                Regelmatigheidsproef (RP)
              </Label>
              <p className="text-xs text-muted-foreground">
                Een traject waar een exacte gemiddelde snelheid moet worden gereden. Geheime
                tijdcontroles meten afwijkingen.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Switch
              id="skill-test"
              checked={config.technical.skillTest}
              onCheckedChange={(checked) => updateTech("skillTest", checked)}
            />
            <div>
              <Label htmlFor="skill-test" className="cursor-pointer">
                Behendigheidsproef
              </Label>
              <p className="text-xs text-muted-foreground">
                Een parcours met pylonen op afgesloten terrein. Binnen een normtijd en zonder
                pylonen te raken.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Other settings */}
      <div className="space-y-4">
        <h3 className="font-medium">Overige instellingen</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="tolerance">Afwijkingstolerantie (meters)</Label>
            <p className="text-xs text-muted-foreground">
              Als een wegaansluiting minder dan dit aantal meters afwijkt van de kaart, mag de
              afwijkende aansluiting gebruikt worden.
            </p>
            <Input
              id="tolerance"
              type="number"
              min="0"
              step="10"
              value={config.technical.deviationToleranceMeters || ""}
              onChange={(e) => updateTech("deviationToleranceMeters", Number(e.target.value))}
            />
          </div>
          <div className="space-y-3">
            <Label>Quietzones</Label>
            <div className="flex items-start gap-3">
              <Switch
                id="unpaved-quiet"
                checked={config.technical.quietZones.unpavedRoadsAutomatic}
                onCheckedChange={(checked) =>
                  updateTech("quietZones", { ...config.technical.quietZones, unpavedRoadsAutomatic: checked })
                }
              />
              <div>
                <Label htmlFor="unpaved-quiet" className="cursor-pointer font-normal">
                  Onverharde wegen automatisch quietzone
                </Label>
                <p className="text-xs text-muted-foreground">
                  Alle onverharde wegen zijn automatisch een quietzone (max 30 km/u).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
