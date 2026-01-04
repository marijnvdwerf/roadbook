import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import type { ReglementConfig } from "@/types/config";

interface EventSectionProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

export function EventSection({ config, onChange }: EventSectionProps) {
  const updateEvent = <K extends keyof ReglementConfig["event"]>(
    key: K,
    value: ReglementConfig["event"][K]
  ) => {
    onChange({
      ...config,
      event: { ...config.event, [key]: value },
    });
  };

  const updateChampionship = (
    key: keyof ReglementConfig["event"]["championships"],
    value: boolean
  ) => {
    onChange({
      ...config,
      event: {
        ...config.event,
        championships: { ...config.event.championships, [key]: value },
      },
    });
  };

  return (
    <div className="space-y-8">
      {/* Section intro */}
      <div>
        <h2 className="text-2xl font-semibold">Evenement</h2>
        <p className="mt-2 text-muted-foreground">
          Basisinformatie over je evenement. Deze gegevens verschijnen op de titelpagina en door
          het hele reglement.
        </p>
      </div>

      <Separator />

      {/* Basic info */}
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="event-name">Naam evenement</Label>
            <Input
              id="event-name"
              value={config.event.name}
              onChange={(e) => updateEvent("name", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event-org">Organisatie</Label>
            <Input
              id="event-org"
              value={config.event.organizationName}
              onChange={(e) => updateEvent("organizationName", e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="event-length">Routelengte (km)</Label>
            <p className="text-xs text-muted-foreground">
              Geschatte totale routelengte voor de hoogste klasse.
            </p>
            <Input
              id="event-length"
              type="number"
              value={config.event.routeLengthKm || ""}
              onChange={(e) => updateEvent("routeLengthKm", Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event-area">Wedstrijdgebied</Label>
            <p className="text-xs text-muted-foreground">
              Geografische omschrijving van het gebied waar de route ligt.
            </p>
            <Input
              id="event-area"
              value={config.event.area}
              onChange={(e) => updateEvent("area", e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="event-date">Datum</Label>
            <Input
              id="event-date"
              type="date"
              value={config.event.date}
              onChange={(e) => updateEvent("date", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event-website">Website</Label>
            <Input
              id="event-website"
              type="url"
              value={config.event.website}
              onChange={(e) => updateEvent("website", e.target.value)}
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Championships */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Kampioenschappen</h3>
          <p className="text-sm text-muted-foreground">
            Selecteer voor welke kampioenschappen dit evenement meetelt. Dit bepaalt welke
            aanvullende regels en teksten in het reglement komen.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Checkbox
              id="champ-klassiek"
              checked={config.event.championships.nrfKlassiek}
              onCheckedChange={(checked) => updateChampionship("nrfKlassiek", !!checked)}
            />
            <div className="space-y-0.5">
              <Label htmlFor="champ-klassiek" className="cursor-pointer font-normal">
                NRF Klassiek Kampioenschap
              </Label>
              <p className="text-xs text-muted-foreground">
                Het hoofdkampioenschap van de NRF voor klassieke auto's.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="champ-kaartlezen"
              checked={config.event.championships.nrfKaartlezen}
              onCheckedChange={(checked) => updateChampionship("nrfKaartlezen", !!checked)}
            />
            <div className="space-y-0.5">
              <Label htmlFor="champ-kaartlezen" className="cursor-pointer font-normal">
                NRF Kaartlezen Kampioenschap
              </Label>
              <p className="text-xs text-muted-foreground">
                Kampioenschap met focus op kaartleesvaardigheden.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="champ-nk"
              checked={config.event.championships.nkHistorisch}
              onCheckedChange={(checked) => updateChampionship("nkHistorisch", !!checked)}
            />
            <div className="space-y-0.5">
              <Label htmlFor="champ-nk" className="cursor-pointer font-normal">
                NK Historische Rally's (DHRC)
              </Label>
              <p className="text-xs text-muted-foreground">
                Alleen klassiekers met bouwjaar vóór 1991 kunnen punten scoren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
