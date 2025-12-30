import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import type { ReglementConfig } from "@/types/config";

interface ConfigFormProps {
  config: ReglementConfig;
  onChange: (config: ReglementConfig) => void;
}

export function ConfigForm({ config, onChange }: ConfigFormProps) {
  const updateConfig = <K extends keyof ReglementConfig>(
    section: K,
    updates: Partial<ReglementConfig[K]>
  ) => {
    onChange({
      ...config,
      [section]: { ...config[section], ...updates },
    });
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Reglement Configuratie</h2>

      <Accordion type="multiple" defaultValue={["event", "organization"]} className="w-full">
        {/* Event Section */}
        <AccordionItem value="event">
          <AccordionTrigger>Evenement</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="eventName">Naam evenement</Label>
                <Input
                  id="eventName"
                  value={config.event.name}
                  onChange={(e) => updateConfig("event", { name: e.target.value })}
                  placeholder="Naam van het evenement"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="orgName">Naam organisatie</Label>
                <Input
                  id="orgName"
                  value={config.event.organizationName}
                  onChange={(e) => updateConfig("event", { organizationName: e.target.value })}
                  placeholder="Naam van de organisatie"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Datum</Label>
                <Input
                  id="date"
                  type="date"
                  value={config.event.date}
                  onChange={(e) => updateConfig("event", { date: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Wedstrijdgebied</Label>
                <Input
                  id="area"
                  value={config.event.area}
                  onChange={(e) => updateConfig("event", { area: e.target.value })}
                  placeholder="bijv. Noord-Brabant"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="routeLength">Routelengte (km)</Label>
                <Input
                  id="routeLength"
                  type="number"
                  value={config.event.routeLengthKm || ""}
                  onChange={(e) => updateConfig("event", { routeLengthKm: Number(e.target.value) })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={config.event.website}
                  onChange={(e) => updateConfig("event", { website: e.target.value })}
                  placeholder="https://..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="approvalNumber">Goedkeuringsnummer</Label>
                <Input
                  id="approvalNumber"
                  value={config.event.approvalNumber}
                  onChange={(e) => updateConfig("event", { approvalNumber: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="approvalDate">Datum goedkeuring</Label>
                <Input
                  id="approvalDate"
                  type="date"
                  value={config.event.approvalDate}
                  onChange={(e) => updateConfig("event", { approvalDate: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Kampioenschappen</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="nrfKlassiek"
                      checked={config.event.championships.nrfKlassiek}
                      onCheckedChange={(checked) =>
                        updateConfig("event", {
                          championships: { ...config.event.championships, nrfKlassiek: !!checked },
                        })
                      }
                    />
                    <Label htmlFor="nrfKlassiek">NRF Klassiek</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="nrfKaartlezen"
                      checked={config.event.championships.nrfKaartlezen}
                      onCheckedChange={(checked) =>
                        updateConfig("event", {
                          championships: { ...config.event.championships, nrfKaartlezen: !!checked },
                        })
                      }
                    />
                    <Label htmlFor="nrfKaartlezen">NRF Kaartlezen</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="nkHistorisch"
                      checked={config.event.championships.nkHistorisch}
                      onCheckedChange={(checked) =>
                        updateConfig("event", {
                          championships: { ...config.event.championships, nkHistorisch: !!checked },
                        })
                      }
                    />
                    <Label htmlFor="nkHistorisch">NK Historisch</Label>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Organization Section */}
        <AccordionItem value="organization">
          <AccordionTrigger>Organisatie</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Wedstrijdsecretaris</Label>
                <Input
                  value={config.organization.secretary.name}
                  onChange={(e) =>
                    updateConfig("organization", {
                      secretary: { ...config.organization.secretary, name: e.target.value },
                    })
                  }
                  placeholder="Naam"
                />
                <Input
                  value={config.organization.secretary.email || ""}
                  onChange={(e) =>
                    updateConfig("organization", {
                      secretary: { ...config.organization.secretary, email: e.target.value },
                    })
                  }
                  placeholder="E-mail"
                />
                <Input
                  value={config.organization.secretary.phone || ""}
                  onChange={(e) =>
                    updateConfig("organization", {
                      secretary: { ...config.organization.secretary, phone: e.target.value },
                    })
                  }
                  placeholder="Telefoon"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="chairman">Voorzitter</Label>
                <Input
                  id="chairman"
                  value={config.organization.chairman}
                  onChange={(e) => updateConfig("organization", { chairman: e.target.value })}
                  placeholder="Naam voorzitter"
                />
              </div>

              <div className="space-y-2">
                <Label>Wedstrijdleider</Label>
                <Input
                  value={config.organization.raceDirector.name}
                  onChange={(e) =>
                    updateConfig("organization", {
                      raceDirector: { ...config.organization.raceDirector, name: e.target.value },
                    })
                  }
                  placeholder="Naam"
                />
                <Input
                  value={config.organization.raceDirector.phone || ""}
                  onChange={(e) =>
                    updateConfig("organization", {
                      raceDirector: { ...config.organization.raceDirector, phone: e.target.value },
                    })
                  }
                  placeholder="Telefoon"
                />
              </div>

              <div className="space-y-2">
                <Label>Hoofd calamiteiten</Label>
                <Input
                  value={config.organization.emergencyHead.name}
                  onChange={(e) =>
                    updateConfig("organization", {
                      emergencyHead: { ...config.organization.emergencyHead, name: e.target.value },
                    })
                  }
                  placeholder="Naam"
                />
                <Input
                  value={config.organization.emergencyHead.phone || ""}
                  onChange={(e) =>
                    updateConfig("organization", {
                      emergencyHead: { ...config.organization.emergencyHead, phone: e.target.value },
                    })
                  }
                  placeholder="Telefoon"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Locations Section */}
        <AccordionItem value="location">
          <AccordionTrigger>Locaties</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Startlocatie</Label>
                <Input
                  value={config.location.startLocation.name}
                  onChange={(e) =>
                    updateConfig("location", {
                      startLocation: { ...config.location.startLocation, name: e.target.value },
                    })
                  }
                  placeholder="Naam"
                />
                <Input
                  value={config.location.startLocation.address}
                  onChange={(e) =>
                    updateConfig("location", {
                      startLocation: { ...config.location.startLocation, address: e.target.value },
                    })
                  }
                  placeholder="Adres"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="startTime">Starttijd eerste equipe</Label>
                <Input
                  id="startTime"
                  type="time"
                  value={config.location.startTime}
                  onChange={(e) => updateConfig("location", { startTime: e.target.value })}
                />
              </div>

              <div className="flex items-center space-x-2 py-2">
                <Switch
                  id="sameAsStart"
                  checked={config.location.sameAsStart}
                  onCheckedChange={(checked) => updateConfig("location", { sameAsStart: checked })}
                />
                <Label htmlFor="sameAsStart">Finish op zelfde locatie als start</Label>
              </div>

              {!config.location.sameAsStart && (
                <div className="space-y-2">
                  <Label>Finishlocatie</Label>
                  <Input
                    value={config.location.finishLocation.name}
                    onChange={(e) =>
                      updateConfig("location", {
                        finishLocation: { ...config.location.finishLocation, name: e.target.value },
                      })
                    }
                    placeholder="Naam"
                  />
                  <Input
                    value={config.location.finishLocation.address}
                    onChange={(e) =>
                      updateConfig("location", {
                        finishLocation: { ...config.location.finishLocation, address: e.target.value },
                      })
                    }
                    placeholder="Adres"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="finishTime">Finishtijd eerste equipe</Label>
                <Input
                  id="finishTime"
                  type="time"
                  value={config.location.finishTime}
                  onChange={(e) => updateConfig("location", { finishTime: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prizeTime">Tijd prijsuitreiking</Label>
                <Input
                  id="prizeTime"
                  type="time"
                  value={config.location.prizeTime}
                  onChange={(e) => updateConfig("location", { prizeTime: e.target.value })}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Registration Section */}
        <AccordionItem value="registration">
          <AccordionTrigger>Inschrijving</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="openingDate">Opening inschrijving</Label>
                <Input
                  id="openingDate"
                  type="date"
                  value={config.registration.openingDate}
                  onChange={(e) => updateConfig("registration", { openingDate: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="closingDate">Sluiting inschrijving</Label>
                <Input
                  id="closingDate"
                  type="date"
                  value={config.registration.closingDate}
                  onChange={(e) => updateConfig("registration", { closingDate: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fee">Inschrijfgeld (EUR)</Label>
                <Input
                  id="fee"
                  type="number"
                  value={config.registration.fee || ""}
                  onChange={(e) => updateConfig("registration", { fee: Number(e.target.value) })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="iban">IBAN</Label>
                <Input
                  id="iban"
                  value={config.registration.iban}
                  onChange={(e) => updateConfig("registration", { iban: e.target.value })}
                  placeholder="NL00 BANK 0000 0000 00"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxParticipants">Maximum aantal equipes</Label>
                <Input
                  id="maxParticipants"
                  type="number"
                  value={config.registration.maxParticipants || ""}
                  onChange={(e) => updateConfig("registration", { maxParticipants: Number(e.target.value) })}
                />
              </div>

              <div className="flex items-center space-x-2 py-2">
                <Switch
                  id="allowModern"
                  checked={config.registration.allowModernVehicles}
                  onCheckedChange={(checked) => updateConfig("registration", { allowModernVehicles: checked })}
                />
                <Label htmlFor="allowModern">Moderne voertuigen toegestaan</Label>
              </div>

              <div className="flex items-center space-x-2 py-2">
                <Switch
                  id="teamReg"
                  checked={config.registration.teamRegistration.enabled}
                  onCheckedChange={(checked) =>
                    updateConfig("registration", {
                      teamRegistration: { ...config.registration.teamRegistration, enabled: checked },
                    })
                  }
                />
                <Label htmlFor="teamReg">Teaminschrijving mogelijk</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Classes Section */}
        <AccordionItem value="classes">
          <AccordionTrigger>Klassen</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Hoogste klasse</Label>
                <Input
                  value={config.classes.highest.name}
                  onChange={(e) =>
                    updateConfig("classes", {
                      highest: { ...config.classes.highest, name: e.target.value },
                    })
                  }
                  placeholder="bijv. Expert"
                />
              </div>

              <div className="space-y-2">
                <Label>Middelste klasse</Label>
                <Input
                  value={config.classes.middle.name}
                  onChange={(e) =>
                    updateConfig("classes", {
                      middle: { ...config.classes.middle, name: e.target.value },
                    })
                  }
                  placeholder="bijv. Sport"
                />
              </div>

              <div className="space-y-2">
                <Label>Laagste klasse</Label>
                <Input
                  value={config.classes.lowest.name}
                  onChange={(e) =>
                    updateConfig("classes", {
                      lowest: { ...config.classes.lowest, name: e.target.value },
                    })
                  }
                  placeholder="bijv. Toer"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Technical Section */}
        <AccordionItem value="technical">
          <AccordionTrigger>Technisch</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mapScales">Kaartschaal</Label>
                <Input
                  id="mapScales"
                  value={config.technical.mapScales}
                  onChange={(e) => updateConfig("technical", { mapScales: e.target.value })}
                  placeholder="bijv. 1:50.000"
                />
              </div>

              <div className="space-y-2">
                <Label>Type controles</Label>
                <Select
                  value={config.technical.controlType}
                  onValueChange={(value: 'physical' | 'virtual' | 'combined') =>
                    updateConfig("technical", { controlType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical">Fysiek</SelectItem>
                    <SelectItem value="virtual">Virtueel (app)</SelectItem>
                    <SelectItem value="combined">Gecombineerd</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {(config.technical.controlType === 'virtual' || config.technical.controlType === 'combined') && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="appName">App naam</Label>
                    <Input
                      id="appName"
                      value={config.technical.appName}
                      onChange={(e) => updateConfig("technical", { appName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appUrl">App handleiding URL</Label>
                    <Input
                      id="appUrl"
                      value={config.technical.appManualUrl}
                      onChange={(e) => updateConfig("technical", { appManualUrl: e.target.value })}
                    />
                  </div>
                </>
              )}

              <div className="flex items-center space-x-2 py-2">
                <Switch
                  id="routeArrows"
                  checked={config.technical.routeArrows.enabled}
                  onCheckedChange={(checked) =>
                    updateConfig("technical", {
                      routeArrows: { ...config.technical.routeArrows, enabled: checked },
                    })
                  }
                />
                <Label htmlFor="routeArrows">Routepijlen</Label>
              </div>

              {config.technical.routeArrows.enabled && (
                <div className="space-y-2 pl-4">
                  <Label htmlFor="arrowInscription">Opschrift routepijl</Label>
                  <Input
                    id="arrowInscription"
                    value={config.technical.routeArrows.inscription}
                    onChange={(e) =>
                      updateConfig("technical", {
                        routeArrows: { ...config.technical.routeArrows, inscription: e.target.value },
                      })
                    }
                  />
                </div>
              )}

              <div className="flex items-center space-x-2 py-2">
                <Switch
                  id="regularityTest"
                  checked={config.technical.regularityTest}
                  onCheckedChange={(checked) => updateConfig("technical", { regularityTest: checked })}
                />
                <Label htmlFor="regularityTest">Regelmatigheidsproef (RP)</Label>
              </div>

              <div className="flex items-center space-x-2 py-2">
                <Switch
                  id="skillTest"
                  checked={config.technical.skillTest}
                  onCheckedChange={(checked) => updateConfig("technical", { skillTest: checked })}
                />
                <Label htmlFor="skillTest">Behendigheidsproef</Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deviation">Afwijkingstolerantie (m)</Label>
                <Input
                  id="deviation"
                  type="number"
                  value={config.technical.deviationToleranceMeters}
                  onChange={(e) =>
                    updateConfig("technical", { deviationToleranceMeters: Number(e.target.value) })
                  }
                />
              </div>

              <div className="flex items-center space-x-2 py-2">
                <Switch
                  id="quietZones"
                  checked={config.technical.quietZones.unpavedRoadsAutomatic}
                  onCheckedChange={(checked) =>
                    updateConfig("technical", {
                      quietZones: { unpavedRoadsAutomatic: checked },
                    })
                  }
                />
                <Label htmlFor="quietZones">Onverharde wegen automatisch Q-zone</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Route Rules Section */}
        <AccordionItem value="routeRules">
          <AccordionTrigger>Routebepalingen</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Weggebruik</Label>
                <Select
                  value={config.routeRules.roadUsage}
                  onValueChange={(value: typeof config.routeRules.roadUsage) =>
                    updateConfig("routeRules", { roadUsage: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="once_one_direction">Eenmalig, één richting</SelectItem>
                    <SelectItem value="multiple_one_direction">Meerdere keren, één richting</SelectItem>
                    <SelectItem value="multiple_both_directions">Meerdere keren, beide richtingen</SelectItem>
                    <SelectItem value="per_system">Per systeem</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2 py-2">
                <Switch
                  id="trafficRules"
                  checked={config.routeRules.considerTrafficRules}
                  onCheckedChange={(checked) =>
                    updateConfig("routeRules", { considerTrafficRules: checked })
                  }
                />
                <Label htmlFor="trafficRules">Verkeersregels meewegen</Label>
              </div>

              <div className="flex items-center space-x-2 py-2">
                <Switch
                  id="deadEnd"
                  checked={config.routeRules.deadEndRoadsAllowed}
                  onCheckedChange={(checked) =>
                    updateConfig("routeRules", { deadEndRoadsAllowed: checked })
                  }
                />
                <Label htmlFor="deadEnd">Doodlopende wegen toegestaan</Label>
              </div>

              <div className="flex items-center space-x-2 py-2">
                <Switch
                  id="lowestDetour"
                  checked={config.routeRules.lowestClassMustDetour}
                  onCheckedChange={(checked) =>
                    updateConfig("routeRules", { lowestClassMustDetour: checked })
                  }
                />
                <Label htmlFor="lowestDetour">Laagste klasse moet ook omrijden</Label>
              </div>

              <div className="space-y-2">
                <Label>Legenda locatie</Label>
                <Select
                  value={config.routeRules.legendLocation}
                  onValueChange={(value: typeof config.routeRules.legendLocation) =>
                    updateConfig("routeRules", { legendLocation: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="appendix">Bijlage C</SelectItem>
                    <SelectItem value="routebook">In routeboek</SelectItem>
                    <SelectItem value="separate">Apart boekje</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Navigation Systems Section */}
        <AccordionItem value="navigation">
          <AccordionTrigger>Navigatiesystemen</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="ingetekendeLijn"
                  checked={config.navigationSystems.ingetekendeLijn}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", { ingetekendeLijn: !!checked })
                  }
                />
                <Label htmlFor="ingetekendeLijn">Ingetekende lijn</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="ingetekendeLijnBarricades"
                  checked={config.navigationSystems.ingetekendeLijnBarricades}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", { ingetekendeLijnBarricades: !!checked })
                  }
                />
                <Label htmlFor="ingetekendeLijnBarricades">Ingetekende lijn met barricades</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="grensbenadering"
                  checked={config.navigationSystems.grensbenadering}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", { grensbenadering: !!checked })
                  }
                />
                <Label htmlFor="grensbenadering">Grensbenadering</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pijlenKortste"
                  checked={config.navigationSystems.pijlenKortste.enabled}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", {
                      pijlenKortste: { ...config.navigationSystems.pijlenKortste, enabled: !!checked },
                    })
                  }
                />
                <Label htmlFor="pijlenKortste">Pijlen kortste route</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="blokkerendePijlen"
                  checked={config.navigationSystems.blokkerendePijlen.enabled}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", {
                      blokkerendePijlen: { ...config.navigationSystems.blokkerendePijlen, enabled: !!checked },
                    })
                  }
                />
                <Label htmlFor="blokkerendePijlen">Blokkerende pijlen</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="puntenKortste"
                  checked={config.navigationSystems.puntenKortste.enabled}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", {
                      puntenKortste: { ...config.navigationSystems.puntenKortste, enabled: !!checked },
                    })
                  }
                />
                <Label htmlFor="puntenKortste">Punten kortste route</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="blokkerendePunten"
                  checked={config.navigationSystems.blokkerendePunten.enabled}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", {
                      blokkerendePunten: { ...config.navigationSystems.blokkerendePunten, enabled: !!checked },
                    })
                  }
                />
                <Label htmlFor="blokkerendePunten">Blokkerende punten</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="kompasPunten"
                  checked={config.navigationSystems.kompasPunten}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", { kompasPunten: !!checked })
                  }
                />
                <Label htmlFor="kompasPunten">Kompaspunten</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="vakkenLangste"
                  checked={config.navigationSystems.vakkenLangste}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", { vakkenLangste: !!checked })
                  }
                />
                <Label htmlFor="vakkenLangste">Vakken langste route</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="tSystemen"
                  checked={config.navigationSystems.tSystemen}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", { tSystemen: !!checked })
                  }
                />
                <Label htmlFor="tSystemen">T-systemen</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bolPijl"
                  checked={config.navigationSystems.bolPijl}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", { bolPijl: !!checked })
                  }
                />
                <Label htmlFor="bolPijl">Bol-pijl</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="visgraat"
                  checked={config.navigationSystems.visgraat}
                  onCheckedChange={(checked) =>
                    updateConfig("navigationSystems", { visgraat: !!checked })
                  }
                />
                <Label htmlFor="visgraat">Visgraat</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Tie Breaker Section */}
        <AccordionItem value="tieBreaker">
          <AccordionTrigger>Ex-aequo regeling</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Primaire beslissing</Label>
                <Select
                  value={config.tieBreaker.primary}
                  onValueChange={(value: typeof config.tieBreaker.primary) =>
                    updateConfig("tieBreaker", { primary: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ex_aequo_control">Ex-aequo controle</SelectItem>
                    <SelectItem value="regularity_test">Regelmatigheidsproef</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {config.tieBreaker.primary === 'ex_aequo_control' && (
                <div className="space-y-2">
                  <Label htmlFor="controlName">Naam ex-aequo controle</Label>
                  <Input
                    id="controlName"
                    value={config.tieBreaker.controlName}
                    onChange={(e) => updateConfig("tieBreaker", { controlName: e.target.value })}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label>Secundaire beslissing</Label>
                <Select
                  value={config.tieBreaker.secondary}
                  onValueChange={(value: typeof config.tieBreaker.secondary) =>
                    updateConfig("tieBreaker", { secondary: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="heaviest_section">Zwaarste sectie</SelectItem>
                    <SelectItem value="oldest_car">Oudste auto</SelectItem>
                    <SelectItem value="draw">Loting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
