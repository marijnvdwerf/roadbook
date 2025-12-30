# NRF Reglement Generator - Configuratie Variabelen

Dit document beschrijft alle variabelen die ingevuld moeten worden om een compleet reglement te genereren.

---

## 1. Evenement Informatie

| Variabele | Beschrijving |
|-----------|-------------|
| `event.name` | Naam van het evenement |
| `event.organizationName` | Naam van de organiserende club/stichting |
| `event.date` | Datum van het evenement |
| `event.area` | Wedstrijdgebied (bijv. "Noordoost-Nederland", "provincie Gelderland") |
| `event.routeLengthKm` | Geschatte routelengte in kilometers |
| `event.website` | Website van het evenement |
| `event.approvalDate` | Datum van goedkeuring door NRF Reglementencommissie |
| `event.approvalNumber` | Goedkeuringsnummer van de NRF |

### Kampioenschappen

Geef aan voor welke kampioenschappen het evenement meetelt:

| Variabele | Beschrijving |
|-----------|-------------|
| `event.championships.nrfKlassiek` | Telt mee voor NRF Klassiek kampioenschap |
| `event.championships.nrfKaartlezen` | Telt mee voor NRF Kaartlezen kampioenschap |
| `event.championships.nkHistorisch` | Telt mee voor NK Historische Rally's (DHRC) |

> **Let op:** Bij NK Historisch kunnen alleen klassiekers met bouwjaar vóór 1991 punten vergaren.

---

## 2. Organisatie

### Wedstrijdsecretariaat

| Variabele | Beschrijving |
|-----------|-------------|
| `organization.secretary.name` | Naam wedstrijdsecretaris |
| `organization.secretary.email` | E-mailadres wedstrijdsecretaris |
| `organization.secretary.phone` | Telefoonnummer wedstrijdsecretaris |

### Organisatiecomité

| Variabele | Beschrijving |
|-----------|-------------|
| `organization.chairman` | Naam voorzitter organisatiecomité |
| `organization.committeeMembers` | Lijst met namen van commissieleden |
| `organization.routeSetters` | Lijst met namen van uitzetter(s) |
| `organization.routeCheckers` | Lijst met namen van narijder(s) |

### Functionarissen

| Variabele | Beschrijving |
|-----------|-------------|
| `organization.raceDirector.name` | Naam wedstrijdleider |
| `organization.raceDirector.phone` | Telefoonnummer wedstrijdleider |
| `organization.emergencyHead.name` | Naam hoofd calamiteitenteam |
| `organization.emergencyHead.phone` | Telefoonnummer hoofd calamiteitenteam |
| `organization.contactPerson.name` | Naam contactpersoon voor deelnemers tijdens rit |
| `organization.contactPerson.phone` | Telefoonnummer contactpersoon |
| `organization.serviceTeam.name` | Naam serviceteam (of "geen" als niet aanwezig) |
| `organization.serviceTeam.phone` | Telefoonnummer serviceteam |

> **Serviceteam:** Dit is optioneel. Het serviceteam kan deelnemers met pech onderweg helpen. Vul "geen" in als er geen serviceteam is.

---

## 3. Locaties

### Startlocatie

| Variabele | Beschrijving |
|-----------|-------------|
| `location.startLocation.name` | Naam startlocatie (bijv. restaurantnaam) |
| `location.startLocation.address` | Volledig adres (straat, huisnummer, postcode, plaats) |
| `location.startLocation.phone` | Telefoonnummer startlocatie |
| `location.startTime` | Starttijd eerste equipe |
| `location.publicationTime` | Tijdstip uitreiking routeboek |

### Finishlocatie

| Variabele | Beschrijving |
|-----------|-------------|
| `location.sameAsStart` | Finish op zelfde locatie als start? |
| `location.finishLocation.name` | Naam finishlocatie |
| `location.finishLocation.address` | Volledig adres finishlocatie |
| `location.finishLocation.phone` | Telefoonnummer finishlocatie |
| `location.finishTime` | Verwachte finishtijd eerste equipe |
| `location.prizeTime` | Tijdstip prijsuitreiking |
| `location.onlineResultsDate` | Datum publicatie einduitslag op website |

---

## 4. Inschrijving

### Data

| Variabele | Beschrijving |
|-----------|-------------|
| `registration.openingDate` | Datum opening inschrijving |
| `registration.closingDate` | Datum sluiting inschrijving |
| `registration.publicationDate` | Datum publicatie reglement |
| `registration.acceptanceDate` | Datum verzending acceptatiebericht |
| `registration.documentCheckDate` | Datum/tijdstip documentencontrole |

### Financieel

| Variabele | Beschrijving |
|-----------|-------------|
| `registration.fee` | Inschrijfgeld in euro's |
| `registration.iban` | IBAN bankrekeningnummer van de organisatie |
| `registration.maxParticipants` | Maximum aantal equipes |

### Voertuigen

| Variabele | Beschrijving |
|-----------|-------------|
| `registration.allowModernVehicles` | Worden moderne auto's (< 30 jaar) toegelaten? |
| `registration.modernVehicleCategories` | Welke categorieën moderne auto's (indien van toepassing) |

> **Klassiekers vs Moderne auto's:** Een klassieker is een auto van minimaal 30 jaar oud. Bij historische ritten worden vaak alleen klassiekers toegelaten, maar sommige evenementen laten ook modernere auto's toe (in aparte klassementen).

### Teamregistratie

| Variabele | Beschrijving |
|-----------|-------------|
| `registration.teamRegistration.enabled` | Kunnen teams ingeschreven worden? |
| `registration.teamRegistration.cost` | Kosten teaminschrijving (0 = gratis) |
| `registration.teamRegistration.method` | Inschrijfmethode: `website` of `onsite` |

> **Teams:** Een team bestaat uit 3-5 equipes die gezamenlijk strijden om een teamklassement. Teams hoeven niet in dezelfde klasse uit te komen.

---

## 5. Klassen

De rit wordt verreden in drie klassen met oplopende moeilijkheidsgraad:

| Variabele | Beschrijving |
|-----------|-------------|
| `classes.highest.name` | Naam hoogste klasse (bijv. "Expert", "Master", "Ster") |
| `classes.highest.description` | Omschrijving hoogste klasse |
| `classes.middle.name` | Naam middelste klasse (bijv. "Sport", "Sporting") |
| `classes.middle.description` | Omschrijving middelste klasse |
| `classes.lowest.name` | Naam laagste klasse (bijv. "Toer", "Tour", "Touring") |
| `classes.lowest.description` | Omschrijving laagste klasse |

> **Klassenindeling:** De hoogste klasse is voor zeer ervaren deelnemers met de moeilijkste opdrachten. De laagste klasse is de instapklasse met eenvoudigere opdrachten en meer hulp.

---

## 6. Technische Instellingen

### Kaartmateriaal

| Variabele | Beschrijving |
|-----------|-------------|
| `technical.mapScales` | Gebruikte kaartschalen (bijv. "1:50.000" of "1:50.000 en 1:100.000") |

### Controles

| Variabele | Beschrijving |
|-----------|-------------|
| `technical.controlType` | Type controles: `physical`, `virtual`, of `combined` |
| `technical.appName` | Naam van de app voor virtuele controles |
| `technical.appManualUrl` | URL naar handleiding van de app |

> **Controletype:**
> - `physical`: Fysieke routecontroleborden, stempelcontroles, bemande controles
> - `virtual`: Controles verschijnen in een app (bijv. Rallyblad, TulipLink)
> - `combined`: Mix van fysiek en virtueel

### Routepijlen

| Variabele | Beschrijving |
|-----------|-------------|
| `technical.routeArrows.enabled` | Worden routepijlen gebruikt? |
| `technical.routeArrows.type` | Type: `physical` of `virtual` |
| `technical.routeArrows.inscription` | Opschrift op de routepijlen (bijv. clubnaam of evenementnaam) |

> **Routepijlen:** Pijlen langs de route die de juiste richting aangeven, vaak gebruikt bij omleidingen of onduidelijke situaties.

### Proeven

| Variabele | Beschrijving |
|-----------|-------------|
| `technical.regularityTest` | Bevat de rit een regelmatigheidsproef (RP)? |
| `technical.skillTest` | Bevat de rit een behendigheidsproef/test? |

> **Regelmatigheidsproef (RP):** Een traject waar je een exacte gemiddelde snelheid moet rijden. Afwijkingen worden per seconde bestraft. Geheime tijdcontroles (GTC's) meten je tijd.

> **Behendigheidsproef:** Een parcours met pylonen op afgesloten terrein. Je moet binnen een normtijd blijven en pylonen niet raken.

### Overig

| Variabele | Beschrijving |
|-----------|-------------|
| `technical.deviationToleranceMeters` | Tolerantie in meters voor afwijkende wegaansluitingen |
| `technical.quietZones.unpavedRoadsAutomatic` | Zijn onverharde wegen automatisch quietzones? |

> **Afwijkingstolerantie:** Als een wegaansluiting in werkelijkheid minder dan X meter afwijkt van de kaart, mag je de afwijkende aansluiting gebruiken. Typisch 50-100 meter.

> **Quietzones:** Gebieden waar rustig gereden moet worden (max 30 km/u) om overlast voor omwonenden te beperken.

---

## 7. Routebepalingen

### Weggebruik

| Variabele | Beschrijving |
|-----------|-------------|
| `routeRules.roadUsage` | Regel voor weggebruik (zie onder) |
| `routeRules.considerTrafficRules` | Moet bij routeconstructie rekening gehouden worden met verkeersregels? |
| `routeRules.deadEndRoadsAllowed` | Mogen doodlopende wegen ingereden worden? |
| `routeRules.lowestClassMustDetour` | Moet de laagste klasse ook omrijden bij routeonderbrekingen? |
| `routeRules.detourOppositeDirectionAllowed` | Mag een weg tegengesteld in een omweg worden opgenomen? |

> **Weggebruik opties:**
> - `once_one_direction`: Wegen mogen meer dan eens, maar slechts in één richting in de route
> - `multiple_both_directions`: Wegen mogen meer dan eens en in beide richtingen
> - `per_system`: Staat per navigatiesysteem aangegeven

### Legenda

| Variabele | Beschrijving |
|-----------|-------------|
| `routeRules.legendLocation` | Waar staat de legenda: `appendix`, `routebook`, of `separate` |

---

## 8. Ex Aequo (Gelijke Stand)

| Variabele | Beschrijving |
|-----------|-------------|
| `tieBreaker.primary` | Primaire beslissingsmethode: `ex_aequo_control` of `regularity_test` |
| `tieBreaker.controlName` | Naam/nummer van de ex-aequo controle (indien van toepassing) |
| `tieBreaker.secondary` | Secundaire beslissingsmethode (zie onder) |

> **Bij gelijke stand:** Als twee equipes evenveel strafpunten hebben, bepaalt eerst de primaire methode de rangschikking. Als dat geen beslissing geeft, wordt de secundaire methode gebruikt.

> **Secundaire opties:**
> - `heaviest_section`: Equipe met minste strafpunten in zwaarste traject wint
> - `oldest_car`: Equipe met oudste auto wint
> - `draw`: Loting

---

## 9. Navigatiesystemen

Selecteer welke navigatiesystemen in het evenement voorkomen:

### Lijn-gebaseerd

| Variabele | Beschrijving |
|-----------|-------------|
| `navigationSystems.ingetekendeLijn` | Ingetekende Lijn (IL) |
| `navigationSystems.ingetekendeLijnBarricades` | Ingetekende Lijn met barricades (BARIL) |
| `navigationSystems.grensbenadering` | Grensbenadering |

> **Ingetekende Lijn:** Een lijn op de kaart die zo nauwkeurig mogelijk gevolgd moet worden.

> **BARIL:** Ingetekende lijn met barricades (dwarsstreepjes) die ontweken moeten worden via nevenroutes.

> **Grensbenadering:** Rijd zo dicht mogelijk langs een grens (kaartrand of lijn) in een aangegeven richting.

### Pijlsystemen

| Variabele | Beschrijving |
|-----------|-------------|
| `navigationSystems.pijlenKortste.enabled` | Pijlen kortste route |
| `navigationSystems.pijlenKortste.secondShortest` | Op één na kortste route |
| `navigationSystems.blokkerendePijlen.enabled` | Blokkerende pijlen |
| `navigationSystems.blokkerendePijlen.secondShortest` | Op één na kortste route |
| `navigationSystems.pijlenKleurbeperking.enabled` | Pijlen met kleurbeperking |
| `navigationSystems.pijlenKleurbeperking.color1` | Kleur onder de pijl |
| `navigationSystems.pijlenKleurbeperking.color2` | Te vermijden kleur |
| `navigationSystems.pijlenBarricades` | Pijlen kortste route met barricades |

> **Blokkerende pijlen:** Elke pijl mag maar één keer in de route. Daarna blokkeert de pijl de onderliggende weg.

> **Kleurbeperking:** Minimaliseer het gebruik van wegen van een bepaalde kleur (bijv. gele wegen = onverhard).

### Puntensystemen

| Variabele | Beschrijving |
|-----------|-------------|
| `navigationSystems.puntenKortste.enabled` | Punten kortste route |
| `navigationSystems.puntenKortste.secondShortest` | Op één na kortste route |
| `navigationSystems.blokkerendePunten.enabled` | Blokkerende punten |
| `navigationSystems.blokkerendePunten.secondShortest` | Op één na kortste route |
| `navigationSystems.kompasPunten` | Kompaspunten |
| `navigationSystems.puntenOnbekend` | Punten onbekend |
| `navigationSystems.puntenVrijeRoute.enabled` | Punten vrije route |
| `navigationSystems.puntenVrijeRoute.radius` | Zoekradius in meters rond punt |

> **Kompaspunten:** Bij sommige punten staat aangegeven vanuit welke richting je moet komen of vertrekken.

> **Punten onbekend:** Je weet niet welk punt het volgende is. Op elk punt staat een controle met een letter die het volgende punt aangeeft.

> **Punten vrije route:** Je mag elke route kiezen naar het punt, inclusief keren en niet-kaart-wegen.

### Overige systemen

| Variabele | Beschrijving |
|-----------|-------------|
| `navigationSystems.vakkenLangste` | Vakken langste route |
| `navigationSystems.tSystemen` | T-systemen |
| `navigationSystems.routebeschrijvingOpKaart` | Routebeschrijving op kaart |
| `navigationSystems.bolPijl` | Bol-pijl |
| `navigationSystems.visgraat` | Visgraat (striprit) |
| `navigationSystems.pijlenEnPuntenGecombineerd.enabled` | Pijlen en punten gecombineerd |
| `navigationSystems.pijlenEnPuntenGecombineerd.radius` | Zoekradius voor groene punten |

> **Vakken langste route:** Rijd de langst mogelijke route binnen afgebakende vakken.

> **T-systemen:** Rijd alle drie de "poten" van een T-vorm, maar niet de bovenbalk in één keer.

> **Bol-pijl:** Situatieschetsen tonen een vertrekpunt (bol) en aankomstpunt (pijl). Rijd de kortste route.

> **Visgraat:** Een verticale lijn met dwarsstreepjes. Elk streepje is een weg die je NIET inrijdt.

> **Pijlen en punten gecombineerd:** Rode = kortste route, Witte = op één na kortste, Groene = vrije route.

---

## Samenvatting Verplichte Velden

De volgende velden zijn minimaal nodig voor een geldig reglement:

1. Evenementnaam en -datum
2. Naam organisatie
3. Wedstrijdgebied
4. Goedkeuringsdatum en -nummer
5. Wedstrijdsecretaris gegevens
6. Wedstrijdleider gegevens
7. Hoofd calamiteitenteam gegevens
8. Start- en finishlocatie
9. Inschrijfdata en -geld
10. IBAN
11. Klassennamen
12. Kaartschaal
13. Minstens één navigatiesysteem
