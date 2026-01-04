import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import type { ReglementConfig, ContactInfo } from "@/types/config";

interface OrganizationSectionProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

function ContactFields({
  label,
  contact,
  onChange,
  showEmail = false,
}: {
  label: string;
  contact: ContactInfo;
  onChange: (contact: ContactInfo) => void;
  showEmail?: boolean;
}) {
  return (
    <div className="space-y-3 rounded-lg border bg-muted/30 p-4">
      <h4 className="font-medium">{label}</h4>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label className="text-xs">Naam</Label>
          <Input
            value={contact.name}
            onChange={(e) => onChange({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Telefoon</Label>
          <Input
            value={contact.phone || ""}
            onChange={(e) => onChange({ ...contact, phone: e.target.value })}
          />
        </div>
        {showEmail && (
          <div className="space-y-1.5 sm:col-span-2">
            <Label className="text-xs">E-mail</Label>
            <Input
              type="email"
              value={contact.email || ""}
              onChange={(e) => onChange({ ...contact, email: e.target.value })}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function ListInput({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
}) {
  const addItem = () => onChange([...items, ""]);
  const removeItem = (index: number) => onChange(items.filter((_, i) => i !== index));
  const updateItem = (index: number, value: string) =>
    onChange(items.map((item, i) => (i === index ? value : item)));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label>{label}</Label>
        <Button type="button" variant="outline" size="sm" onClick={addItem}>
          <Plus className="mr-1 h-3 w-3" /> Toevoegen
        </Button>
      </div>
      <div className="space-y-2">
        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nog geen {label.toLowerCase()} toegevoegd.</p>
        ) : (
          items.map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: items are simple strings without unique IDs
            <div key={index} className="flex gap-2">
              <Input
                value={item}
                onChange={(e) => updateItem(index, e.target.value)}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeItem(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export function OrganizationSection({ config, onChange }: OrganizationSectionProps) {
  const updateOrg = <K extends keyof ReglementConfig["organization"]>(
    key: K,
    value: ReglementConfig["organization"][K]
  ) => {
    onChange({
      ...config,
      organization: { ...config.organization, [key]: value },
    });
  };

  return (
    <div className="space-y-8">
      {/* Section intro */}
      <div>
        <h2 className="text-2xl font-semibold">Organisatie</h2>
        <p className="mt-2 text-muted-foreground">
          Gegevens van het organisatiecomité en de functionarissen die verantwoordelijk zijn voor
          de wedstrijd. Deze informatie is belangrijk voor deelnemers om contact op te kunnen nemen.
        </p>
      </div>

      <Separator />

      {/* Secretary - most important */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Wedstrijdsecretariaat</h3>
          <p className="text-sm text-muted-foreground">
            Het wedstrijdsecretariaat is het eerste aanspreekpunt voor deelnemers vóór het evenement.
          </p>
        </div>
        <ContactFields
          label="Wedstrijdsecretaris"
          contact={config.organization.secretary}
          onChange={(c) => updateOrg("secretary", c)}
          showEmail
        />
      </div>

      <Separator />

      {/* Committee */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Organisatiecomité</h3>
          <p className="text-sm text-muted-foreground">
            De mensen achter de organisatie van het evenement.
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="chairman">Voorzitter</Label>
          <Input
            id="chairman"
            value={config.organization.chairman}
            onChange={(e) => updateOrg("chairman", e.target.value)}
          />
        </div>
        <ListInput
          label="Commissieleden"
          items={config.organization.committeeMembers}
          onChange={(items) => updateOrg("committeeMembers", items)}
        />
      </div>

      <Separator />

      {/* Route team */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Routeteam</h3>
          <p className="text-sm text-muted-foreground">
            De uitzetter maakt de route, de narijder controleert of alles klopt.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <ListInput
            label="Uitzetter(s)"
            items={config.organization.routeSetters}
            onChange={(items) => updateOrg("routeSetters", items)}
          />
          <ListInput
            label="Narijder(s)"
            items={config.organization.routeCheckers}
            onChange={(items) => updateOrg("routeCheckers", items)}
          />
        </div>
      </div>

      <Separator />

      {/* Officials */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Functionarissen tijdens de wedstrijd</h3>
          <p className="text-sm text-muted-foreground">
            Deze personen zijn tijdens het evenement bereikbaar voor deelnemers.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <ContactFields
            label="Wedstrijdleider"
            contact={config.organization.raceDirector}
            onChange={(c) => updateOrg("raceDirector", c)}
          />
          <ContactFields
            label="Hoofd Calamiteitenteam"
            contact={config.organization.emergencyHead}
            onChange={(c) => updateOrg("emergencyHead", c)}
          />
          <ContactFields
            label="Contactpersoon tijdens rit"
            contact={config.organization.contactPerson}
            onChange={(c) => updateOrg("contactPerson", c)}
          />
          <ContactFields
            label="Serviceteam"
            contact={config.organization.serviceTeam || { name: "", phone: "" }}
            onChange={(c) => updateOrg("serviceTeam", c)}
          />
        </div>
      </div>
    </div>
  );
}
