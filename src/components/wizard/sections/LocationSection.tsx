import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import type { ReglementConfig, VenueInfo } from "@/types/config";

interface LocationSectionProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

function VenueFields({
  label,
  venue,
  onChange,
  required = false,
}: {
  label: string;
  venue: VenueInfo;
  onChange: (venue: VenueInfo) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-3 rounded-lg border bg-muted/30 p-4">
      <h4 className="font-medium">
        {label} {required && <span className="text-destructive">*</span>}
      </h4>
      <div className="space-y-3">
        <div className="space-y-1.5">
          <Label className="text-xs">Naam locatie</Label>
          <Input
            placeholder="bijv. Restaurant De Gouden Leeuw"
            value={venue.name}
            onChange={(e) => onChange({ ...venue, name: e.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Volledig adres</Label>
          <Input
            placeholder="Straat 123, 1234 AB Plaats"
            value={venue.address}
            onChange={(e) => onChange({ ...venue, address: e.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Telefoonnummer locatie</Label>
          <Input
            placeholder="0314-123456"
            value={venue.phone || ""}
            onChange={(e) => onChange({ ...venue, phone: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

export function LocationSection({ config, onChange }: LocationSectionProps) {
  const updateLocation = <K extends keyof ReglementConfig["location"]>(
    key: K,
    value: ReglementConfig["location"][K]
  ) => {
    onChange({
      ...config,
      location: { ...config.location, [key]: value },
    });
  };

  return (
    <div className="space-y-8">
      {/* Section intro */}
      <div>
        <h2 className="text-2xl font-semibold">Locaties</h2>
        <p className="mt-2 text-muted-foreground">
          Waar start en finisht de rit? Deelnemers moeten weten waar ze naartoe moeten en hoe laat
          ze er moeten zijn.
        </p>
      </div>

      <Separator />

      {/* Start location */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Startlocatie</h3>
          <p className="text-sm text-muted-foreground">
            Hier verzamelen deelnemers zich, worden documenten gecontroleerd en het routeboek uitgereikt.
          </p>
        </div>
        <VenueFields
          label="Startlocatie"
          venue={config.location.startLocation}
          onChange={(v) => updateLocation("startLocation", v)}
          required
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="publication-time">
              Uitreiking routeboek <span className="text-destructive">*</span>
            </Label>
            <Input
              id="publication-time"
              type="time"
              value={config.location.publicationTime}
              onChange={(e) => updateLocation("publicationTime", e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Tijdstip waarop deelnemers hun routeboek ontvangen.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="start-time">
              Starttijd eerste equipe <span className="text-destructive">*</span>
            </Label>
            <Input
              id="start-time"
              type="time"
              value={config.location.startTime}
              onChange={(e) => updateLocation("startTime", e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Vertrektijd van de eerste deelnemer.
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Finish location */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Finishlocatie</h3>
          <p className="text-sm text-muted-foreground">
            Waar eindigt de rit? Vaak is dit dezelfde locatie als de start.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Checkbox
            id="same-as-start"
            checked={config.location.sameAsStart}
            onCheckedChange={(checked) => updateLocation("sameAsStart", !!checked)}
          />
          <Label htmlFor="same-as-start" className="cursor-pointer font-normal">
            Finish op dezelfde locatie als de start
          </Label>
        </div>

        {!config.location.sameAsStart && (
          <VenueFields
            label="Finishlocatie"
            venue={config.location.finishLocation}
            onChange={(v) => updateLocation("finishLocation", v)}
          />
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="finish-time">Verwachte finishtijd</Label>
            <Input
              id="finish-time"
              type="time"
              value={config.location.finishTime}
              onChange={(e) => updateLocation("finishTime", e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Verwachte aankomsttijd van de eerste finisher.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="prize-time">Prijsuitreiking</Label>
            <Input
              id="prize-time"
              type="time"
              value={config.location.prizeTime}
              onChange={(e) => updateLocation("prizeTime", e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Tijdstip van de prijsuitreiking.
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Results */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Uitslagen</h3>
          <p className="text-sm text-muted-foreground">
            Wanneer kunnen deelnemers de einduitslag online bekijken?
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="results-date">Publicatie einduitslag</Label>
          <Input
            id="results-date"
            type="date"
            value={config.location.onlineResultsDate}
            onChange={(e) => updateLocation("onlineResultsDate", e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Uiterlijke datum waarop de definitieve uitslag op de website staat.
          </p>
        </div>
      </div>
    </div>
  );
}
