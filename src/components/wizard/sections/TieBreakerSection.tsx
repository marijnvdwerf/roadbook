import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SelectableCard } from "../SelectableCard";
import { Flag, Timer, Scale, Car, Dices } from "lucide-react";
import type { ReglementConfig } from "@/types/config";

interface TieBreakerSectionProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

export function TieBreakerSection({ config, onChange }: TieBreakerSectionProps) {
  const updateTieBreaker = <K extends keyof ReglementConfig["tieBreaker"]>(
    key: K,
    value: ReglementConfig["tieBreaker"][K]
  ) => {
    onChange({
      ...config,
      tieBreaker: { ...config.tieBreaker, [key]: value },
    });
  };

  return (
    <div className="space-y-8">
      {/* Section intro */}
      <div>
        <h2 className="text-2xl font-semibold">Ex Aequo</h2>
        <p className="mt-2 text-muted-foreground">
          Wat gebeurt er als twee of meer equipes exact evenveel strafpunten hebben? Hier bepaal je
          hoe de rangschikking wordt besloten bij gelijke stand.
        </p>
      </div>

      <Separator />

      {/* Primary tie-breaker */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Primaire beslissingsmethode</h3>
          <p className="text-sm text-muted-foreground">
            De eerste methode die wordt toegepast bij gelijke stand.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectableCard
            selected={config.tieBreaker.primary === "ex_aequo_control"}
            onToggle={() => updateTieBreaker("primary", "ex_aequo_control")}
            icon={<Flag className="h-10 w-10" />}
            title="Ex-aequo controle"
            description="Speciaal aangewezen controle bepaalt de rangschikking"
          />
          <SelectableCard
            selected={config.tieBreaker.primary === "regularity_test"}
            onToggle={() => updateTieBreaker("primary", "regularity_test")}
            icon={<Timer className="h-10 w-10" />}
            title="Regelmatigheidsproef"
            description="Uitslag van de RP bepaalt de rangschikking"
          />
        </div>

        {config.tieBreaker.primary === "ex_aequo_control" && (
          <div className="ml-4 border-l-2 border-primary/30 pl-4">
            <div className="space-y-2">
              <Label htmlFor="control-name">Naam/nummer van de ex-aequo controle</Label>
              <Input
                id="control-name"
                placeholder="bijv. RC12 of 'De Molen'"
                value={config.tieBreaker.controlName}
                onChange={(e) => updateTieBreaker("controlName", e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Deze specifieke controle wordt gebruikt als beslissende factor. De equipe met de
                minste strafpunten op deze controle wint.
              </p>
            </div>
          </div>
        )}
      </div>

      <Separator />

      {/* Secondary tie-breaker */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Secundaire beslissingsmethode</h3>
          <p className="text-sm text-muted-foreground">
            Als de primaire methode geen verschil maakt, wordt deze methode toegepast.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <SelectableCard
            selected={config.tieBreaker.secondary === "heaviest_section"}
            onToggle={() => updateTieBreaker("secondary", "heaviest_section")}
            icon={<Scale className="h-10 w-10" />}
            title="Zwaarste traject"
            description="Minste fouten in het moeilijkste deel wint"
          />
          <SelectableCard
            selected={config.tieBreaker.secondary === "oldest_car"}
            onToggle={() => updateTieBreaker("secondary", "oldest_car")}
            icon={<Car className="h-10 w-10" />}
            title="Oudste auto"
            description="De equipe met de oudste auto wint"
          />
          <SelectableCard
            selected={config.tieBreaker.secondary === "draw"}
            onToggle={() => updateTieBreaker("secondary", "draw")}
            icon={<Dices className="h-10 w-10" />}
            title="Loting"
            description="De uitslag wordt bepaald door loting"
          />
        </div>
      </div>

      {/* Info box */}
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm dark:border-amber-900 dark:bg-amber-950">
        <p className="font-medium text-amber-900 dark:text-amber-100">Hoe werkt ex-aequo?</p>
        <ol className="mt-2 list-inside list-decimal space-y-1 text-amber-800 dark:text-amber-200">
          <li>Eerst worden alle strafpunten opgeteld</li>
          <li>Bij gelijke stand: primaire methode toepassen</li>
          <li>Nog steeds gelijk: secundaire methode toepassen</li>
          <li>Bij loting: de wedstrijdleider trekt onder toezicht</li>
        </ol>
      </div>
    </div>
  );
}
