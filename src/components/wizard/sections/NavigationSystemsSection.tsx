import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SelectableCard } from "../SelectableCard";
import {
  IngetekendeLijnIcon,
  BarilIcon,
  GrensbenaderingIcon,
  PijlenIcon,
  BlokkerendePijlenIcon,
  PuntenIcon,
  BlokkerendePuntenIcon,
  KompasPuntenIcon,
  PuntenOnbekendIcon,
  PuntenVrijeRouteIcon,
  VakkenIcon,
  TSystemenIcon,
  BolPijlIcon,
  VisgraatIcon,
  RoutebeschrijvingIcon,
  PijlenKleurbeperkingIcon,
  PijlenPuntenGecombineerdIcon,
} from "../NavigationIcons";
import type { ReglementConfig } from "@/types/config";

interface NavigationSystemsSectionProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

export function NavigationSystemsSection({ config, onChange }: NavigationSystemsSectionProps) {
  const ns = config.navigationSystems;

  const updateNS = <K extends keyof ReglementConfig["navigationSystems"]>(
    key: K,
    value: ReglementConfig["navigationSystems"][K]
  ) => {
    onChange({
      ...config,
      navigationSystems: { ...config.navigationSystems, [key]: value },
    });
  };

  const toggleSimple = (key: keyof typeof ns) => {
    if (typeof ns[key] === "boolean") {
      updateNS(key, !ns[key] as any);
    }
  };

  return (
    <div className="space-y-8">
      {/* Section intro */}
      <div>
        <h2 className="text-2xl font-semibold">Navigatiesystemen</h2>
        <p className="mt-2 text-muted-foreground">
          Welke navigatiesystemen worden in het evenement gebruikt? Selecteer alle systemen die
          voorkomen. Elk systeem heeft zijn eigen regels voor het construeren van de route.
        </p>
      </div>

      <Separator />

      {/* Line-based systems */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Lijn-gebaseerde systemen</h3>
          <p className="text-sm text-muted-foreground">
            Systemen waarbij je een lijn of grens op de kaart volgt.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SelectableCard
            selected={ns.ingetekendeLijn}
            onToggle={() => toggleSimple("ingetekendeLijn")}
            icon={<IngetekendeLijnIcon />}
            title="Ingetekende Lijn"
            description="Volg de lijn op de kaart zo nauwkeurig mogelijk"
          />
          <SelectableCard
            selected={ns.ingetekendeLijnBarricades}
            onToggle={() => toggleSimple("ingetekendeLijnBarricades")}
            icon={<BarilIcon />}
            title="BARIL"
            description="Ingetekende lijn met barricades om te omzeilen"
          />
          <SelectableCard
            selected={ns.grensbenadering}
            onToggle={() => toggleSimple("grensbenadering")}
            icon={<GrensbenaderingIcon />}
            title="Grensbenadering"
            description="Rijd zo dicht mogelijk langs een grens"
          />
        </div>
      </div>

      <Separator />

      {/* Arrow systems */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Pijlsystemen</h3>
          <p className="text-sm text-muted-foreground">
            Systemen met pijlen die de route aangeven. Vaak moet de kortste route worden gevonden.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SelectableCard
            selected={ns.pijlenKortste.enabled}
            onToggle={() =>
              updateNS("pijlenKortste", {
                ...ns.pijlenKortste,
                enabled: !ns.pijlenKortste.enabled,
              })
            }
            icon={<PijlenIcon />}
            title="Pijlen kortste"
            description="Rijd de kortste route via de pijlen"
          >
            {ns.pijlenKortste.enabled && (
              <label className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={ns.pijlenKortste.secondShortest}
                  onChange={(e) =>
                    updateNS("pijlenKortste", {
                      ...ns.pijlenKortste,
                      secondShortest: e.target.checked,
                    })
                  }
                  className="rounded border-gray-300"
                />
                Op één na kortste
              </label>
            )}
          </SelectableCard>

          <SelectableCard
            selected={ns.blokkerendePijlen.enabled}
            onToggle={() =>
              updateNS("blokkerendePijlen", {
                ...ns.blokkerendePijlen,
                enabled: !ns.blokkerendePijlen.enabled,
              })
            }
            icon={<BlokkerendePijlenIcon />}
            title="Blokkerende pijlen"
            description="Elke pijl blokkeert de weg na passage"
          >
            {ns.blokkerendePijlen.enabled && (
              <label className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={ns.blokkerendePijlen.secondShortest}
                  onChange={(e) =>
                    updateNS("blokkerendePijlen", {
                      ...ns.blokkerendePijlen,
                      secondShortest: e.target.checked,
                    })
                  }
                  className="rounded border-gray-300"
                />
                Op één na kortste
              </label>
            )}
          </SelectableCard>

          <SelectableCard
            selected={ns.pijlenBarricades}
            onToggle={() => toggleSimple("pijlenBarricades")}
            icon={<PijlenIcon />}
            title="Pijlen met barricades"
            description="Pijlen kortste route met barricades"
          />

          <SelectableCard
            selected={ns.pijlenKleurbeperking.enabled}
            onToggle={() =>
              updateNS("pijlenKleurbeperking", {
                ...ns.pijlenKleurbeperking,
                enabled: !ns.pijlenKleurbeperking.enabled,
              })
            }
            icon={<PijlenKleurbeperkingIcon />}
            title="Pijlen kleurbeperking"
            description="Minimaliseer wegen van een bepaalde kleur"
          >
            {ns.pijlenKleurbeperking.enabled && (
              <div className="space-y-2 text-xs">
                <input
                  type="text"
                  placeholder="Kleur onder pijl"
                  value={ns.pijlenKleurbeperking.color1}
                  onChange={(e) =>
                    updateNS("pijlenKleurbeperking", {
                      ...ns.pijlenKleurbeperking,
                      color1: e.target.value,
                    })
                  }
                  className="w-full rounded border px-2 py-1"
                />
                <input
                  type="text"
                  placeholder="Te vermijden kleur"
                  value={ns.pijlenKleurbeperking.color2}
                  onChange={(e) =>
                    updateNS("pijlenKleurbeperking", {
                      ...ns.pijlenKleurbeperking,
                      color2: e.target.value,
                    })
                  }
                  className="w-full rounded border px-2 py-1"
                />
              </div>
            )}
          </SelectableCard>
        </div>
      </div>

      <Separator />

      {/* Point systems */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Puntensystemen</h3>
          <p className="text-sm text-muted-foreground">
            Systemen met punten (stippen) die bezocht moeten worden.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SelectableCard
            selected={ns.puntenKortste.enabled}
            onToggle={() =>
              updateNS("puntenKortste", {
                ...ns.puntenKortste,
                enabled: !ns.puntenKortste.enabled,
              })
            }
            icon={<PuntenIcon />}
            title="Punten kortste"
            description="Rijd de kortste route via de punten"
          >
            {ns.puntenKortste.enabled && (
              <label className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={ns.puntenKortste.secondShortest}
                  onChange={(e) =>
                    updateNS("puntenKortste", {
                      ...ns.puntenKortste,
                      secondShortest: e.target.checked,
                    })
                  }
                  className="rounded border-gray-300"
                />
                Op één na kortste
              </label>
            )}
          </SelectableCard>

          <SelectableCard
            selected={ns.blokkerendePunten.enabled}
            onToggle={() =>
              updateNS("blokkerendePunten", {
                ...ns.blokkerendePunten,
                enabled: !ns.blokkerendePunten.enabled,
              })
            }
            icon={<BlokkerendePuntenIcon />}
            title="Blokkerende punten"
            description="Elk punt blokkeert na passage"
          >
            {ns.blokkerendePunten.enabled && (
              <label className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={ns.blokkerendePunten.secondShortest}
                  onChange={(e) =>
                    updateNS("blokkerendePunten", {
                      ...ns.blokkerendePunten,
                      secondShortest: e.target.checked,
                    })
                  }
                  className="rounded border-gray-300"
                />
                Op één na kortste
              </label>
            )}
          </SelectableCard>

          <SelectableCard
            selected={ns.kompasPunten}
            onToggle={() => toggleSimple("kompasPunten")}
            icon={<KompasPuntenIcon />}
            title="Kompaspunten"
            description="Punten met aankomst-/vertrekrichting"
          />

          <SelectableCard
            selected={ns.puntenOnbekend}
            onToggle={() => toggleSimple("puntenOnbekend")}
            icon={<PuntenOnbekendIcon />}
            title="Punten onbekend"
            description="Volgende punt pas bekend bij controle"
          />

          <SelectableCard
            selected={ns.puntenVrijeRoute.enabled}
            onToggle={() =>
              updateNS("puntenVrijeRoute", {
                ...ns.puntenVrijeRoute,
                enabled: !ns.puntenVrijeRoute.enabled,
              })
            }
            icon={<PuntenVrijeRouteIcon />}
            title="Punten vrije route"
            description="Vrij kiezen hoe je bij het punt komt"
          >
            {ns.puntenVrijeRoute.enabled && (
              <div className="flex items-center gap-2 text-xs">
                <span>Radius:</span>
                <input
                  type="number"
                  min="0"
                  step="10"
                  value={ns.puntenVrijeRoute.radius}
                  onChange={(e) =>
                    updateNS("puntenVrijeRoute", {
                      ...ns.puntenVrijeRoute,
                      radius: Number(e.target.value),
                    })
                  }
                  className="w-20 rounded border px-2 py-1"
                />
                <span>m</span>
              </div>
            )}
          </SelectableCard>
        </div>
      </div>

      <Separator />

      {/* Other systems */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Overige systemen</h3>
          <p className="text-sm text-muted-foreground">
            Andere navigatiesystemen met specifieke regels.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SelectableCard
            selected={ns.vakkenLangste}
            onToggle={() => toggleSimple("vakkenLangste")}
            icon={<VakkenIcon />}
            title="Vakken langste"
            description="Rijd de langste route binnen de vakken"
          />

          <SelectableCard
            selected={ns.tSystemen}
            onToggle={() => toggleSimple("tSystemen")}
            icon={<TSystemenIcon />}
            title="T-systemen"
            description="Rijd alle drie de poten van een T-kruising"
          />

          <SelectableCard
            selected={ns.bolPijl}
            onToggle={() => toggleSimple("bolPijl")}
            icon={<BolPijlIcon />}
            title="Bol-pijl"
            description="Van startpunt (bol) naar eindpunt (pijl)"
          />

          <SelectableCard
            selected={ns.visgraat}
            onToggle={() => toggleSimple("visgraat")}
            icon={<VisgraatIcon />}
            title="Visgraat"
            description="Streepjes geven wegen aan die je NIET inrijdt"
          />

          <SelectableCard
            selected={ns.routebeschrijvingOpKaart}
            onToggle={() => toggleSimple("routebeschrijvingOpKaart")}
            icon={<RoutebeschrijvingIcon />}
            title="Routebeschrijving"
            description="Tekstuele beschrijving op de kaart"
          />

          <SelectableCard
            selected={ns.pijlenEnPuntenGecombineerd.enabled}
            onToggle={() =>
              updateNS("pijlenEnPuntenGecombineerd", {
                ...ns.pijlenEnPuntenGecombineerd,
                enabled: !ns.pijlenEnPuntenGecombineerd.enabled,
              })
            }
            icon={<PijlenPuntenGecombineerdIcon />}
            title="Pijlen & punten"
            description="Rood=kortste, Wit=2e kortste, Groen=vrij"
          >
            {ns.pijlenEnPuntenGecombineerd.enabled && (
              <div className="flex items-center gap-2 text-xs">
                <span>Groene radius:</span>
                <input
                  type="number"
                  min="0"
                  step="10"
                  value={ns.pijlenEnPuntenGecombineerd.radius}
                  onChange={(e) =>
                    updateNS("pijlenEnPuntenGecombineerd", {
                      ...ns.pijlenEnPuntenGecombineerd,
                      radius: Number(e.target.value),
                    })
                  }
                  className="w-20 rounded border px-2 py-1"
                />
                <span>m</span>
              </div>
            )}
          </SelectableCard>
        </div>
      </div>

      {/* Summary */}
      <div className="rounded-lg border bg-muted/50 p-4">
        <p className="text-sm font-medium">
          {(() => {
            const count = [
              ns.ingetekendeLijn,
              ns.ingetekendeLijnBarricades,
              ns.grensbenadering,
              ns.pijlenKortste.enabled,
              ns.blokkerendePijlen.enabled,
              ns.pijlenBarricades,
              ns.pijlenKleurbeperking.enabled,
              ns.puntenKortste.enabled,
              ns.blokkerendePunten.enabled,
              ns.kompasPunten,
              ns.puntenOnbekend,
              ns.puntenVrijeRoute.enabled,
              ns.vakkenLangste,
              ns.tSystemen,
              ns.bolPijl,
              ns.visgraat,
              ns.routebeschrijvingOpKaart,
              ns.pijlenEnPuntenGecombineerd.enabled,
            ].filter(Boolean).length;
            return `${count} navigatiesysteem${count === 1 ? "" : "en"} geselecteerd`;
          })()}
        </p>
        <p className="text-xs text-muted-foreground">
          Selecteer minimaal één systeem. De meeste evenementen gebruiken 3-8 verschillende systemen.
        </p>
      </div>
    </div>
  );
}
