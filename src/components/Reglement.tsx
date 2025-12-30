import type { ReglementConfig } from '@/types/config';

interface ReglementProps {
  config: ReglementConfig;
}

export function Reglement({ config }: ReglementProps) {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '[datum]';
    return new Date(dateStr).toLocaleDateString('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  };

  const getControlTypeText = () => {
    switch (config.technical.controlType) {
      case 'physical':
        return 'fysieke controles';
      case 'virtual':
        return 'virtuele controles via de app';
      case 'combined':
        return 'fysieke en virtuele controles';
      default:
        return 'controles';
    }
  };

  const getRoadUsageText = () => {
    switch (config.routeRules.roadUsage) {
      case 'once_one_direction':
        return 'Elke weg mag slechts eenmaal en in een richting worden bereden.';
      case 'multiple_one_direction':
        return 'Wegen mogen meerdere malen worden bereden, maar steeds in dezelfde richting.';
      case 'multiple_both_directions':
        return 'Wegen mogen meerdere malen en in beide richtingen worden bereden.';
      case 'per_system':
        return 'Het weggebruik wordt per navigatiesysteem aangegeven.';
      default:
        return '';
    }
  };

  return (
    <article className="max-w-4xl mx-auto bg-white text-black font-serif print:max-w-none print:mx-0">
      {/* Print Styles */}
      <style>{`
        @media print {
          .reglement-document {
            font-size: 11pt;
            line-height: 1.4;
          }
          .page-break {
            page-break-before: always;
          }
          h1 { font-size: 18pt; }
          h2 { font-size: 14pt; }
          h3 { font-size: 12pt; }
        }
      `}</style>

      <div className="reglement-document p-8 print:p-0">
        {/* Header */}
        <header className="text-center mb-12 border-b-2 border-black pb-8">
          <h1 className="text-3xl font-bold uppercase tracking-wide mb-4">
            Bijzonder Reglement
          </h1>
          <h2 className="text-2xl font-semibold mb-2">
            {config.event.name || '[Naam Evenement]'}
          </h2>
          <p className="text-lg mb-2">{formatDate(config.event.date)}</p>
          <p className="text-base text-gray-700">
            Georganiseerd door {config.event.organizationName || '[Organisatie]'}
          </p>

          {/* Championships */}
          {(config.event.championships.nrfKlassiek ||
            config.event.championships.nrfKaartlezen ||
            config.event.championships.nkHistorisch) && (
            <div className="mt-4 space-y-1">
              {config.event.championships.nrfKlassiek && (
                <p className="text-sm font-medium">Tellend voor het NRF Klassiek Kampioenschap</p>
              )}
              {config.event.championships.nrfKaartlezen && (
                <p className="text-sm font-medium">Tellend voor het NRF Kaartlezen Kampioenschap</p>
              )}
              {config.event.championships.nkHistorisch && (
                <p className="text-sm font-medium">Tellend voor het NK Historisch Rally</p>
              )}
            </div>
          )}

          <p className="mt-4 text-sm">
            Goedkeuringsnummer: {config.event.approvalNumber || '[nummer]'}
          </p>
          <p className="text-sm">
            Goedgekeurd d.d. {formatDate(config.event.approvalDate)}
          </p>
        </header>

        {/* Article 1: Organization */}
        <Section title="Artikel 1: Organisatie">
          <p className="mb-4">
            De {config.event.name || '[Naam Evenement]'} wordt georganiseerd door{' '}
            {config.event.organizationName || '[Organisatie]'}.
          </p>

          <h4 className="font-semibold mt-4 mb-2">1.1 Organisatiecomite</h4>
          <table className="w-full mb-4">
            <tbody>
              <TableRow label="Voorzitter" value={config.organization.chairman} />
              <TableRow label="Secretaris" value={config.organization.secretary.name} />
              {config.organization.secretary.email && (
                <TableRow label="E-mail" value={config.organization.secretary.email} />
              )}
              {config.organization.secretary.phone && (
                <TableRow label="Telefoon" value={config.organization.secretary.phone} />
              )}
            </tbody>
          </table>

          {config.organization.committeeMembers.length > 0 && (
            <>
              <h4 className="font-semibold mt-4 mb-2">1.2 Commissieleden</h4>
              <ul className="list-disc list-inside mb-4">
                {config.organization.committeeMembers.map((member, i) => (
                  <li key={i}>{member}</li>
                ))}
              </ul>
            </>
          )}

          <h4 className="font-semibold mt-4 mb-2">1.3 Wedstrijdleider</h4>
          <table className="w-full mb-4">
            <tbody>
              <TableRow label="Naam" value={config.organization.raceDirector.name} />
              {config.organization.raceDirector.phone && (
                <TableRow label="Telefoon" value={config.organization.raceDirector.phone} />
              )}
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-2">1.4 Routeontwerpers</h4>
          <ul className="list-disc list-inside mb-4">
            {config.organization.routeSetters.length > 0 ? (
              config.organization.routeSetters.map((setter, i) => (
                <li key={i}>{setter}</li>
              ))
            ) : (
              <li>[Routeontwerper]</li>
            )}
          </ul>

          {config.organization.routeCheckers.length > 0 && (
            <>
              <h4 className="font-semibold mt-4 mb-2">1.5 Routecontroleurs</h4>
              <ul className="list-disc list-inside mb-4">
                {config.organization.routeCheckers.map((checker, i) => (
                  <li key={i}>{checker}</li>
                ))}
              </ul>
            </>
          )}

          <h4 className="font-semibold mt-4 mb-2">1.6 Hoofd Hulpdiensten</h4>
          <table className="w-full mb-4">
            <tbody>
              <TableRow label="Naam" value={config.organization.emergencyHead.name} />
              {config.organization.emergencyHead.phone && (
                <TableRow label="Telefoon" value={config.organization.emergencyHead.phone} />
              )}
            </tbody>
          </table>
        </Section>

        {/* Article 2: Event Details */}
        <Section title="Artikel 2: Evenement">
          <h4 className="font-semibold mt-4 mb-2">2.1 Algemeen</h4>
          <table className="w-full mb-4">
            <tbody>
              <TableRow label="Datum" value={formatDate(config.event.date)} />
              <TableRow label="Regio" value={config.event.area} />
              <TableRow label="Routelengte" value={`ca. ${config.event.routeLengthKm} km`} />
              <TableRow label="Website" value={config.event.website} />
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-2">2.2 Start</h4>
          <table className="w-full mb-4">
            <tbody>
              <TableRow label="Locatie" value={config.location.startLocation.name} />
              <TableRow label="Adres" value={config.location.startLocation.address} />
              <TableRow label="Starttijd" value={config.location.startTime || '[tijd]'} />
              <TableRow label="Publicatie routeboek" value={config.location.publicationTime || '[tijd]'} />
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-2">2.3 Finish</h4>
          <table className="w-full mb-4">
            <tbody>
              {config.location.sameAsStart ? (
                <TableRow label="Locatie" value="Gelijk aan startlocatie" />
              ) : (
                <>
                  <TableRow label="Locatie" value={config.location.finishLocation.name} />
                  <TableRow label="Adres" value={config.location.finishLocation.address} />
                </>
              )}
              <TableRow label="Verwachte finishtijd" value={config.location.finishTime || '[tijd]'} />
              <TableRow label="Prijsuitreiking" value={config.location.prizeTime || '[tijd]'} />
            </tbody>
          </table>
        </Section>

        {/* Article 3: Registration */}
        <Section title="Artikel 3: Inschrijving">
          <h4 className="font-semibold mt-4 mb-2">3.1 Inschrijfperiode</h4>
          <table className="w-full mb-4">
            <tbody>
              <TableRow label="Opening inschrijving" value={formatDate(config.registration.openingDate)} />
              <TableRow label="Sluiting inschrijving" value={formatDate(config.registration.closingDate)} />
              <TableRow label="Publicatie deelnemerslijst" value={formatDate(config.registration.publicationDate)} />
              <TableRow label="Datum acceptatie" value={formatDate(config.registration.acceptanceDate)} />
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-2">3.2 Inschrijfgeld</h4>
          <p className="mb-2">
            Het inschrijfgeld bedraagt {formatCurrency(config.registration.fee)} per equipe.
          </p>
          <p className="mb-4">
            Betaling dient te geschieden op rekeningnummer {config.registration.iban || '[IBAN]'}.
          </p>

          <h4 className="font-semibold mt-4 mb-2">3.3 Maximum aantal deelnemers</h4>
          <p className="mb-4">
            Het maximum aantal deelnemende equipes is {config.registration.maxParticipants || '[aantal]'}.
          </p>

          {config.registration.allowModernVehicles && (
            <>
              <h4 className="font-semibold mt-4 mb-2">3.4 Moderne voertuigen</h4>
              <p className="mb-4">
                Naast historische voertuigen zijn ook moderne voertuigen toegelaten.
                {config.registration.modernVehicleCategories && (
                  <> Toegestane categorieen: {config.registration.modernVehicleCategories}.</>
                )}
              </p>
            </>
          )}

          {config.registration.teamRegistration.enabled && (
            <>
              <h4 className="font-semibold mt-4 mb-2">3.5 Teamregistratie</h4>
              <p className="mb-4">
                Deelname aan het teamklassement is mogelijk.
                {config.registration.teamRegistration.cost > 0 && (
                  <> De kosten hiervoor bedragen {formatCurrency(config.registration.teamRegistration.cost)}.</>
                )}
                {config.registration.teamRegistration.method === 'website' ? (
                  <> Registratie geschiedt via de website.</>
                ) : (
                  <> Registratie geschiedt ter plaatse.</>
                )}
              </p>
            </>
          )}
        </Section>

        {/* Article 4: Classes */}
        <Section title="Artikel 4: Klassen">
          <p className="mb-4">
            De rally wordt verreden in drie klassen met oplopende moeilijkheidsgraad:
          </p>

          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left py-2 pr-4">Klasse</th>
                <th className="text-left py-2">Omschrijving</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-2 pr-4 font-medium">{config.classes.lowest.name}</td>
                <td className="py-2">{config.classes.lowest.description || 'Instapklasse'}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 pr-4 font-medium">{config.classes.middle.name}</td>
                <td className="py-2">{config.classes.middle.description || 'Gevorderd'}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 pr-4 font-medium">{config.classes.highest.name}</td>
                <td className="py-2">{config.classes.highest.description || 'Expert'}</td>
              </tr>
            </tbody>
          </table>
        </Section>

        {/* Article 5: Navigation Systems */}
        <Section title="Artikel 5: Navigatiesystemen">
          <h4 className="font-semibold mt-4 mb-2">5.1 Kaartmateriaal</h4>
          <p className="mb-4">
            Tijdens de rally wordt gebruik gemaakt van topografische kaarten met schaal {config.technical.mapScales}.
          </p>

          <h4 className="font-semibold mt-4 mb-2">5.2 Toegepaste navigatiesystemen</h4>
          <p className="mb-2">De volgende navigatiesystemen kunnen worden toegepast:</p>

          <NavigationSystemsList config={config} />

          {config.routeRules.legendLocation !== 'appendix' && (
            <p className="mt-4 mb-4">
              De legenda wordt {config.routeRules.legendLocation === 'routebook' ? 'in het routeboek' : 'separaat'} verstrekt.
            </p>
          )}
        </Section>

        {/* Article 6: Route Rules */}
        <Section title="Artikel 6: Routebepalingen">
          <h4 className="font-semibold mt-4 mb-2">6.1 Weggebruik</h4>
          <p className="mb-4">{getRoadUsageText()}</p>

          {config.routeRules.considerTrafficRules && (
            <p className="mb-4">
              Bij het bepalen van de route dient rekening te worden gehouden met de verkeersregels.
              Eenrichtingsverkeer en andere verkeersborden zijn van toepassing.
            </p>
          )}

          {config.routeRules.deadEndRoadsAllowed && (
            <p className="mb-4">
              Doodlopende wegen mogen worden bereden en in tegengestelde richting worden verlaten.
            </p>
          )}

          {config.routeRules.lowestClassMustDetour && (
            <p className="mb-4">
              De {config.classes.lowest.name}-klasse dient bij een afwijking van de route
              terug te keren naar het punt waar de route werd verlaten.
            </p>
          )}

          <h4 className="font-semibold mt-4 mb-2">6.2 Afwijkingstolerantie</h4>
          <p className="mb-4">
            De tolerantie voor afwijkingen van de route bedraagt {config.technical.deviationToleranceMeters} meter.
          </p>

          {config.technical.quietZones.unpavedRoadsAutomatic && (
            <>
              <h4 className="font-semibold mt-4 mb-2">6.3 Stiltezones</h4>
              <p className="mb-4">
                Onverharde wegen zijn automatisch aangemerkt als stiltezone.
                In stiltezones dient met gepaste snelheid en geluidsniveau te worden gereden.
              </p>
            </>
          )}
        </Section>

        {/* Article 7: Controls */}
        <Section title="Artikel 7: Controles">
          <h4 className="font-semibold mt-4 mb-2">7.1 Type controles</h4>
          <p className="mb-4">
            Tijdens de rally wordt gebruik gemaakt van {getControlTypeText()}.
          </p>

          {config.technical.controlType !== 'physical' && (
            <>
              <h4 className="font-semibold mt-4 mb-2">7.2 Controle-applicatie</h4>
              <p className="mb-4">
                Voor virtuele controles wordt gebruik gemaakt van de app "{config.technical.appName || '[App Naam]'}".
                {config.technical.appManualUrl && (
                  <> De handleiding is beschikbaar op: {config.technical.appManualUrl}</>
                )}
              </p>
            </>
          )}

          {config.technical.routeArrows.enabled && (
            <>
              <h4 className="font-semibold mt-4 mb-2">7.3 Routepijlen</h4>
              <p className="mb-4">
                Ter bevestiging van de route worden {config.technical.routeArrows.type === 'physical' ? 'fysieke' : 'virtuele'} routepijlen geplaatst
                {config.technical.routeArrows.inscription && (
                  <> met het opschrift "{config.technical.routeArrows.inscription}"</>
                )}.
              </p>
            </>
          )}
        </Section>

        {/* Article 8: Regularity Test (conditional) */}
        {config.technical.regularityTest && (
          <Section title="Artikel 8: Regelmatigheidsproef">
            <p className="mb-4">
              Tijdens de rally wordt een regelmatigheidsproef afgenomen. Bij de regelmatigheidsproef
              dient een bepaalde afstand binnen een voorgeschreven tijd te worden afgelegd.
            </p>
            <p className="mb-4">
              De gemiddelde snelheid en afstand worden voorafgaand aan de proef bekendgemaakt.
              Afwijkingen van de ideale tijd resulteren in strafpunten.
            </p>
          </Section>
        )}

        {/* Article 9: Skill Test (conditional) */}
        {config.technical.skillTest && (
          <Section title={config.technical.regularityTest ? "Artikel 9: Behendigheidsproef" : "Artikel 8: Behendigheidsproef"}>
            <p className="mb-4">
              Tijdens de rally wordt een behendigheidsproef afgenomen.
              De behendigheidsproef bestaat uit het rijden van een parcours met obstakels.
            </p>
            <p className="mb-4">
              Het aanraken van obstakels of pylonen resulteert in strafpunten.
              De exacte regels worden voorafgaand aan de proef bekendgemaakt.
            </p>
          </Section>
        )}

        {/* Article: Scoring */}
        <Section title={`Artikel ${getArticleNumber(config, 'scoring')}: Puntentelling`}>
          <h4 className="font-semibold mt-4 mb-2">Strafpunten</h4>
          <p className="mb-4">
            Per gemiste controle worden strafpunten toegekend. Het klassement wordt opgemaakt
            op basis van het minste aantal strafpunten.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Ex aequo</h4>
          <p className="mb-4">
            Bij gelijk eindigen wordt de rangschikking bepaald aan de hand van:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-1">
              {config.tieBreaker.primary === 'ex_aequo_control'
                ? `De ex-aequo controle${config.tieBreaker.controlName ? ` (${config.tieBreaker.controlName})` : ''}`
                : 'Het resultaat van de regelmatigheidsproef'}
            </li>
            <li className="mb-1">
              {config.tieBreaker.secondary === 'heaviest_section' && 'Het resultaat op de zwaarste sectie'}
              {config.tieBreaker.secondary === 'oldest_car' && 'De leeftijd van het voertuig (oudste wint)'}
              {config.tieBreaker.secondary === 'draw' && 'Loting'}
            </li>
          </ol>
        </Section>

        {/* Article: Results */}
        <Section title={`Artikel ${getArticleNumber(config, 'results')}: Uitslagen`}>
          <p className="mb-4">
            De voorlopige uitslagen worden na afloop van de rally bekendgemaakt tijdens de prijsuitreiking.
          </p>
          <p className="mb-4">
            De definitieve uitslagen worden gepubliceerd op {formatDate(config.location.onlineResultsDate)}
            via de website {config.event.website || '[website]'}.
          </p>
        </Section>

        {/* Article: Safety */}
        <Section title={`Artikel ${getArticleNumber(config, 'safety')}: Veiligheid`}>
          <p className="mb-4">
            Alle verkeersregels dienen te allen tijde te worden gerespecteerd.
            De wegcode is van toepassing gedurende de gehele rally.
          </p>
          <p className="mb-4">
            Bij een ongeval of incident dient direct contact te worden opgenomen met de organisatie.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Contactpersoon tijdens de rally</h4>
          <table className="w-full mb-4">
            <tbody>
              <TableRow label="Naam" value={config.organization.contactPerson.name} />
              {config.organization.contactPerson.phone && (
                <TableRow label="Telefoon" value={config.organization.contactPerson.phone} />
              )}
            </tbody>
          </table>

          {config.organization.serviceTeam && config.organization.serviceTeam.name && (
            <>
              <h4 className="font-semibold mt-4 mb-2">Serviceteam</h4>
              <table className="w-full mb-4">
                <tbody>
                  <TableRow label="Naam" value={config.organization.serviceTeam.name} />
                  {config.organization.serviceTeam.phone && (
                    <TableRow label="Telefoon" value={config.organization.serviceTeam.phone} />
                  )}
                </tbody>
              </table>
            </>
          )}
        </Section>

        {/* Article: Protests */}
        <Section title={`Artikel ${getArticleNumber(config, 'protests')}: Protesten`}>
          <p className="mb-4">
            Protesten dienen schriftelijk te worden ingediend bij de wedstrijdleiding,
            uiterlijk 30 minuten na publicatie van de voorlopige uitslag.
          </p>
          <p className="mb-4">
            Bij het indienen van een protest dient een waarborgsom te worden betaald.
            Deze wordt gerestitueerd indien het protest gegrond wordt verklaard.
          </p>
        </Section>

        {/* Article: Final Provisions */}
        <Section title={`Artikel ${getArticleNumber(config, 'final')}: Slotbepalingen`}>
          <p className="mb-4">
            In alle gevallen waarin dit reglement niet voorziet, beslist de wedstrijdleiding.
          </p>
          <p className="mb-4">
            Door deelname verklaart de equipe zich akkoord met dit reglement en de beslissingen
            van de wedstrijdleiding.
          </p>
          <p className="mb-4">
            Het Nationaal Reglement Regelmatigheidsritten en het NRF Standaardreglement zijn
            integraal van toepassing, tenzij in dit Bijzonder Reglement anders is bepaald.
          </p>
        </Section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>
            {config.event.name || '[Naam Evenement]'} - {formatDate(config.event.date)}
          </p>
          <p className="mt-2">
            Bijzonder Reglement - Goedkeuringsnummer {config.event.approvalNumber || '[nummer]'}
          </p>
        </footer>
      </div>
    </article>
  );
}

// Helper component for sections
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-bold border-b border-gray-400 pb-2 mb-4">{title}</h3>
      {children}
    </section>
  );
}

// Helper component for table rows
function TableRow({ label, value }: { label: string; value: string | undefined }) {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-1 pr-4 font-medium w-1/3">{label}:</td>
      <td className="py-1">{value || `[${label.toLowerCase()}]`}</td>
    </tr>
  );
}

// Helper function to calculate article numbers based on enabled features
function getArticleNumber(config: ReglementConfig, article: string): number {
  let num = 7; // Base after controls

  if (article === 'scoring') {
    if (config.technical.regularityTest) num++;
    if (config.technical.skillTest) num++;
    return num + 1;
  }
  if (article === 'results') {
    if (config.technical.regularityTest) num++;
    if (config.technical.skillTest) num++;
    return num + 2;
  }
  if (article === 'safety') {
    if (config.technical.regularityTest) num++;
    if (config.technical.skillTest) num++;
    return num + 3;
  }
  if (article === 'protests') {
    if (config.technical.regularityTest) num++;
    if (config.technical.skillTest) num++;
    return num + 4;
  }
  if (article === 'final') {
    if (config.technical.regularityTest) num++;
    if (config.technical.skillTest) num++;
    return num + 5;
  }
  return num;
}

// Navigation systems list component
function NavigationSystemsList({ config }: { config: ReglementConfig }) {
  const nav = config.navigationSystems;
  const systems: string[] = [];

  if (nav.ingetekendeLijn) {
    systems.push('Ingetekende lijn' + (nav.ingetekendeLijnBarricades ? ' (met barricades)' : ''));
  }
  if (nav.grensbenadering) {
    systems.push('Grensbenadering');
  }
  if (nav.pijlenKortste.enabled) {
    systems.push('Pijlen kortste weg' + (nav.pijlenKortste.secondShortest ? ' (op een na kortste)' : ''));
  }
  if (nav.blokkerendePijlen.enabled) {
    systems.push('Blokkerende pijlen' + (nav.blokkerendePijlen.secondShortest ? ' (op een na kortste)' : ''));
  }
  if (nav.pijlenKleurbeperking.enabled) {
    systems.push(`Pijlen met kleurbeperking (${nav.pijlenKleurbeperking.color1}/${nav.pijlenKleurbeperking.color2})`);
  }
  if (nav.pijlenBarricades) {
    systems.push('Pijlen met barricades');
  }
  if (nav.puntenKortste.enabled) {
    systems.push('Punten kortste weg' + (nav.puntenKortste.secondShortest ? ' (op een na kortste)' : ''));
  }
  if (nav.blokkerendePunten.enabled) {
    systems.push('Blokkerende punten' + (nav.blokkerendePunten.secondShortest ? ' (op een na kortste)' : ''));
  }
  if (nav.kompasPunten) {
    systems.push('Kompaspunten');
  }
  if (nav.puntenOnbekend) {
    systems.push('Punten onbekend');
  }
  if (nav.puntenVrijeRoute.enabled) {
    systems.push(`Punten vrije route (straal ${nav.puntenVrijeRoute.radius}m)`);
  }
  if (nav.vakkenLangste) {
    systems.push('Vakken langste weg');
  }
  if (nav.tSystemen) {
    systems.push('T-systemen');
  }
  if (nav.routebeschrijvingOpKaart) {
    systems.push('Routebeschrijving op kaart');
  }
  if (nav.bolPijl) {
    systems.push('Bol-pijl');
  }
  if (nav.visgraat) {
    systems.push('Visgraat');
  }
  if (nav.pijlenEnPuntenGecombineerd.enabled) {
    systems.push(`Pijlen en punten gecombineerd (straal ${nav.pijlenEnPuntenGecombineerd.radius}m)`);
  }

  if (systems.length === 0) {
    return <p className="text-gray-500 italic">Geen navigatiesystemen geselecteerd.</p>;
  }

  return (
    <ul className="list-disc list-inside mb-4 columns-2 gap-8">
      {systems.map((system, i) => (
        <li key={i} className="mb-1">{system}</li>
      ))}
    </ul>
  );
}

export default Reglement;
