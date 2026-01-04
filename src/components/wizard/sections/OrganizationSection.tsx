import type { KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import type { ReglementConfig, ContactInfo } from "@/types/config";

interface OrganizationSectionProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

function focusNextInput(e: KeyboardEvent<HTMLInputElement>) {
  if (e.key !== "Enter") return;
  e.preventDefault();
  const form = e.currentTarget.closest("form") || document.body;
  const inputs = Array.from(form.querySelectorAll<HTMLInputElement>("input:not([disabled])"));
  const currentIndex = inputs.indexOf(e.currentTarget);
  const nextInput = inputs[currentIndex + 1];
  nextInput?.focus();
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
            enterKeyHint="next"
            onKeyDown={focusNextInput}
            value={contact.name}
            onChange={(e) => onChange({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Telefoon</Label>
          <Input
            enterKeyHint={showEmail ? "next" : "done"}
            onKeyDown={focusNextInput}
            value={contact.phone || ""}
            onChange={(e) => onChange({ ...contact, phone: e.target.value })}
          />
        </div>
        {showEmail && (
          <div className="space-y-1.5 sm:col-span-2">
            <Label className="text-xs">E-mail</Label>
            <Input
              type="email"
              enterKeyHint="done"
              onKeyDown={focusNextInput}
              value={contact.email || ""}
              onChange={(e) => onChange({ ...contact, email: e.target.value })}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function NamesInput({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
}) {
  // Ensure there's always at least one input
  const displayItems = items.length === 0 ? [""] :
    items[items.length - 1] !== "" ? [...items, ""] : items;

  const updateItem = (index: number, value: string) => {
    const newItems = [...displayItems];
    newItems[index] = value;
    onChange(newItems);
  };

  const removeItem = (index: number) => {
    onChange(displayItems.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="space-y-2">
        {displayItems.map((item, index) => (
          <div key={index} className="relative">
            <Input
              enterKeyHint="next"
              onKeyDown={focusNextInput}
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
              className="pr-9"
            />
            <button
              type="button"
              onClick={() => removeItem(index)}
              disabled={index === displayItems.length - 1}
              className="absolute right-0 top-0 h-9 w-9 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:invisible"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
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
            enterKeyHint="next"
            onKeyDown={focusNextInput}
            value={config.organization.chairman}
            onChange={(e) => updateOrg("chairman", e.target.value)}
          />
        </div>
        <NamesInput
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
        <NamesInput
          label="Uitzetter(s)"
          items={config.organization.routeSetters}
          onChange={(items) => updateOrg("routeSetters", items)}
        />
        <NamesInput
          label="Narijder(s)"
          items={config.organization.routeCheckers}
          onChange={(items) => updateOrg("routeCheckers", items)}
        />
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
