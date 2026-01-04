import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ReglementConfig } from "@/types/config";

interface RegistrationSectionProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

export function RegistrationSection({ config, onChange }: RegistrationSectionProps) {
  const updateReg = <K extends keyof ReglementConfig["registration"]>(
    key: K,
    value: ReglementConfig["registration"][K]
  ) => {
    onChange({
      ...config,
      registration: { ...config.registration, [key]: value },
    });
  };

  const updateTeamReg = <K extends keyof ReglementConfig["registration"]["teamRegistration"]>(
    key: K,
    value: ReglementConfig["registration"]["teamRegistration"][K]
  ) => {
    onChange({
      ...config,
      registration: {
        ...config.registration,
        teamRegistration: { ...config.registration.teamRegistration, [key]: value },
      },
    });
  };

  return (
    <div className="space-y-8">
      {/* Section intro */}
      <div>
        <h2 className="text-2xl font-semibold">Inschrijving</h2>
        <p className="mt-2 text-muted-foreground">
          Alles over de inschrijving: wanneer kunnen deelnemers zich aanmelden, wat kost het, en
          welke voertuigen zijn toegestaan?
        </p>
      </div>

      <Separator />

      {/* Dates */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Belangrijke data</h3>
          <p className="text-sm text-muted-foreground">
            Tijdlijn van de inschrijvingsprocedure.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="reg-open">Opening inschrijving</Label>
            <Input
              id="reg-open"
              type="date"
              value={config.registration.openingDate}
              onChange={(e) => updateReg("openingDate", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-close">Sluiting inschrijving</Label>
            <Input
              id="reg-close"
              type="date"
              value={config.registration.closingDate}
              onChange={(e) => updateReg("closingDate", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-publication">Publicatie reglement</Label>
            <Input
              id="reg-publication"
              type="date"
              value={config.registration.publicationDate}
              onChange={(e) => updateReg("publicationDate", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-acceptance">Acceptatieberichten</Label>
            <Input
              id="reg-acceptance"
              type="date"
              value={config.registration.acceptanceDate}
              onChange={(e) => updateReg("acceptanceDate", e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="doc-check">Documentencontrole</Label>
          <p className="text-xs text-muted-foreground">
            Datum en tijd waarop rijbewijzen en kentekenpapieren worden gecontroleerd.
          </p>
          <Input
            id="doc-check"
            value={config.registration.documentCheckDate}
            onChange={(e) => updateReg("documentCheckDate", e.target.value)}
          />
        </div>
      </div>

      <Separator />

      {/* Costs */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Kosten</h3>
          <p className="text-sm text-muted-foreground">
            Inschrijfgeld en betalingsgegevens.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="reg-fee">Inschrijfgeld (€)</Label>
            <Input
              id="reg-fee"
              type="number"
              min="0"
              step="5"
              value={config.registration.fee || ""}
              onChange={(e) => updateReg("fee", Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-iban">IBAN</Label>
            <Input
              id="reg-iban"
              value={config.registration.iban}
              onChange={(e) => updateReg("iban", e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="max-participants">Maximum aantal deelnemers</Label>
          <Input
            id="max-participants"
            type="number"
            min="0"
            value={config.registration.maxParticipants || ""}
            onChange={(e) => updateReg("maxParticipants", Number(e.target.value))}
          />
        </div>
      </div>

      <Separator />

      {/* Vehicles */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Voertuigen</h3>
          <p className="text-sm text-muted-foreground">
            Welke auto's mogen meedoen? Standaard zijn dit klassiekers (30+ jaar oud).
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Switch
              id="allow-modern"
              checked={config.registration.allowModernVehicles}
              onCheckedChange={(checked) => updateReg("allowModernVehicles", checked)}
            />
            <div>
              <Label htmlFor="allow-modern" className="cursor-pointer">
                Moderne voertuigen toestaan
              </Label>
              <p className="text-xs text-muted-foreground">
                Sta ook auto's jonger dan 30 jaar toe (in apart klassement).
              </p>
            </div>
          </div>

          {config.registration.allowModernVehicles && (
            <div className="flex gap-3">
              <div className="w-9 shrink-0" />
              <div className="flex-1 space-y-2">
                <Label htmlFor="modern-categories">Toegestane categorieën</Label>
                <p className="text-xs text-muted-foreground">
                  Beschrijf welke moderne voertuigen zijn toegestaan.
                </p>
                <Input
                  id="modern-categories"
                  value={config.registration.modernVehicleCategories}
                  onChange={(e) => updateReg("modernVehicleCategories", e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <Separator />

      {/* Teams */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Teaminschrijving</h3>
          <p className="text-sm text-muted-foreground">
            Kunnen equipes zich inschrijven als team (3-5 equipes gezamenlijk)?
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Switch
              id="team-enabled"
              checked={config.registration.teamRegistration.enabled}
              onCheckedChange={(checked) => updateTeamReg("enabled", checked)}
            />
            <div>
              <Label htmlFor="team-enabled" className="cursor-pointer">
                Teaminschrijving mogelijk
              </Label>
              <p className="text-xs text-muted-foreground">
                Teams strijden om een apart teamklassement.
              </p>
            </div>
          </div>

          {config.registration.teamRegistration.enabled && (
            <div className="flex gap-3">
              <div className="w-9 shrink-0" />
              <div className="flex-1 grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="team-cost">Kosten teaminschrijving (€)</Label>
                  <Input
                    id="team-cost"
                    type="number"
                    min="0"
                    value={config.registration.teamRegistration.cost || ""}
                    onChange={(e) => updateTeamReg("cost", Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="team-method">Inschrijfmethode</Label>
                  <Select
                    value={config.registration.teamRegistration.method}
                    onValueChange={(value) => updateTeamReg("method", value as "website" | "onsite")}
                  >
                    <SelectTrigger id="team-method">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Via de website</SelectItem>
                      <SelectItem value="onsite">Op de dag zelf</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
