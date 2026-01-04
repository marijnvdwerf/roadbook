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
            <Label htmlFor="reg-open">
              Opening inschrijving <span className="text-destructive">*</span>
            </Label>
            <Input
              id="reg-open"
              type="date"
              value={config.registration.openingDate}
              onChange={(e) => updateReg("openingDate", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-close">
              Sluiting inschrijving <span className="text-destructive">*</span>
            </Label>
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
            <p className="text-xs text-muted-foreground">
              Wanneer wordt het reglement gepubliceerd?
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-acceptance">Acceptatieberichten</Label>
            <Input
              id="reg-acceptance"
              type="date"
              value={config.registration.acceptanceDate}
              onChange={(e) => updateReg("acceptanceDate", e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Wanneer ontvangen deelnemers bericht van acceptatie?
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="doc-check">Documentencontrole</Label>
          <Input
            id="doc-check"
            placeholder="bijv. 25 mei 2025, 09:00-10:00 uur"
            value={config.registration.documentCheckDate}
            onChange={(e) => updateReg("documentCheckDate", e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Datum en tijd waarop rijbewijzen en kentekenpapieren worden gecontroleerd.
          </p>
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
            <Label htmlFor="reg-fee">
              Inschrijfgeld (€) <span className="text-destructive">*</span>
            </Label>
            <Input
              id="reg-fee"
              type="number"
              min="0"
              step="5"
              placeholder="bijv. 75"
              value={config.registration.fee || ""}
              onChange={(e) => updateReg("fee", Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-iban">
              IBAN <span className="text-destructive">*</span>
            </Label>
            <Input
              id="reg-iban"
              placeholder="NL00BANK0123456789"
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
            placeholder="bijv. 80"
            value={config.registration.maxParticipants || ""}
            onChange={(e) => updateReg("maxParticipants", Number(e.target.value))}
          />
          <p className="text-xs text-muted-foreground">
            Laat leeg als er geen maximum is.
          </p>
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
            <div className="ml-10 space-y-2">
              <Label htmlFor="modern-categories">Toegestane categorieën</Label>
              <Input
                id="modern-categories"
                placeholder="bijv. Youngtimers (15-30 jaar)"
                value={config.registration.modernVehicleCategories}
                onChange={(e) => updateReg("modernVehicleCategories", e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Beschrijf welke moderne voertuigen zijn toegestaan.
              </p>
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
            <div className="ml-10 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="team-cost">Kosten teaminschrijving (€)</Label>
                <Input
                  id="team-cost"
                  type="number"
                  min="0"
                  placeholder="0 = gratis"
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
          )}
        </div>
      </div>
    </div>
  );
}
