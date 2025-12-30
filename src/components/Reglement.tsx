import type { ReglementConfig } from "@/types/config";

interface ReglementProps {
  config: ReglementConfig;
}

// Helper to show placeholder or value
const V = (value: string | number | undefined, placeholder: string) => {
  if (value === undefined || value === null || value === "") {
    return <mark>&lt;{placeholder}&gt;</mark>;
  }
  return <>{value}</>;
};

export function Reglement({ config }: ReglementProps) {
  const c = config;

  // Championship text
  const getChampionshipText = () => {
    const parts = [];
    if (c.event.championships.nrfKlassiek) parts.push("NRF Klassiek");
    if (c.event.championships.nkHistorisch) parts.push("NK Historische Rally's, georganiseerd door de DHRC");
    if (c.event.championships.nrfKaartlezen) parts.push("NRF Kaartlezen");
    if (parts.length === 0) return null;
    return parts.join(" en het ");
  };

  return (
    <article className="reglement bg-white text-black p-8 max-w-4xl mx-auto font-serif text-sm leading-relaxed print:max-w-none print:mx-0 print:p-0">
      <style>{`
        .reglement mark {
          background-color: #ffff00;
          padding: 0 2px;
        }
        .reglement h1 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .reglement h2 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .reglement h3 {
          font-size: 1rem;
          font-weight: bold;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        .reglement p {
          margin-bottom: 0.75rem;
        }
        .reglement ol, .reglement ul {
          margin-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .reglement li {
          margin-bottom: 0.25rem;
        }
        .reglement table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        .reglement table td, .reglement table th {
          border: 1px solid #ccc;
          padding: 0.5rem;
          text-align: left;
        }
        .reglement blockquote {
          margin-left: 1.5rem;
          padding-left: 0.5rem;
          border-left: 2px solid #ccc;
        }
        @media print {
          .reglement {
            font-size: 10pt;
          }
          .reglement h1 {
            page-break-before: always;
          }
        }
      `}</style>

      {/* Intro text */}
      <p className="italic">
        Dit Reglement is opgesteld aan de hand van het NHRF Sjabloon Reglement Regelmatigheidsritten v 4.3
      </p>
      <p className="italic">
        Ten opzichte van de standaardtekst van het Sjabloon gewijzigde tekstdelen zijn in rood in het Reglement opgenomen.
        Als de kopregel van een (sub)artikel in <strong>vet rood</strong> vermeld is, dan betreft het een toegevoegd,
        nieuw (sub)artikel of is een belangrijk deel van het (sub)artikel gewijzigd ten opzichte van de standaardtekst.
      </p>
      <p className="italic">
        In een (sub)artikel met een vetrode kopregel hoeft de nieuwe/gewijzigde tekst niet in het rood opgenomen te zijn.
      </p>
      <p className="italic">
        Het Reglement inclusief wijzigingen ten opzichte van de standaardtekst is door de NRF Reglementencommissie
        goedgekeurd op {V(c.event.approvalDate, "datum goedkeuring")} onder nummer {V(c.event.approvalNumber, "nummer goedkeuring")}.
      </p>
      <p className="italic">
        Na goedkeuring worden geen wijzigingen meer aangebracht in het Reglement.
        Eventuele aanvullingen en wijzigingen worden dan bekendgemaakt door middel van bulletins.
      </p>

      <p><strong>Betekenis arcering:</strong></p>
      <p><mark>xxxxx</mark> tekst die afwijkt van de tekst in een Reglement voor ritten met fysieke controles</p>

      {/* SECTION 1: ORGANISATORISCHE ASPECTEN */}
      <h1 id="organisatorische-aspecten">ORGANISATORISCHE ASPECTEN</h1>

      <h2 id="omschrijving-van-het-evenement">Omschrijving van het evenement</h2>

      <p>
        De {V(c.event.organizationName, "naam van de organisatie")} organiseert op {V(c.event.date, "datum(s)")} de{" "}
        {V(c.event.name, "naam van het evenement")}, die wordt verreden in{" "}
        {V(c.event.area, "wedstrijdgebied")}. De route is ca. {V(c.event.routeLengthKm, "xxx")} km lang
        {getChampionshipText() && (
          <> en telt mee voor het kampioenschap {getChampionshipText()}</>
        )}.
      </p>

      <h3 id="algemeen">Algemeen</h3>
      <p>
        De {V(c.event.name, "naam van het evenement")} is een regelmatigheidsrit waarbij de route gevonden moet worden
        aan de hand van kaartlees- en/of bol-pijlopdrachten en niet de snelheid, maar het correct aandoen van
        routecontroles en (geheime) tijdcontroles het klassement bepaalt. Er kan worden ingeschreven in verschillende
        klassen, die zich onderscheiden in de wijze waarop de informatie wordt verstrekt, de moeilijkheidsgraad van
        de opdrachten en de te rijden gemiddelde snelheid.
      </p>
      <p>
        De te rijden gemiddelde snelheid zal niet hoger zijn dan 36 km/u. Incidenteel kan om verkeerstechnische redenen
        de gemiddelde snelheid verhoogd worden (bijvoorbeeld bij verbindingsroutes over snelwegen).
      </p>

      <h3 id="vergunningenontheffingen">Vergunningen/ontheffingen</h3>
      <p>
        De organisator is toestemming/ontheffing verleend door de verantwoordelijke bestuurseenheden om het evenement
        te laten plaatsvinden op de wedstrijddag(en).
      </p>
      <p>
        De originele ontheffingen, verklaringen van geen bezwaar en/of evenementmeldingen zijn gedurende het hele
        evenement ter inzage bij de wedstrijdleider. In voorkomende gevallen kunnen deelnemers politie en andere
        overheidsdienaren naar de wedstrijdleider verwijzen.
      </p>

      <h3 id="definities">Definities</h3>
      <p>Evenement regelmatigheidsrit;</p>
      <p>Organisator bij NRF aangesloten organisatie van het evenement;</p>
      <p>Equipe het team van deelnemers bestaande uit een bestuurder en een navigator;</p>
      <p>Deelnemer natuurlijk persoon of rechtspersoon die deelneemt aan het evenement;</p>
      <p>Etappe route van een TC UIT naar een TC IN, bestaande uit één of meer trajecten;</p>
      <p>Traject route tussen twee opeenvolgende TC's (of anders als begin en eind aangegeven punten);</p>
      <p>Trajectwissel (TW) Overgangspunt op de voorgenomen route waarbij van het ene traject wordt overgegaan op het volgende traject</p>
      <p>Wedstrijdleider de voor het correct verlopen van het evenement en correcte toepassing van dit reglement verantwoordelijke persoon;</p>
      <p>Klassieker personenauto van tenminste 30 jaar oud.</p>

      <h3 id="overkoepelend-orgaan">Overkoepelend orgaan</h3>
      <p>
        De organisator is lid van de Nederlandse Rittensport Federatie en daarom wordt de{" "}
        {V(c.event.name, "naam van het evenement")} georganiseerd onder auspiciën van de NRF. Dit betekent dat de
        meest recente versie van Het nieuwe NRF kaartleesreglement - Toelichting voor uitzetters en organisatoren
        van toepassing is op dit evenement. Laatstgenoemd document bevat geen bepalingen die van belang zijn voor
        deelnemers. Geïnteresseerden kunnen het document downloaden van <u>www.nrf-autosport.nl</u>.
      </p>
      <p>
        De {V(c.event.name, "naam van het evenement")} wordt verreden volgens het reglement dat nu voor u ligt.
        Dit reglement zal alleen in bijzondere gevallen worden gewijzigd. Wijzigingen en/of aanvullingen op dit
        reglement zullen door middel van gedateerde en genummerde bulletins bekendgemaakt worden. Bulletins maken
        integraal deel uit van dit reglement en worden opgehangen op de officiële publicatieborden en/of
        uitgereikt/verzonden aan alle deelnemers waarvoor ze bestemd zijn.
      </p>

      <h3 id="onvoorzien">Onvoorzien</h3>
      <p>In alle gevallen waarin dit reglement niet voorziet beslist de wedstrijdleider.</p>

      {/* 1.2 Organisatie */}
      <h2 id="organisatie">Organisatie</h2>

      <h3 id="wedstrijdsecretariaat">Wedstrijdsecretariaat</h3>
      <p>Naam {V(c.organization.secretary.name, "naam wedstrijdsecretaris")}</p>
      <p>E-mailadres {V(c.organization.secretary.email, "e-mailadres wedstrijdsecretaris")}</p>
      <p>Telefoon {V(c.organization.secretary.phone, "telefoonnummer wedstrijdsecretaris")}</p>

      <h3 id="organisatiecomité">Organisatiecomité</h3>
      <p>Voorzitter organisatiecomité {V(c.organization.chairman, "naam voorzitter organisatiecomité")}</p>
      <p>Leden organisatiecomité {c.organization.committeeMembers.length > 0
        ? c.organization.committeeMembers.join(", ")
        : <mark>&lt;naam lid1&gt;, &lt;naam lid2&gt;, enz.</mark>}</p>
      <p>Uitzetter(s) {c.organization.routeSetters.length > 0
        ? c.organization.routeSetters.join(", ")
        : <mark>&lt;naam/namen uitzetter(s)&gt;</mark>}</p>
      <p>Narijder(s) {c.organization.routeCheckers.length > 0
        ? c.organization.routeCheckers.join(", ")
        : <mark>&lt;naam/namen narijder(s)&gt;</mark>}</p>
      <p>Wedstrijdleider {V(c.organization.raceDirector.name, "naam wedstrijdleider")} Telefoon: {V(c.organization.raceDirector.phone, "telefoonnummer wedstrijdleider")}</p>
      <p>Hoofd Calamiteitenteam {V(c.organization.emergencyHead.name, "naam calamiteitenhfd")} Telefoon: {V(c.organization.emergencyHead.phone, "telefoonnummer calamiteitenhfd")}</p>
      <p>Contactpersoon deelnemers {V(c.organization.contactPerson.name, "naam contactpersoon")} Telefoon: {V(c.organization.contactPerson.phone, "telefoonnummer contactpersoon")}</p>
      <p>Serviceteam {c.organization.serviceTeam?.name || "geen"} {c.organization.serviceTeam?.phone && <>Telefoon: {c.organization.serviceTeam.phone}</>}</p>

      {/* 1.3 Locaties */}
      <h2 id="locaties">Locaties</h2>

      <h3 id="startlocatie-datum-wedstrijddag">Startlocatie {V(c.event.date, "datum wedstrijddag")}</h3>
      <p>Naam {V(c.location.startLocation.name, "naam startlocatie")}</p>
      <p>Adres {V(c.location.startLocation.address, "adres startlocatie")}</p>
      <p>Telefoon {V(c.location.startLocation.phone, "telefoonnummer startlocatie")}</p>
      <p>Starttijd eerste equipe {V(c.location.startTime, "starttijd eerste equipe")}</p>

      <h3 id="finishlocatie-datum-wedstrijddag">Finishlocatie {V(c.event.date, "datum wedstrijddag")}</h3>
      {c.location.sameAsStart ? (
        <p>Gelijk aan startlocatie</p>
      ) : (
        <>
          <p>Naam {V(c.location.finishLocation.name, "naam finishlocatie")}</p>
          <p>Adres {V(c.location.finishLocation.address, "adres finishlocatie")}</p>
          <p>Telefoon {V(c.location.finishLocation.phone, "telefoonnummer finishlocatie")}</p>
        </>
      )}
      <p>Finishtijd eerste equipe {V(c.location.finishTime, "finishtijd eerste equipe")}</p>
      <p>Publicatie uitslag {V(c.location.publicationTime, "publicatietijd")}</p>
      <p>Prijsuitreiking {V(c.location.prizeTime, "gepland tijdstip prijsuitreiking")}</p>
      <p>Publicatie uitslag op website {V(c.location.onlineResultsDate, "geplande datum publicatie einduitslag op website")}</p>

      {/* 1.4 Belangrijke data */}
      <h2 id="belangrijke-data">Belangrijke data</h2>
      <p>Opening inschrijving {V(c.registration.openingDate, "datum opening inschrijving")}</p>
      <p>Sluiting inschrijving uiterlijk {V(c.registration.closingDate, "datum sluiting inschrijving")}</p>
      <p>Publicatie reglement {V(c.registration.publicationDate, "datum publicatie van dit Reglement")}</p>
      <p>Acceptatiebericht {V(c.registration.acceptanceDate, "datum acceptatiebrief")}</p>
      <p>Documentencontrole {V(c.registration.documentCheckDate, "datum documentencontrole")}</p>

      {/* 1.5 Inschrijven en deelnamevoorwaarden */}
      <h2 id="inschrijven-en-deelnamevoorwaarden">Inschrijven en deelnamevoorwaarden</h2>
      <p>
        Inschrijven kan vanaf {V(c.registration.openingDate, "datum opening inschrijving")} uitsluitend digitaal via{" "}
        {V(c.event.website, "website van de organisatie/het evenement")}. De inschrijving sluit op{" "}
        {V(c.registration.closingDate, "datum sluiting inschrijving")} of zodra het maximale aantal van{" "}
        {V(c.registration.maxParticipants, "maximum aantal equipes")} equipes is bereikt.
      </p>
      <p>
        {c.registration.allowModernVehicles
          ? <>Bij de {V(c.event.name, "naam van het evenement")} worden klassiekers en bepaalde categorieën moderne personenauto's tot de start toegelaten.</>
          : <>Bij de {V(c.event.name, "naam van het evenement")} worden alleen klassiekers tot de start toegelaten.</>
        }
      </p>
      {c.event.championships.nkHistorisch && (
        <p>
          Alleen deelnemers die in een klassieker met een bouwjaar van vóór 1991 deelnemen kunnen punten vergaren
          voor het NK Historische Rally's, georganiseerd door de DHRC.
        </p>
      )}

      <h3 id="inschrijfgeld">Inschrijfgeld</h3>
      <p>
        Een inschrijving wordt pas definitief wanneer het verschuldigde inschrijfgeld à{" "}
        {c.registration.fee ? `€ ${c.registration.fee}` : <mark>&lt;inschrijfgeld&gt;</mark>} is bijgeschreven op de
        bankrekening van de {V(c.event.organizationName, "naam van de organisatie")}.
      </p>
      <p>
        Het volledige inschrijfgeld dient uiterlijk {V(c.registration.closingDate, "datum sluiting inschrijving")} te zijn
        voldaan op bankrekeningnummer {V(c.registration.iban, "IBAN van de organisatie")} van{" "}
        {V(c.event.organizationName, "naam van de organisatie")}, onder vermelding van de namen van bestuurder en navigator.
      </p>

      <h3 id="klassen">Klassen</h3>
      <p>Er kan worden ingeschreven in drie klassen:</p>
      <ol>
        <li>de {V(c.classes.highest.name, "hoogste")}klasse voor zeer ervaren deelnemers;</li>
        <li>de {V(c.classes.middle.name, "middelste")}klasse voor deelnemers met ervaring;</li>
        <li>de {V(c.classes.lowest.name, "laagste")}klasse voor deelnemers met weinig ervaring.</li>
      </ol>
      <p>
        De organisatie behoudt zich het recht voor om al te bescheiden equipes in een hogere klasse te plaatsen,
        dan wel te optimistische equipes te adviseren in een lagere klasse uit te komen. Als de ingeschreven equipe
        het niet met de beslissing in een hogere klasse mee te doen eens is, dan kunnen zij de inschrijving annuleren,
        waarbij ze het volledige inschrijfgeld terugkrijgen.
      </p>

      <h3 id="weigering">Weigering</h3>
      <p>
        De organisatie behoudt zich het recht voor de inschrijving van één of beide leden van een equipe
        (met opgaaf van de reden) te weigeren. In een dergelijk geval zal het volledige inschrijfgeld worden terugbetaald.
      </p>

      <h3 id="inschrijving-teams">Inschrijving teams</h3>
      {c.registration.teamRegistration.enabled ? (
        <p>
          De inschrijving van een team kost{" "}
          {c.registration.teamRegistration.cost > 0 ? `€ ${c.registration.teamRegistration.cost}` : "niets"}.
          Inschrijving van teams kan{" "}
          {c.registration.teamRegistration.method === "website"
            ? "via de website"
            : "op de startlocatie vóór de eerste equipe van start gaat"}.
          Een team bestaat uit tenminste drie en maximaal vijf equipes, die niet in dezelfde klasse hoeven uit te komen.
          Een equipe kan slechts van één team deel uitmaken.
        </p>
      ) : (
        <p>Niet van toepassing.</p>
      )}

      <h3 id="wijzigen-inschrijving">Wijzigen inschrijving</h3>
      <p>
        De equipe mag de op het inschrijfformulier opgegeven auto vervangen door een andere auto tot uiterlijk één uur
        voor de start van de eerste deelnemer, mits deze auto voldoet aan de deelnamevoorwaarden. Het wisselen van auto
        tijdens de rit is niet toegestaan. Overtreding van deze regel leidt tot uitsluiting. De bestuurder dient in het
        bezit te zijn van een geldig rijbewijs en de minimale leeftijd te hebben die de WAM-verzekeraar aan deelname stelt.
        Het is toegestaan de functie van bestuurder en navigator tijdens de rit onderling te wisselen, mits beide leden
        van de equipe in het bezit zijn van een geldig rijbewijs en beiden de minimale leeftijd hebben die de WAM-verzekeraar
        aan deelname stelt.
      </p>

      <h3 id="annulering-door-de-deelnemer">Annulering door de deelnemer</h3>
      <p>
        Annulering van een inschrijving is alleen mogelijk door middel van een e-mail aan het wedstrijdsecretariaat en is
        alleen geldig wanneer het wedstrijdsecretariaat daarvan per e-mail een bevestiging heeft verstuurd. Het al dan niet
        restitueren van inschrijfgeld is afhankelijk van het moment van annuleren. De details kan men terugvinden in de
        deelnamevoorwaarden op de website van de organisator/het evenement.
      </p>

      <h3 id="annulering-door-de-organisatie">Annulering door de organisatie</h3>
      <p>
        De organisatie zal een deel van het inschrijfgeld terugbetalen aan de deelnemers, indien het evenement door
        overmacht niet doorgaat. De hoogte van het bedrag dat wordt terugbetaald hangt af van de gemaakte kosten.
      </p>
      <p>
        Overmacht is iedere gebeurtenis of omstandigheid buiten de macht van de organisator, zoals het intrekken van
        verleende ontheffingen of andere door de overheid opgelegde maatregelen waardoor het evenement geen doorgang kan vinden.
      </p>

      <h3 id="acceptatiebericht">Acceptatiebericht</h3>
      <p>
        Rond {V(c.registration.acceptanceDate, "datum acceptatiebrief")} ontvangen alle deelnemende equipes een definitieve
        bevestiging van deelname, inclusief startnummer en –tijd. De Vrijwaringverklaring dient bij de Documentencontrole/Inschrijftafel
        door beide equipeleden ondertekend te worden.
      </p>

      {/* 1.6 Verzekering */}
      <h2 id="verzekering">Verzekering</h2>

      <h3 id="verzekering-van-de-deelnemer">Verzekering van de deelnemer</h3>
      <p>
        Deelnemers moeten voor hun auto in het bezit zijn van een geldige wettelijke aansprakelijkheidsverzekering
        motorvoertuigen (WAM). Deze verzekering dient tijdens het evenement aan de specifieke bestuur­der(s) dekking te geven.
        De deelnemers dienen er derhalve voor te zorgen dat de bestuurder(s) de minimale leeftijd bezit(ten) die de verzekeraar
        als voorwaarde voor dekking stelt. De polis dient tevens dekking te bieden bij deelname aan regelmatigheidsritten en
        (indien van toepassing) rijvaardigheidstesten op afgesloten terrein. Tevens wordt de eigenaar van de auto geadviseerd
        een (schade- en ongevallen-)verzekering inzittenden af te sluiten (voor de landen waarin ritten gereden worden) om de
        bestuurder en de navigator goed te verzekeren.
      </p>
      <p>
        Het is de eigen verantwoordelijkheid van de eigenaar van de auto om dergelijke verzekeringen en/of uitbreidingen van
        de bestaande verzekering te arrangeren.
      </p>

      <h3 id="verzekering-van-de-organisator">Verzekering van de organisator</h3>
      <p>
        De organisator heeft een verzekering tegen wettelijke aansprakelijkheid voor schade aan personen en/of goederen van
        derden en/of vrijwilligers en/of medewerkers en/of deelnemers afgesloten, en een motorrijtuigenaansprakelijkheidsverzekering
        voor deelnemers op basis van een secundaire dekking. Zij maakt hiervoor gebruik van de hiertoe collectief door de NRF
        ingekochte verzekeringspakketten.
      </p>
      <p>
        De dekking van de secundaire motorrijtuigenaansprakelijkheidsverzekering gaat in bij de start van het wedstrijdgedeelte
        van het evenement en eindigt bij de finish van het wedstrijdgedeelte of op het moment dat de betreffende equipe niet meer
        deelneemt. Het eigen risico voor de eigenaar van de ingeschreven auto bedraagt bij een NRF-regelmatigheidsrit € 2.500.
      </p>
      <p>
        In alle gevallen zal de verzekering, zoals wettelijk vastgesteld, van de eigenaar van de auto altijd prevaleren boven
        de secundaire motorrijtuigenaansprakelijkheidsverzekering.
      </p>

      <h3 id="vrijwaringverklaring">Vrijwaringverklaring</h3>
      <p>
        De leden van de ingeschreven equipe dienen voor aanvang van het evenement de op het evenement van toepassing zijnde
        vrijwaringverklaring (zie Bijlage A) te ondertekenen. Wordt de genoemde verklaring niet ondertekend, dan wordt de
        equipe niet tot de start toegelaten.
      </p>

      {/* 1.7 Eisen aan de auto */}
      <h2 id="eisen-aan-de-auto">Eisen aan de auto</h2>

      <h3 id="wettelijke-eisen">Wettelijke eisen</h3>
      <p>
        De aan het evenement deelnemende auto's dienen te voldoen aan de wettelijke eisen die aan auto's gesteld worden
        in het land van registratie.
      </p>

      <h3 id="aanvullende-voorschriften">Aanvullende voorschriften</h3>
      <p>
        Deelnemende auto's mogen nimmer over een overdadig geluidsniveau beschikken. Bij te overdadig geluid kan de
        wedstrijdleiding straffen opleggen tot en met uitsluiting.
      </p>
      <p>
        In elke deelnemende klassieker moet een vloeistofdicht grondzeil (minimaal 4 x 2 meter) of lekbak aanwezig zijn
        én een solide bevestigde brandblusser van minimaal 2 kg geschikt voor vloeistofbranden. Een grondzeil of lekbak
        moet onder de deelnemende auto gelegd worden bij schade en/of lekkage en wanneer de organisator dat vereist
        (bijvoorbeeld op de parkeerplaats bij de startlocatie).
      </p>
      <p>Elke deelnemende auto moet voorts zijn uitgerust met:</p>
      <ol>
        <li>veiligheidsgordels (uitgezonderd, maar aanbevolen, voor deelnemende auto's die gebouwd zijn voor 1971);</li>
        <li>een gevarendriehoek;</li>
        <li>een verbanddoos;</li>
        <li>twee veiligheidshesjes;</li>
        <li>een sleepkabel.</li>
      </ol>

      <h3 id="reclame">Reclame</h3>
      <p>
        De organisatie kan de deelnemers verplichten reclamestickers aan te brengen op beide voorportieren van de auto.
        Het is niet toegestaan deze reclame in delen aan te brengen op de auto. Uitzondering op deze regel is alleen
        mogelijk na overleg met en goedkeuring van de organisatie voorafgaand aan de start. Bij het ontbreken van enig
        deel van de reclame en/of het wedstrijdnummer wordt de equipe niet toegelaten tot de start.
      </p>

      <h3 id="rallyschilden-en-wedstrijdnummers">Rallyschilden en wedstrijdnummers</h3>
      <p>
        De deelnemers kunnen rallyschilden uitgereikt krijgen, die aan de voor- en achterzijde van de auto bevestigd
        moeten worden, waarbij het kenteken van de auto zichtbaar moet blijven. Daarbij of in plaats daarvan kan een
        startnummersticker uitgereikt worden, die rechtsboven aan de binnenzijde van de voorruit van de auto bevestigd
        moet worden. Reclamestickers, rallyschilden en startnummersticker dienen tijdens het gehele evenement op/in de
        auto aanwezig te zijn.
      </p>

      <h3 id="extra-brandstof">Extra brandstof</h3>
      <p>
        Het meevoeren van extra brandstof in deugdelijke jerrycans in de auto is toegestaan tot maximaal 10 liter in totaal.
        Uit veiligheidsoverwegingen mag deze extra brandstof zich NIET bevinden in de passagiersruimte van de auto.
      </p>

      <h3 id="kompas-afstand-tijd-en-snelheidsmeters">Kompas, afstand-, tijd- en snelheidsmeters</h3>
      <p>
        In de auto aangebrachte of standaard aanwezige analoge of digitale hulpmiddelen voor het bepalen van de richting
        en/of het meten van afstand, snelheid of tijd (al dan niet uitgerust met de mogelijkheid om de gemiddelde snelheid
        te meten) zijn toegestaan. Deze apparatuur mag zowel mechanisch als elektronisch als gps-gestuurd zijn.
      </p>

      <h3 id="communicatie-en-navigatieapparatuur">Communicatie- en navigatieapparatuur</h3>
      <p>
        Het gebruik van vaste of mobiele navigatieapparatuur door deelnemers in klassiekers is niet toegestaan. Tijdens de
        wedstrijd mag deze apparatuur (denk aan mobiele telefoons, smart watches, tablets, laptops, navigatiessystemen)
        niet in de passagiersruimte aanwezig zijn. Mobiele telefoons mogen wel gebruikt worden bij:
      </p>
      <ol>
        <li>calamiteiten (zie bijlage B);</li>
        <li>het (verplicht) gebruik van een app voor registratie van controles en/of aansturing van een rekenprogramma;</li>
        <li>het inroepen van hulp van het serviceteam van de organisator;</li>
        <li>het melden van opgave bij de organisator.</li>
      </ol>
      <p>
        Alle officials zijn bevoegd om gedurende het evenement te controleren op de aanwezigheid van bovengenoemde apparatuur
        in de passagiersruimte van de auto en het ingeschakeld zijn van navigatieapparatuur. Bij de eerste constatering van
        het gebruik van navigatieapparatuur zal de betreffende equipe worden bestraft met 90 strafpunten, een volgende
        overtreding betekent uitsluiting. Als de equipe de controle weigert, dan zal de equipe direct uitgesloten worden
        van verdere deelname.
      </p>

      {/* 1.8 Verloop van het evenement */}
      <h2 id="verloop-van-het-evenement">Verloop van het evenement</h2>

      <h3 id="tijdschema">Tijdschema</h3>
      <p>
        Het tijdschema van het evenement is zodanig opgesteld, dat deelnemers onder normale omstandigheden de opgelegde
        opdrachten binnen de gegeven tijd kunnen uitvoeren. Als het tijdschema door onvoorziene omstandigheden (bijv.
        weersomstandigheden) niet gehandhaafd kan worden, dan zal de organisator tijdig adequate aanpassingen laten
        plaatsvinden. De organisator zal deelnemers hiervan tijdig op de hoogte brengen, bijvoorbeeld door een bulletin
        of door een mededeling van officials onderweg.
      </p>

      <h3 id="documentencontrole-inschrijftafel">Documentencontrole - Inschrijftafel</h3>
      <p>
        Beide equipeleden dienen zich binnen het in art. 1.4 aangegeven tijdframe te melden bij de documentencontrole of
        inschrijftafel in de startlocatie om de vrijwaring af te handelen en het startpakket (met bijv. rallyschilden,
        portier/startnummers, enz.) in ontvangst te nemen.
      </p>

      <h3 id="startprocedure">Startprocedure</h3>
      <p>
        Equipes dienen 10 minuten vóór hun starttijd gereed te zijn voor vertrek. Per klasse zullen de equipes in volgorde
        van startnummer worden gestart. De equipes vertrekken met een interval van 1 minuut en dienen zich op hun starttijd
        bij de starttafel (TC UIT) te melden, waar het routeboek wordt uitgereikt.
      </p>

      <h3 id="verkeersregels">Verkeersregels</h3>
      <p>
        Gedurende het gehele evenement dienen de deelnemers zich strikt te houden aan de verkeersregels die gelden in het
        land waarin zij zich bevinden. Deelnemers zijn verplicht binnen de bebouwde kom uiterst behoedzaam en waardig te
        rijden, opdat derden geen aanstoot hoeven te nemen aan passerende deelnemers.
      </p>
      <p>
        Geconstateerde snelheidsovertredingen worden bestraft conform artikel 2.9. Andere overtredingen van verkeersregels
        worden bestraft met 90 strafpunten.
      </p>

      <h3 id="gedrag-deelnemers">Gedrag deelnemers</h3>
      <p>
        Deelnemers dienen aanwijzingen en/of instructies van de officials op te volgen. Deelnemers dienen te allen tijde
        andere voertuigen, die willen passeren, ruimte te verlenen.
      </p>
      <p>
        Elk incorrect, frauduleus of onsportief gedrag (waaronder ook het verkennen van de route valt) van de deelnemers
        of van personen voor wie zij verantwoordelijk zijn wordt beoordeeld door de wedstrijdleiding, die straffen kan
        opleggen tot en met uitsluiting.
      </p>

      <h3 id="milieu">Milieu</h3>
      <p>
        Deelnemers dienen het milieu niet onnodig te belasten. Bij vloeistoflekkende auto's is voor de start, bij
        rustpauzes en na de finish een deugdelijk zeil (of een lekbak) onder de auto verplicht. Gedurende hun aanwezigheid
        (wachttijd) bij bemande controleposten dienen deelnemers zo min mogelijk overlast te veroorzaken voor omwonenden.
        Afvalvloeistoffen, onderdelen, materialen en voorwerpen moeten in de auto worden meegenomen of, indien aanwezig,
        in daarvoor bestemde afvalcontainers worden gedeponeerd.
      </p>

      <h3 id="schades">Schades</h3>
      <p>
        Deelnemers zijn verplicht onverhoopte schade die tijdens het evenement aan eigen of andermans auto en/of goed is
        toegebracht zo spoedig mogelijk, doch uiterlijk bij de TC IN van de betrokken etappe, aan de organisator te melden.
        Aan het niet melden van een schade kan een sanctie tot en met uitsluiting worden verbonden.
      </p>

      <h3 id="uitvallen">Uitvallen</h3>
      <p>
        Indien een equipe uitvalt, dan wordt zij verzocht wedstrijdleider ({V(c.organization.raceDirector.name, "naam wedstrijdleider")},{" "}
        {V(c.organization.raceDirector.phone, "telefoonnummer wedstrijdleider")}) hier zo spoedig mogelijk van op de hoogte te stellen.
      </p>

      <h3 id="service">Service</h3>
      <p>
        Onder service wordt verstaan het verlenen van vooraf georganiseerde assistentie door derden aan een equipe met het
        doel de auto in geval van storing te repareren. Het verlenen van dit soort service is gedurende het gehele evenement
        niet toegestaan. Het is wel geoorloofd dat een gestrande auto door het serviceteam van de organisatie of door een
        collega-equipe naar bijvoorbeeld een werkplaats wordt gesleept.
      </p>
      {c.organization.serviceTeam?.name && (
        <p>
          Bij technische problemen onderweg kan contact opgenomen worden met het serviceteam van {c.organization.serviceTeam.name},
          telefoon {c.organization.serviceTeam.phone}. Aan deze service kan de deelnemer geen rechten ontlenen.
        </p>
      )}

      {/* 1.9 Vragen na afloop & neutralisaties */}
      <h2 id="vragen-na-afloop-neutralisaties">Vragen na afloop &amp; neutralisaties</h2>
      <p>
        Na het sluiten van de finish ontvangt iedere deelnemer een uitleg, zodat hij zijn eventuele fouten kan controleren.
        Tegelijkertijd publiceert de organisatie de voorlopige moederkaart(en) op het publicatiebord op de finishlocatie.
      </p>

      <h3 id="routetechnische-vragen">Routetechnische vragen</h3>
      <p>
        Als een deelnemer het niet eens is met de uitleg of controlevermeldingen op de voorlopige moederkaart(en), dan kan
        de deelnemer daarover een zgn. routetechnische vraag stellen. Hiervoor zijn vragenformulieren beschikbaar. Deelnemers
        dienen het vragenformulier in te leveren bij de finishcontrole. Routetechnische vragen kunnen tot 30 minuten na het
        sluiten van de finish ingediend worden.
      </p>

      <h3 id="neutralisaties">Neutralisaties</h3>
      <p>
        De wedstrijdleiding kan besluiten om controles te neutraliseren, zowel op basis van eigen waarneming als naar
        aanleiding van door deelnemers gestelde vragen.
      </p>

      <h3 id="rekentechnische-vragen">Rekentechnische vragen</h3>
      <p>
        Na verwerking van de routetechnische vragen wordt de voorlopige uitslag gepubliceerd. Voor vragen over het berekenen
        van het aantal strafpunten en de klassering kunnen deelnemers tot 15 minuten na publicatie terecht.
      </p>

      <h3 id="protesten">Protesten</h3>
      <p>
        Tegen de antwoorden op route- of rekentechnische vragen en tegen neutralisaties kan geen protest ingediend worden.
        Het besluit van de wedstrijdleider is bindend en hiertegen staat geen beroep open.
      </p>

      {/* 1.10 Klassement & prijzen */}
      <h2 id="klassement-prijzen">Klassement &amp; prijzen</h2>

      <h3 id="klassement-ex-aequo">Klassement, ex aequo</h3>
      <p>
        Het eindklassement per klasse wordt bepaald door de equipes van die klasse te rangschikken op volgorde van het
        aantal behaalde strafpunten. De equipe met het laagste aantal strafpunten in een klasse wordt tot winnaar van
        die klasse uitgeroepen.
      </p>
      <p>
        Als twee of meer equipes hetzelfde aantal strafpunten behaald hebben, dan zal de equipe die het beste resultaat
        heeft behaald bij de tijdmeting van de{" "}
        {c.tieBreaker.primary === "ex_aequo_control"
          ? <>ex-aequo controle{c.tieBreaker.controlName && <> ({c.tieBreaker.controlName})</>}</>
          : <>regelmatigheidsproef</>
        } de hoogste klassering krijgen. Mocht dit geen beslissing geven, dan{" "}
        {c.tieBreaker.secondary === "heaviest_section" && "zal de equipe met het laagst aantal strafpunten in het zwaarste traject het hoogst geklasseerd worden"}
        {c.tieBreaker.secondary === "oldest_car" && "zal de equipe met de oudste auto het hoogst geklasseerd worden"}
        {c.tieBreaker.secondary === "draw" && "beslist het lot"}.
      </p>
      {c.registration.teamRegistration.enabled && (
        <p>
          De teamprestatie is de optelling van de eindklasseringen van de drie best geklasseerde equipes van het team.
          Het team met het laagste aantal punten is winnaar.
        </p>
      )}

      <h3 id="uitslag">Uitslag</h3>
      <p>
        Na publicatie van de definitieve uitslag wordt overgegaan tot de prijsuitreiking. De definitieve uitslag zal ook
        in detail vanaf {V(c.location.onlineResultsDate, "geplande datum publicatie einduitslag")} worden gepubliceerd
        op {V(c.event.website, "website van de organisatie/het evenement")}.
      </p>

      {/* 1.11 Samenvatting straffen organisatorische aspecten */}
      <h2 id="samenvatting-straffen-organisatorische-aspecten">Samenvatting straffen organisatorische aspecten</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Reden</strong></td>
            <td><strong>Aantal strafpunten</strong></td>
          </tr>
          <tr><td>Niet tekenen vrijwaringverklaring</td><td>uitsluiting</td></tr>
          <tr><td>Auto heeft een buitensporig geluidsniveau</td><td>uitsluiting</td></tr>
          <tr><td>Ontbreken van uitgereikte verplichte reclame, rallyschilden en/of wedstrijdnummers bij de start</td><td>uitsluiting</td></tr>
          <tr><td>Vermijdbare belasting van het milieu</td><td>uitsluiting</td></tr>
          <tr><td>Niet melden van schade</td><td>maximaal uitsluiting</td></tr>
          <tr><td>Geconstateerd hinderlijk weggedrag en incorrect, frauduleus of onsportief gedrag</td><td>maximaal uitsluiting</td></tr>
          <tr><td>Geconstateerde overtreding van de wegenverkeerswet</td><td>90 strafpunten per geval</td></tr>
          <tr><td>Eerste constatering van gebruik navigatiesysteem (klassiekers)</td><td>90 strafpunten</td></tr>
          <tr><td>Tweede constatering van gebruik navigatiesysteem (klassiekers)</td><td>uitsluiting</td></tr>
          <tr><td>Weigeren van de controle op gebruik navigatiesysteem (klassiekers)</td><td>uitsluiting</td></tr>
          <tr><td>Eerste constatering van gebruik georganiseerde assistentie</td><td>90 strafpunten</td></tr>
          <tr><td>Tweede constatering van gebruik georganiseerde assistentie</td><td>uitsluiting</td></tr>
          <tr><td>Niet op eigen kracht de finish bereiken</td><td>uitsluiting</td></tr>
        </tbody>
      </table>

      {/* SECTION 2: TECHNISCHE ASPECTEN */}
      <h1 id="technische-aspecten">TECHNISCHE ASPECTEN</h1>
      <p>
        Bij dit evenement wordt door de organisatie gebruik gemaakt van{" "}
        {c.technical.controlType === "physical" && "fysiek routemateriaal (routecontroleborden, stempelcontroles, bemande (tijd)controles, routepijlen e.d.)"}
        {c.technical.controlType === "virtual" && "virtueel routemateriaal (dat onderweg in een app voor controleregistratie verschijnt)"}
        {c.technical.controlType === "combined" && "een combinatie van fysiek en virtueel routemateriaal"}.
      </p>

      {/* 2.1 Routeboek */}
      <h2 id="routeboek">Routeboek</h2>
      <p>
        In de routeboeken is een tijdschema opgenomen en staat een gedetailleerde beschrijving van de route die moet
        worden gevolgd, inclusief kaartfragmenten, routeopdrachten, kaartschalen, rijtijden/richttijden, locatie van
        tijdcontroles en dergelijke.
      </p>

      <h3 id="kaartmateriaal">Kaartmateriaal</h3>
      <p>
        In het routeboek wordt gebruik gemaakt van topografische kaarten schaal {V(c.technical.mapScales, "gebruikte schaalgrootte(n)")}.
      </p>
      <p>
        Het is niet toegestaan om over extra kaartmateriaal te beschikken of in de auto aanwezig te hebben, met uitzondering
        van kaarten met een schaal van 1:200.000 of kleiner (minder gedetailleerd). Bij constatering van overtreding van deze
        regel zal de betreffende equipe worden bestraft met 90 strafpunten. Bij een tweede constatering volgt uitsluiting.
      </p>

      <h3 id="legenda">Legenda</h3>
      <p>
        In{" "}
        {c.routeRules.legendLocation === "appendix" && "bijlage C"}
        {c.routeRules.legendLocation === "routebook" && "het routeboek"}
        {c.routeRules.legendLocation === "separate" && "een apart bij de documentencontrole uit te reiken boek"}
        {" "}zijn de legenda's van de gebruikte topografische kaarten opgenomen.
      </p>

      <h3 id="routeopdracht">Routeopdracht</h3>
      <p>
        Van start tot finish (van elke etappe) dient de equipe een voorgeschreven route te rijden met inachtneming van de
        voorgeschreven gemiddelde snelheid en de ter plaatse geldende verkeersvoorschriften. De voorgeschreven route staat
        in de vorm van routeopdrachten in het routeboek vermeld.
      </p>

      <h3 id="tanken">Tanken</h3>
      <p>
        Als service voor de deelnemers kunnen in het routeboek tankstations aangegeven zijn. De equipe is zelf verantwoordelijk
        voor haar eigen brandstofvoorraad en haar eigen tijdschema.
      </p>

      {/* 2.2 Controlekaarten */}
      <h2 id="controlekaarten">Controlekaarten</h2>
      {c.technical.controlType !== "physical" && (
        <>
          <p>
            <mark>Hoe aanmelding voor {V(c.technical.appName, "de naam van de app voor controleregistratie")} (verder kortweg app genoemd)
            moet plaatsvinden staat vermeld in de handleiding, zie {V(c.technical.appManualUrl, "URL online handleiding van de app")}.</mark>
          </p>
          <p>
            <mark>In de handleiding vindt u tevens een beschrijving van het gebruik van de app en de verschijningsvorm van de
            verschillende soorten controles.</mark>
          </p>
          <p>
            <mark>Bij de start van een etappe krijgt elke equipe via de app de beschikking over een digitale controlekaart.
            Daar worden onderweg controles op geregistreerd. De controlekaart wordt aan het eind van iedere etappe automatisch
            naar de organisatie én naar het mailadres van de equipe verzonden.</mark>
          </p>
        </>
      )}

      {/* 2.3 Routecontroles (RC's) */}
      <h2 id="routecontroles-rcs">Routecontroles (RC's)</h2>
      <p>
        Tijdens het rijden van de route wordt gecontroleerd of u de juiste route rijdt. Dit gebeurt door routecontroles.
      </p>
      <p>
        Routecontroles zijn aanwezig van 15 minuten vóór de IPT van de eerste deelnemer tot 60 minuten na de IPT van de
        laatste deelnemer.
      </p>
      <p>
        Het missen van een routecontrole of het aandoen van een routecontrole waaruit blijkt dat niet de juiste route is
        gereden (foutcontrole) wordt bestraft met 30 strafpunten.
      </p>
      {c.technical.controlType !== "physical" && (
        <p>
          <mark>Bij het passeren van een virtuele routecontrole verschijnt daarvan een melding in de app. De organisator
          kan gebruik maken van controles die bij verschijning in de app automatisch (dus zonder tussenkomst van de deelnemer)
          op de digitale controlekaart geplaatst worden.</mark>
        </p>
      )}

      {/* 2.4 Tijdcontroles (TC's) */}
      <h2 id="tijdcontroles-tcs">Tijdcontroles (TC's)</h2>

      <h3 id="tijdwaarneming">Tijdwaarneming</h3>
      <p>
        Voor het bepalen van de juiste tijd wordt gebruik gemaakt van de tijd die ontvangen wordt van de DCF77 tijdseinzender
        in Mainflingen nabij Frankfurt.
      </p>
      {c.technical.controlType !== "physical" && (
        <p><mark>Deze bron wordt door het NTP (Network Time Protocol) gebruikt, waarvan de app gebruik maakt.</mark></p>
      )}

      <h3 id="herkenbaarheid-en-melding">Herkenbaarheid en melding</h3>
      <p>
        Elke etappe start met een TC UIT en eindigt met een TC IN. Alleen de laatste TC van een etappe (TC IN) mag eerder
        dan de ideale passeertijd (IPT) worden aangedaan om onnodig wachten te voorkomen.
      </p>

      <h3 id="strafpunten-tijd-inhalen">Strafpunten – tijd inhalen</h3>
      <p>
        Bij een TC IN mag u zich ongestraft (maximaal 15 minuten) eerder dan de IPT melden. Bij een andere TC (UIT of 'gewoon')
        wordt tot en met 15 minuten eerder melden dan de IPT bestraft met 1 strafpunten per minuut afwijking. Meer dan 15
        minuten voor de IPT melden wordt beschouwd als het missen van de TC. Het missen van een TC wordt bestraft met 30 strafpunten.
      </p>
      <p>
        Later dan de IPT melden bij een TC wordt bestraft met 1 strafpunt per minuut afwijking. Meer dan 30 minuten na de
        IPT melden wordt beschouwd als het missen van de TC.
      </p>
      <p>
        Op bovenstaande regels gelden twee uitzonderingen: de eerste TC UIT (start) en de laatste TC IN ((dag)finish).
        Meer dan 30 minuten te laat melden bij de start en meer dan 60 minuten te laat melden bij de (dag)finish betekenen{" "}
        <strong>uitsluiting</strong>.
      </p>

      {/* 2.5 Regelmatigheidsproef (RP) */}
      {c.technical.regularityTest ? (
        <>
          <h2 id="regelmatigheidsproef-rp">Regelmatigheidsproef (RP)</h2>
          <p>
            Als onderdeel van het evenement kan een RP zijn opgenomen. De opdracht en de bijbehorende afstand-tijdtabel staan
            in het routeboek of worden bij de start van de RP uitgereikt.
          </p>
          <p>
            U moet de RP zo exact mogelijk, op de seconde nauwkeurig, afleggen volgens de bijbehorende afstand-tijdtabel.
          </p>
          <p>
            Per seconde tijdafwijking van de ideale rijtijd krijgt de equipe 1 strafpunt. Het niet langs een GTC komen wanneer
            dit wel de bedoeling is, wordt bestraft met 30 strafpunten; dit is tevens de maximale tijdstraf die u kunt oplopen bij een RP.
          </p>
        </>
      ) : (
        <>
          <h2 id="regelmatigheidsproef-rp">Regelmatigheidsproef (RP)</h2>
          <p>Niet van toepassing.</p>
        </>
      )}

      {/* 2.6 Behendigheidsproef/Test */}
      {c.technical.skillTest ? (
        <>
          <h2 id="behendigheidsproeftest">Behendigheidsproef/Test</h2>
          <p>
            In het evenement kunnen één of meer Tests opgenomen zijn. Deze vinden plaats op een voor het overige verkeer
            afgesloten terrein en/of weggedeelte. De beschrijving van een Test staat in het routeboek, of u krijgt deze
            bij de start van de Test uitgereikt.
          </p>
          <p>
            Voor elke Test is een normtijd ("bogey time") vastgesteld. U dient het parcours van de Test binnen de normtijd af te leggen.
          </p>
          <p>Bestraffing:</p>
          <ol>
            <li>parcours in normtijd of sneller afleggen 0 strafpunten;</li>
            <li>langzamer rijden dan de normtijd 1 strafpunt per seconde;</li>
            <li>raken van pylonen die de route markeren 5 strafpunten per geval;</li>
            <li>onjuist uitgevoerde stop-à-cheval 5 strafpunten per geval;</li>
            <li>stop-à-cheval niet uitgevoerd 15 strafpunten per geval;</li>
            <li>onjuist parcours gereden 30 strafpunten;</li>
            <li>maximale totaalbestraffing 30 strafpunten.</li>
          </ol>
        </>
      ) : (
        <>
          <h2 id="behendigheidsproeftest">Behendigheidsproef/Test</h2>
          <p>Niet van toepassing.</p>
        </>
      )}

      {/* 2.7 Routeonderbrekingen */}
      <h2 id="routeonderbrekingen">Routeonderbrekingen</h2>
      <p>
        Het kan voorkomen dat de geplande route niet bereden kan worden. We onderscheiden hierbij drie verschillende soorten
        routeonderbrekingen:
      </p>
      <ol>
        <li>
          Routeonderbrekingen die de organisator ook geconstateerd heeft bij het uitzetten van de route. De organisator heeft
          hiervan gebruik gemaakt bij het uitzetten van de route. Bij dit soort routeonderbrekingen treden de omrijregels in
          werking. Dit komt {c.routeRules.lowestClassMustDetour ? "ook" : "niet"} voor in de route van de {c.classes.lowest.name}klasse.
        </li>
        <li>
          Routeonderbrekingen, die er bij het uitzetten en de controle van de route nog niet waren, maar kort voor het evenement
          of tijdens het voorrijden door de organisator geconstateerd worden. In zo'n geval kan de organisator een omleiding
          aanleggen met behulp van routepijlen of routecontroles met herstelopdrachten.
        </li>
        <li>
          Routeonderbrekingen, die zich tijdens de regelmatigheidsrit voordoen (bijv. een ongeval). In zo'n geval dient u de
          voorgenomen route zo kort mogelijk achter de routeonderbreking weer op te pakken.
        </li>
      </ol>

      {/* 2.8 Routepijlen */}
      {c.technical.routeArrows.enabled ? (
        <>
          <h2 id="routepijlen">Routepijlen</h2>
          <ol>
            <li>
              Langs de route geplaatste routepijlen zijn herkenbaar aan een pijl met opschrift{" "}
              {V(c.technical.routeArrows.inscription, "opschrift routepijl")}.
            </li>
            <li>
              Horizontale en vóór een samenkomst van wegen geplaatste met de punt naar boven wijzende routepijlen zijn bedoeld
              om de deelnemers middels een omleiding naar een verder op de voorgenomen route gelegen punt te leiden en moeten
              verplicht gevolgd worden.
            </li>
            <li>
              Dubbele routepijlen kunnen ook geplaatst zijn bij onduidelijke wegsituaties.
            </li>
            <li>
              Indien aan het begin van een weg een routepijl met de punt naar beneden is geplaatst, dan mag die weg niet van
              deze zijde worden ingereden.
            </li>
            <li>
              Indien aan het begin van een weg een routepijl met de punt naar boven is geplaatst, dan mag u deze weg inrijden,
              zelfs als deze weg afgesloten is voor het verkeer.
            </li>
          </ol>
        </>
      ) : (
        <>
          <h2 id="routepijlen">Routepijlen</h2>
          <p>Niet van toepassing.</p>
        </>
      )}

      {/* 2.9 Snelheidscontroles */}
      <h2 id="snelheidscontroles">Snelheidscontroles</h2>
      <p>
        Deelnemers dienen zich gedurende het evenement strikt aan de ter plaatse geldende maximum snelheden te houden.
        De organisator zal tenminste één keer per dag een snelheidscontrole binnen een bebouwde kom, 30 kilometerzone of
        quietzone houden.
      </p>
      <p>
        Voor een geconstateerde snelheidsovertreding met meer dan vijf kilometer wordt een bestraffing gehanteerd van 30
        strafpunten per elke vijf kilometer die vervolgens te hard wordt gereden, boven de eerste vijf kilometer.
      </p>

      {/* 2.10 Quietzones */}
      <h2 id="quietzones">Quietzones</h2>
      <p>
        Een quietzone (Q-zone) heeft tot doel een rustige doortocht van de deelnemers te waarborgen, met een minimum aan
        overlast voor de omwonenden. Deelnemers dienen hier uiterst behoedzaam te rijden. De maximum snelheid in een Q-zone
        bedraagt 30 km/uur.
      </p>
      {c.technical.quietZones.unpavedRoadsAutomatic && (
        <p>
          Alle onverharde wegen dienen aangemerkt te worden als Q-zones. Die wegen hoeven dus niet als zodanig aangegeven
          te zijn met een bord of op het kaartfragment.
        </p>
      )}

      {/* 2.11 Samenvatting straffen technische aspecten */}
      <h2 id="samenvatting-straffen-technische-aspecten">Samenvatting straffen technische aspecten</h2>
      <table>
        <tbody>
          <tr><td><strong>Reden</strong></td><td><strong>Aantal strafpunten</strong></td></tr>
          <tr><td>Eerste constatering van aanwezigheid van verboden kaartmateriaal</td><td>90 strafpunten</td></tr>
          <tr><td>Tweede constatering van aanwezigheid van verboden kaartmateriaal</td><td>uitsluiting</td></tr>
          <tr><td>Weigeren van de controle op aanwezigheid van verboden kaartmateriaal</td><td>uitsluiting</td></tr>
          <tr><td>Missen van een routecontrole of aandoen van een foutcontrole</td><td>30 strafpunten</td></tr>
          <tr><td>Te vroeg aandoen van een tijdcontrole</td><td>1 strafpunt per minuut</td></tr>
          <tr><td>Te laat aandoen van een tijdcontrole</td><td>1 strafpunt per minuut</td></tr>
          <tr><td>Missen van een tijdcontrole</td><td>30 strafpunten</td></tr>
          <tr><td>Meer dan 30 minuten te laat melden bij de start</td><td>uitsluiting</td></tr>
          <tr><td>Meer dan 60 minuten te laat finishen</td><td>uitsluiting</td></tr>
          {c.technical.regularityTest && (
            <>
              <tr><td>Te vroeg of te laat doorkomen bij een GTC gedurende een RP</td><td>1 strafpunt per seconde</td></tr>
              <tr><td>Missen van een GTC</td><td>30 strafpunten</td></tr>
              <tr><td>Maximale tijdstraf RP</td><td>30 strafpunten</td></tr>
            </>
          )}
          {c.technical.skillTest && (
            <>
              <tr><td>Langzamer dan de normtijd afleggen van een behendigheidsproef/test</td><td>1 strafpunt per seconde</td></tr>
              <tr><td>Het raken van een pylon</td><td>5 strafpunten per geval</td></tr>
              <tr><td>Het onjuist uitvoeren van een stop-à-cheval</td><td>5 strafpunten per geval</td></tr>
              <tr><td>Het niet uitvoeren van een stop-à-cheval</td><td>15 strafpunten per geval</td></tr>
              <tr><td>Het onjuist rijden van het parcours</td><td>30 strafpunten</td></tr>
              <tr><td>Maximale straf behendigheidsproef/test</td><td>30 strafpunten</td></tr>
            </>
          )}
          <tr><td>Overschrijding toegestane maximumsnelheid met meer dan 5 km/uur</td><td>30 strafpunten per 5 km/uur</td></tr>
        </tbody>
      </table>

      {/* SECTION 3: ROUTEBEPALINGEN */}
      <h1 id="routebepalingen">ROUTEBEPALINGEN</h1>

      <h2 id="algemene-kaartleesbepalingen">Algemene Kaartleesbepalingen</h2>

      <h3 id="de-kaart">De kaart</h3>
      <blockquote><p><strong>Het kaartfragment zelf</strong></p></blockquote>
      <ol>
        <li>Op een kaartfragment komen verschillende soorten wegen en paden voor. Onder kaartwegen worden die wegen verstaan die voorzien zijn van twee bermlijnen, waarvan er op elke plaats minimaal één ononderbroken is.</li>
        <li>Fietspaden, pontveren, voetbruggen of wegen in ontwerp zijn geen kaartwegen. Van tunnels in kaartwegen mag wel gebruik gemaakt worden.</li>
        <li>De rijbanen van wegen met gescheiden rijbanen dienen als afzonderlijke kaartwegen aangemerkt te worden.</li>
        <li>Een kaartweg die op de kaart als eenrichtingsweg is aangegeven mag niet in tegengestelde richting in de route opgenomen worden.</li>
        <li>Kaarttekens en kaartteksten onderbreken de doorgang niet, met uitzondering van het kaartteken wegafsluiting, dat de doorgang wél blokkeert.</li>
      </ol>

      <blockquote><p><strong>Door de organisatie/uitzetter op het kaartfragment aangebrachte zaken</strong></p></blockquote>
      <ol start={6}>
        <li>Bij een "kaartlas" kan het voorkomen dat de wegen niet helemaal perfect op elkaar aansluiten. Dat wordt geacht wél het geval te zijn.</li>
        <li>Op een kaartfragment aangebrachte tekens, stickers en tekstvakken onderbreken de daaronder gelegen kaartweg(en). Blokkadesymbolen blokkeren de eronder gelegen kaartwegen ook.</li>
        <li>Door de organisatie aangebrachte routesymbolen blokkeren de eronder gelegen kaartwegen in beginsel niet.</li>
        <li>Routesymbolen worden geacht uitsluitend op de onderliggende kaartweg te liggen.</li>
        <li>Kleine "uitwasjes" aan een pijl of ingetekende lijn worden geacht overeenkomstig de ter plaatse berijdbare situatie te zijn getekend.</li>
        <li>Een (deel van een) pijl of de ingetekende lijn mag niet in tegengestelde richting in de route opgenomen worden.</li>
        <li>Een pijl wordt op de kaart aangegeven door een lijnstuk met een pijlpunt.</li>
        <li>Om een punt is een cirkel geplaatst. De cirkel blokkeert de route niet.</li>
        <li>Cirkels of ellipsen die een quietzone aanduiden blokkeren de eronder gelegen kaartwegen ook niet.</li>
      </ol>

      <h3 id="de-constructie-van-de-route">De constructie van de route</h3>
      <ol>
        <li>Er mag bij de constructie van de voorgenomen route uitsluitend gebruik worden gemaakt van kaartwegen.</li>
        <li>Bij de constructie van de voorgenomen route is keren op de route niet toegestaan.</li>
        <li>Begin en eind van een traject mogen maar eenmaal in de route opgenomen worden.</li>
        <li>
          {c.routeRules.roadUsage === "once_one_direction" && "Tenzij in de systeembeschrijving anders vermeld is, mogen per kaartleestraject kaartwegen meer dan eens, maar slechts in één richting in de route worden opgenomen."}
          {c.routeRules.roadUsage === "multiple_both_directions" && "Tenzij in de systeembeschrijving anders vermeld is, mogen kaartwegen meer dan eens en in beide richtingen in de route worden opgenomen."}
          {c.routeRules.roadUsage === "per_system" && "Het aantal malen en de richting(en) waarin een (kaart)weg in de route opgenomen mag worden staat aangegeven in de systeembeschrijvingen."}
        </li>
        <li>
          Bij de routeconstructie{" "}
          {c.routeRules.considerTrafficRules
            ? "dient rekening gehouden te worden"
            : "hoeft geen rekening gehouden te worden"
          } met mogelijk ter plaatse geldende verkeersregels.
        </li>
        <li>Indien men reglementair de keuze heeft uit twee even lange routes, dan construeert men de route linksom.</li>
      </ol>

      <h3 id="het-rijden-van-de-route">Het rijden van de route</h3>
      <ol>
        <li>
          Wegen waarbij aan het begin van de weg een verkeersbord doodlopende weg staat, mogen{" "}
          {c.routeRules.deadEndRoadsAllowed ? "wel" : "niet"} worden ingereden als de kaartsituatie daartoe aanleiding geeft.
          Zichtbaar doodlopende wegen mogen NIET worden ingereden.
        </li>
        <li>Wegen met een bord "Eigen weg", "Bestemmingsverkeer", "Wandelgebied", "Verboden toegang voor onbevoegden" of borden van gelijke strekking mogen niet worden bereden.</li>
        <li>Op de kaartfragmenten kunnen zwarte cirkels geplaatst zijn. Binnen zo'n cirkel zal in het algemeen de werkelijke situatie afwijken van de situatie op de kaart. De route binnen de cirkel is vrij.</li>
        <li>Niet op de kaart staande rotondes zijn nooit aanleiding om te gaan omrijden.</li>
        <li>Indien een wegaansluiting minder dan {V(c.technical.deviationToleranceMeters, "M")} meter afwijkt van de wegaansluiting op de kaart, dan mag van de afwijkende wegaansluiting gebruik gemaakt worden.</li>
        <li>
          Voor de {c.classes.lowest.name}klasse geldt dat een grotere afwijking dan {V(c.technical.deviationToleranceMeters, "M")} meter
          niet voorkomt en dat een juist geconstrueerde route altijd gereden kan worden.
          {!c.routeRules.lowestClassMustDetour && " Deze klasse hoeft dus nooit een omweg te construeren."}
        </li>
      </ol>

      {/* 3.2 Herstelopdrachten bij controles */}
      <h2 id="herstelopdrachten-bij-controles">Herstelopdrachten bij controles</h2>
      <p>
        <mark>Bij het verschijnen van een controle in de app kan een (herstel)opdracht vermeld</mark> worden, die met voorrang
        op de routeopdracht uitgevoerd moet worden. In onderstaande opsomming treft u de codes aan die daarbij gebruikt kunnen worden:
      </p>
      <p>1R eerste weg rechts;</p>
      <p>AR asfaltweg rechts;</p>
      <p>ER einde weg rechts;</p>
      <p>HK hier keren;</p>
      <p>ROT 3R op rotonde derde weg rechts;</p>
      <p>VR voorrangskruising rechts;</p>
      <p>VO voorrangskruising oversteken;</p>
      <p>XR viersprong rechts;</p>
      <p>XO viersprong oversteken.</p>
      <p><em>Bovenstaande herstelopdrachten refereren aan de situatie in het veld</em></p>
      <p>NVO niet verder omrijden, vervolg de voorgenomen route;</p>
      <p>DMIL niet (verder) omrijden, doorgaan met de ingetekende lijn;</p>
      <p>DMG niet (verder) omrijden, doorgaan met grensbenaderen;</p>
      <p>DMP 2 bij bol-pijl doorgaan met opdracht 2; bij kaartlezen nieuwe route naar punt/pijl 2 construeren en rijden.</p>

      {/* 3.3 Systeembeschrijvingen */}
      <h2 id="systeembeschrijvingen">Systeembeschrijvingen</h2>

      {c.navigationSystems.ingetekendeLijn && (
        <>
          <h3 id="ingetekende-lijn">Ingetekende Lijn</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt dient de op de kaart ingetekende lijn (IL) zo nauwkeurig mogelijk bereden te worden.</li>
            <li>De IL (of een deel daarvan) mag alleen bereden worden in de richting die gevolgd moet worden om van het begin naar het eind van de IL te komen.</li>
            <li>(Delen van) de IL mogen meer dan eens in de route opgenomen worden (dit komt alleen voor bij omrijden).</li>
          </ol>
        </>
      )}

      {c.navigationSystems.ingetekendeLijnBarricades && (
        <>
          <h3 id="ingetekende-lijn-met-barricades-baril">Ingetekende Lijn met barricades (BARIL)</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt dient de op de kaart ingetekende lijn (IL) zo nauwkeurig mogelijk bereden te worden, waarbij de barricades ontweken moeten worden.</li>
            <li>De IL (of een deel daarvan) mag alleen bereden worden in de richting die gevolgd moet worden om van het begin naar het eind van de IL te komen.</li>
            <li>(Delen van) de IL mogen meer dan eens in de route opgenomen worden.</li>
            <li>De IL wordt onderbroken door genummerde barricades (dwarsstreepjes). Het is niet toegestaan om een weggedeelte dat voorzien is van een barricade te berijden.</li>
            <li>Het samenstel van (de wél te rijden delen van) de IL en de nevenroutes vormt de voorgenomen route.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.grensbenadering && (
        <>
          <h3 id="grensbenadering">Grensbenadering</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt dient over kaartwegen een aaneengesloten route te worden geconstrueerd, waarbij de kaartrand of een op de kaart aangebrachte lijn zo dicht mogelijk in de in de routeopdracht aangegeven richting wordt benaderd.</li>
            <li>Het benaderen van de grenslijn dient zodanig te gebeuren, dat in volgorde van belangrijkheid: de grenslijn niet overschreden wordt; het oppervlak tussen de grenslijn en de te rijden route zo klein mogelijk is; de route zo kort mogelijk is.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.pijlenKortste.enabled && (
        <>
          <h3 id="pijlen-kortste-route">Pijlen {c.navigationSystems.pijlenKortste.secondShortest && "op één na "}kortste route</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt, dient over kaartwegen een aaneengesloten route te worden geconstrueerd, waarin alle pijlen van begin tot eind en in oplopende nummervolgorde zijn opgenomen.</li>
            <li>(Delen van) pijlen mogen meer dan eens in de route opgenomen worden.</li>
            <li>Op weg naar een pijl of het eind van het routegedeelte waarvoor dit systeem geldt, dient met inachtneming van het bovenstaande steeds de {c.navigationSystems.pijlenKortste.secondShortest && "op één na "}kortste route te worden geconstrueerd.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.blokkerendePijlen.enabled && (
        <>
          <h3 id="blokkerende-pijlen">Blokkerende pijlen {c.navigationSystems.blokkerendePijlen.secondShortest && "op één na "}kortste route</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt, dient over kaartwegen een aaneengesloten route te worden geconstrueerd, waarin alle pijlen van begin tot eind en in oplopende nummervolgorde zijn opgenomen.</li>
            <li>Elke pijl mag maar eenmaal in de route opgenomen worden. In alle andere gevallen blokkeren ze de eronder liggende weggedeelten.</li>
            <li>Op weg naar een pijl of het eind van het routegedeelte waarvoor dit systeem geldt, dient met inachtneming van het bovenstaande steeds de {c.navigationSystems.blokkerendePijlen.secondShortest && "op één na "}kortste route te worden geconstrueerd.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.pijlenKleurbeperking.enabled && (
        <>
          <h3 id="pijlen-kortste-route-met-kleurbeperking">Pijlen kortste route met kleurbeperking</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt, dient over kaartwegen een aaneengesloten route te worden geconstrueerd, waarin alle pijlen van begin tot eind en in oplopende nummervolgorde zijn opgenomen.</li>
            <li>De kleur van de kaartweg onder een pijl wordt geacht {V(c.navigationSystems.pijlenKleurbeperking.color1, "kleur1")} te zijn.</li>
            <li>(Delen van) pijlen mogen meer dan eens in de route opgenomen worden.</li>
            <li>Op weg naar een pijl dient over een zo kort mogelijke afstand gebruik gemaakt te worden van {V(c.navigationSystems.pijlenKleurbeperking.color2, "kleur2")} gekleurde kaartwegen.</li>
            <li>Op weg naar een pijl dient steeds de kortste route te worden geconstrueerd.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.pijlenBarricades && (
        <>
          <h3 id="pijlen-kortste-route-met-barricades">Pijlen kortste route met barricades</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt, dient over kaartwegen een aaneengesloten route te worden geconstrueerd, waarin eerst een hoofdroute vastgesteld wordt zonder rekening te houden met barricades en daarna nevenroutes om de barricades heen geconstrueerd moeten worden.</li>
            <li>(Delen van) pijlen mogen meer dan eens in de route opgenomen worden.</li>
            <li>De hoofdroute ontstaat door met inachtneming van het bovenstaande alle pijlen van begin tot eind en in oplopende nummervolgorde in de route op te nemen, waarbij op weg naar een pijl steeds de kortste route wordt geconstrueerd.</li>
            <li>De hoofdroute kan op de pijlen onderbroken worden door barricades (dwarsstreepjes). Het is niet toegestaan om een weg of weggedeelte dat voorzien is van een barricade te berijden.</li>
            <li>Het samenstel van (de wél te rijden delen van) de hoofdroute en de nevenroutes vormt de voorgenomen route.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.puntenKortste.enabled && (
        <>
          <h3 id="punten-kortste-route">Punten {c.navigationSystems.puntenKortste.secondShortest && "op één na "}kortste route</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt, dient over kaartwegen een aaneengesloten route te worden geconstrueerd, waarin alle punten in oplopende nummervolgorde zijn opgenomen.</li>
            <li>Punten mogen meer dan eens in de route opgenomen worden.</li>
            <li>Op weg naar een punt dient steeds de {c.navigationSystems.puntenKortste.secondShortest && "op één na "}kortste route te worden geconstrueerd.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.blokkerendePunten.enabled && (
        <>
          <h3 id="blokkerende-punten">Blokkerende punten {c.navigationSystems.blokkerendePunten.secondShortest && "op één na "}kortste route</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt, dient over kaartwegen een aaneengesloten route te worden geconstrueerd, waarin alle punten in oplopende nummervolgorde zijn opgenomen.</li>
            <li>Elk punt mag maar eenmaal in de route opgenomen worden. In alle andere gevallen blokkeren ze de eronder liggende weggedeelten.</li>
            <li>Op weg naar een punt dient steeds de {c.navigationSystems.blokkerendePunten.secondShortest && "op één na "}kortste route te worden geconstrueerd.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.kompasPunten && (
        <>
          <h3 id="kompaspunten">Kompaspunten</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt, dient over kaartwegen een aaneengesloten route te worden geconstrueerd, waarin alle punten in oplopende nummervolgorde zijn opgenomen.</li>
            <li>Van een punt kan in de routeopdracht zijn aangegeven vanuit welke rijrichting men dit punt moet aandoen en welke rijrichting gekozen moet worden bij het verlaten van het punt.</li>
            <li>Punten mogen meer dan eens in de route opgenomen worden.</li>
            <li>Op weg naar een punt dient steeds de kortste route te worden geconstrueerd.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.puntenOnbekend && (
        <>
          <h3 id="punten-onbekend">Punten onbekend</h3>
          <ol>
            <li>Vanaf het begin van het routegedeelte waarvoor dit systeem geldt dient volgens onderstaande regels steeds een route naar een volgend punt te worden geconstrueerd en gereden.</li>
            <li>Op de kaart bevinden zich punten die zijn aangeduid met een letter.</li>
            <li>Elk punt mag maar eenmaal in de route opgenomen worden. In alle andere gevallen blokkeren punten de eronder liggende weggedeelten.</li>
            <li>Vanaf het begin van het routegedeelte dient de kortste route naar punt A geconstrueerd en gereden te worden.</li>
            <li>Op elk punt staat een routecontrole met een letter. Deze letter geeft het volgende punt aan.</li>
            <li>Het eind van het routegedeelte is punt Z.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.puntenVrijeRoute.enabled && (
        <>
          <h3 id="punten-vrije-route">Punten vrije route</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt, dient een route te worden geconstrueerd, waarin alle punten in oplopende nummervolgorde zijn opgenomen.</li>
            <li>Op een punt kan een controle staan. De controle bevindt zich dan binnen een straal van {c.navigationSystems.puntenVrijeRoute.radius} meter van het punt.</li>
            <li>Punten mogen meer dan eens in de route opgenomen worden.</li>
            <li>Op weg naar een punt mag een vrije route gereden worden en er mag gekeerd worden.</li>
            <li>Voor het bepalen van de lengte van de rit is de kortste route aangehouden.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.vakkenLangste && (
        <>
          <h3 id="vakken-langste-route">Vakken langste route</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt dient over kaartwegen een aaneengesloten route te worden geconstrueerd, waarin alle vakken in oplopende nummervolgorde zijn opgenomen.</li>
            <li>Een vak is een door lijnen begrensde ruimte op de kaart. De begrenzing van een vak mag slechts tweemaal overschreden worden.</li>
            <li>Binnen de vakken dient een zo lang mogelijke route geconstrueerd en gereden te worden.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.tSystemen && (
        <>
          <h3 id="t-systeem">T-systeem</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt, dient over kaartwegen een aaneengesloten route te worden geconstrueerd, waarin alle T's in hun geheel en in oplopende nummervolgorde zijn opgenomen.</li>
            <li>Een T is een samenstel van drie lijnstukken in de vorm van de letter T.</li>
            <li>(Delen van) lijnstukken van een T mogen meer dan eens in de route opgenomen worden. Het is echter NIET toegestaan de bovenbalk van een T in één keer in de route op te nemen.</li>
            <li>De voorgenomen route ontstaat door steeds eerst de kortste route naar de eerstvolgende T te construeren en daarna de kortst mogelijke route om alle lijnstukken van die T in de route op te nemen.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.routebeschrijvingOpKaart && (
        <>
          <h3 id="routebeschrijving-op-kaart">Routebeschrijving op kaart</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt dient over kaartwegen een aaneengesloten route te worden geconstrueerd door alle op het kaartfragment vermelde opdrachten in oplopende nummervolgorde uit te voeren.</li>
            <li>Er bestaan twee soorten opdrachten: <strong>door oriënteringspunt</strong> en <strong>langs oriënteringspunt</strong>.</li>
            <li>Met de opdracht <strong>door</strong> oriënteringspunt dient men over kaartwegen de kortste route te construeren naar het punt waar men het oriënteringspunt 'inrijdt'.</li>
            <li>Met de opdracht <strong>langs</strong> oriënteringspunt dient men over kaartwegen de kortste route te construeren naar het punt dat zo dicht mogelijk naast het oriënteringspunt ligt.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.bolPijl && (
        <>
          <h3 id="bol-pijl">Bol-pijl (met of zonder afstanden)</h3>
          <ol>
            <li>Aan de hand van bol-pijlopdrachten, bestaande uit situatieschetsen met eventueel aanvullende aanduidingen, dient met inachtneming van de hiernavolgende bepalingen steeds de kortste route te worden gereden van de bol naar de punt van de pijl.</li>
            <li>Bij een situatieschets kan de afstand vanaf de vorige bol‐pijlsituatie en de totaalafstand zijn aangegeven.</li>
            <li>De bol-pijlopdrachten dienen in nummervolgorde uitgevoerd te worden.</li>
            <li>De situatieschetsen zijn niet op schaal getekend.</li>
            <li>Verharde wegen zijn getekend middels een ononderbroken lijn.</li>
            <li>Onverharde wegen zijn getekend middels een onderbroken lijn (stippellijn).</li>
            <li>Doodlopende wegen en wegen die verboden zijn om in te rijden mogen niet worden ingereden.</li>
            <li>Alle verharde wegen die op de werkelijke situatie uitkomen zijn in de situatieschets opgenomen.</li>
            <li>Tussen de bol‐pijlopdrachten dient men de doorgaande (hoofd)weg te volgen.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.visgraat && (
        <>
          <h3 id="visgraat-striprit">Visgraat (Striprit)</h3>
          <ol>
            <li>De visgraat is een rechte lijn met links en rechts dwarsstreepjes.</li>
            <li>Men dient de visgraat van beneden naar boven te lezen en te rijden.</li>
            <li>De rechte verticale lijn is de route die men rijdt. Ieder dwarsstreepje is een weg die men dient te laten liggen.</li>
            <li>Ononderbroken dwarsstreepjes geven verharde wegen en onderbroken (gestippelde) dwarsstreepjes geven onverharde wegen aan.</li>
            <li>Alle verharde wegen die men dient te laten liggen zijn in de visgraat opgenomen.</li>
          </ol>
        </>
      )}

      {c.navigationSystems.pijlenEnPuntenGecombineerd.enabled && (
        <>
          <h3 id="pijlen-en-punten-gecombineerd">Pijlen en punten gecombineerd</h3>
          <ol>
            <li>Van het begin tot het eind van het routegedeelte waarvoor dit systeem geldt, dient over kaartwegen een aaneengesloten route te worden geconstrueerd, waarin alle op het kaartfragment voorkomende punten en pijlen in nummervolgorde zijn opgenomen.</li>
            <li>De punten en pijlen zijn aangeduid met rode, witte of groene "stickers".</li>
            <li>Naar een punt of pijl met een rode sticker dient de kortste route geconstrueerd te worden.</li>
            <li>Naar een punt of pijl met een witte sticker dient de één na kortste route geconstrueerd te worden.</li>
            <li>Naar een punt of pijl met een groene sticker dient een vrije route geconstrueerd te worden.</li>
            <li>Op weg naar een punt of pijl met een groene sticker is de route vrij en mag gebruik gemaakt worden van niet op de kaart voorkomende wegen.</li>
          </ol>
        </>
      )}

      <h3 id="de-constructie-van-een-omweg">De constructie van een omweg (alleen {c.classes.highest.name}- en {c.classes.middle.name}klasse)</h3>
      <ol>
        <li>
          Indien een weg of weggedeelte niet bereden kan of mag worden, dan dient men vanaf dat punt een omweg te construeren
          over kaartwegen naar een punt waarop men de voorgenomen route kan opnemen, waarbij in volgorde van belangrijkheid geldt dat:
          <ol type="a">
            <li>zo min mogelijk van de voorgenomen route wordt overgeslagen;</li>
            <li>bij het construeren van de omweg dezelfde beperkingen/regels gelden m.b.t. het gebruik van wegen als bij de routeconstructie;</li>
            <li>de omweg zo kort mogelijk is.</li>
          </ol>
        </li>
        <li>Indien een kaartweg overgaat in een niet op de kaart staande weg en geen mogelijkheid bestaat de route voort te zetten via kaartwegen, dan volgt men de niet op de kaart staande weg tot men een kaartweg bereikt.</li>
        <li>Indien de omweg niet (verder) te rijden is, dan vervalt die omweg en construeert men een nieuwe omweg.</li>
        <li>
          Indien een weg die men wil inrijden niet aanwezig is of vanuit beide richtingen gesloten/verboden voor auto's is,
          dan mag de betreffende weg {c.routeRules.detourOppositeDirectionAllowed ? "wel" : "niet"} tegengesteld in die omweg worden opgenomen.
        </li>
      </ol>

      {/* BIJLAGE A - Vrijwaringverklaring */}
      <h2 id="bijlage-a-vrijwaringverklaring">Bijlage A – Vrijwaringverklaring</h2>
      <p>
        De ondergetekenden, hierna gezamenlijk te noemen "de equipe", bestaande uit een bestuurder en een navigator,
        verklaren hierbij deel te nemen aan de {V(c.event.name, "naam van het evenement")}, hierna te noemen "het evenement",
        georganiseerd door de {V(c.event.organizationName, "naam van de organisatie")}, hierna te noemen "de organisator".
      </p>
      <p>De ondergetekenden verklaren het volgende:</p>
      <ol>
        <li>De auto waarmee de equipe deelneemt aan het evenement verkeert in een technisch goede staat, is geschikt voor gebruik op de openbare weg, is verzekerd tegen de risico's van schade aan derden als bedoeld in de Wet Aansprakelijkheidsverzekering Motorrijtuigen (de W.A.M.) en deelname aan het evenement is tevens onder deze verzekering gedekt.</li>
        <li>De equipe aanvaardt dat de organisator in voorkomend geval niet aansprakelijk is voor schade, ongeacht waaruit die schade bestaat of hoe die schade is ontstaan, die de equipe in verband met (voorgenomen) deelname aan het evenement lijdt dan tot maximaal het bedrag dat de equipe voor de deelname aan het evenement heeft betaald.</li>
        <li>De leden van de equipe verkeren in goede gezondheid en zijn in staat en voldoende bekwaam om aan het evenement deel te nemen.</li>
        <li>De equipe erkent en aanvaardt de aard van het evenement en de daarmee samenhangende risico's.</li>
        <li>De equipe kent de bepalingen van het reglement dat op het evenement van toepassing is en zal het daarin bepaalde naleven.</li>
        <li>De bestuurder beschikt over een geldig rijbewijs en is bevoegd het voertuig, waarmee de equipe aan het evenement deelneemt, te besturen.</li>
        <li>De equipe verleent aan de organisator toestemming om de equipe en de auto waarmee de equipe aan het evenement deelneemt te fotograferen en/of te filmen en om deze foto's dan wel filmpjes publicitair te gebruiken.</li>
      </ol>
      <p>Aldus getekend te _____________________ op _________________________________</p>
      <p><strong>De equipe:</strong> <strong>Startnummer</strong> ______________________</p>
      <p>De bestuurder _____________________ De navigator ______________________</p>
      <p>Handtekening _____________________ Handtekening ______________________</p>

      {/* BIJLAGE B - Calamiteitenprocedure */}
      <h2 id="bijlage-b-calamiteitenprocedure">Bijlage B – Calamiteitenprocedure</h2>

      <h3 id="wat-is-een-calamiteit">Wat is een calamiteit?</h3>
      <p>Er is sprake van een calamiteit wanneer:</p>
      <ol>
        <li>de wedstrijdleiding besluit dat er sprake is van een calamiteit of;</li>
        <li>er sprake is van een ongeval waarbij een deelnemer en/of official betrokken is en waarbij meer dan alleen sprake is van "blikschade";</li>
      </ol>

      <h3 id="alarmering-binnen-de-organisatie">Alarmering binnen de organisatie</h3>
      <p>Wordt een calamiteit geconstateerd dan wordt direct contact opgenomen met het:</p>
      <p>CALAMITEITENTEAM: {V(c.organization.emergencyHead.name, "naam calamiteitenhfd")}</p>
      <p>TELEFOON: {V(c.organization.emergencyHead.phone, "telefoonnummer calamiteitenhfd")}</p>

      <h3 id="opsomming-activiteiten">Opsomming activiteiten</h3>
      <ol>
        <li>Denk om je eigen veiligheid (en die van anderen).</li>
        <li>Is 1-1-2 al gebeld? Als "elke seconde telt", bel dan direct 1‐1‐2.</li>
        <li>Alarmeer zo snel mogelijk het Hoofd Calamiteitenteam.</li>
        <li>Geef kort en bondig, doch zo volledig mogelijk informatie.</li>
        <li>Beschrijf wat er is gebeurd: Wie, Wat, Waar, Wanneer.</li>
        <li>Beschrijf wat je hebt gedaan en overleg wat nog gedaan moet worden en door wie.</li>
        <li>Zorg ervoor dat je bereikbaar bent en blijft!</li>
        <li>Betracht absolute discipline.</li>
        <li>Informatie over calamiteiten dient alleen verstrekt te worden aan het calamiteitenteam en aan externe hulpdiensten.</li>
        <li>Beveilig eventueel de plaats van het ongeval.</li>
        <li>Verleen indien dit mogelijk is eerste hulp.</li>
        <li>Houdt eventueel het publiek op veilige afstand.</li>
        <li>Volg altijd de instructies van hulpverleners op.</li>
        <li>Noteer informatie (namen, tijden, naar welk ziekenhuis, etc.).</li>
        <li>Informeer de wedstrijdleiding over de voortgang van externe hulpdiensten.</li>
      </ol>

      <h3 id="veiligheidsregels">Veiligheidsregels</h3>
      <ol>
        <li>Blijf kalm en beheerst, ook in je berichtgeving.</li>
        <li>Geef je informatie kort, bondig en zakelijk door: wie ‐ wat ‐ waar en wanneer.</li>
        <li>Neem in verband met je eigen veiligheid nooit risico's.</li>
        <li>Indien het calamiteitenteam u opdraagt extra (veiligheids)maatregelen in acht te nemen, doe dit dan onmiddellijk.</li>
      </ol>

      {/* BIJLAGE C - Legenda */}
      {c.routeRules.legendLocation === "appendix" && (
        <>
          <h2 id="bijlage-c-legenda">Bijlage C – Legenda</h2>
          <p>(De legenda van de gebruikte topografische kaarten dient hier opgenomen te worden.)</p>
        </>
      )}
    </article>
  );
}

export default Reglement;

