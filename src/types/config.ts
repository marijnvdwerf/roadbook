// Configuration types for the Reglement Generator

export interface ContactInfo {
  name: string;
  email?: string;
  phone?: string;
}

export interface VenueInfo {
  name: string;
  address: string;
  phone?: string;
}

export interface EventConfig {
  name: string;
  organizationName: string;
  date: string;
  area: string;
  routeLengthKm: number;
  approvalDate: string;
  approvalNumber: string;
  website: string;
  championships: {
    nrfKlassiek: boolean;
    nrfKaartlezen: boolean;
    nkHistorisch: boolean;
  };
}

export interface OrganizationConfig {
  secretary: ContactInfo;
  chairman: string;
  committeeMembers: string[];
  routeSetters: string[];
  routeCheckers: string[];
  raceDirector: ContactInfo;
  emergencyHead: ContactInfo;
  contactPerson: ContactInfo;
  serviceTeam?: ContactInfo;
}

export interface LocationConfig {
  startLocation: VenueInfo;
  startTime: string;
  finishLocation: VenueInfo;
  finishTime: string;
  sameAsStart: boolean;
  publicationTime: string;
  prizeTime: string;
  onlineResultsDate: string;
}

export interface RegistrationConfig {
  openingDate: string;
  closingDate: string;
  publicationDate: string;
  acceptanceDate: string;
  documentCheckDate: string;
  fee: number;
  iban: string;
  maxParticipants: number;
  allowModernVehicles: boolean;
  modernVehicleCategories: string;
  teamRegistration: {
    enabled: boolean;
    cost: number;
    method: 'website' | 'onsite';
  };
}

export interface ClassConfig {
  highest: { name: string; description: string };
  middle: { name: string; description: string };
  lowest: { name: string; description: string };
}

export interface TechnicalConfig {
  mapScales: string;
  controlType: 'physical' | 'virtual' | 'combined';
  appName: string;
  appManualUrl: string;
  routeArrows: {
    enabled: boolean;
    type: 'physical' | 'virtual';
    inscription: string;
  };
  regularityTest: boolean;
  skillTest: boolean;
  deviationToleranceMeters: number;
  quietZones: {
    unpavedRoadsAutomatic: boolean;
  };
}

export interface RouteRulesConfig {
  roadUsage: 'once_one_direction' | 'multiple_one_direction' | 'multiple_both_directions' | 'per_system';
  considerTrafficRules: boolean;
  deadEndRoadsAllowed: boolean;
  lowestClassMustDetour: boolean;
  detourOppositeDirectionAllowed: boolean;
  legendLocation: 'appendix' | 'routebook' | 'separate';
}

export interface TieBreakerConfig {
  primary: 'ex_aequo_control' | 'regularity_test';
  controlName: string;
  secondary: 'heaviest_section' | 'oldest_car' | 'draw';
}

export interface NavigationSystemsConfig {
  ingetekendeLijn: boolean;
  ingetekendeLijnBarricades: boolean;
  grensbenadering: boolean;
  pijlenKortste: { enabled: boolean; secondShortest: boolean };
  blokkerendePijlen: { enabled: boolean; secondShortest: boolean };
  pijlenKleurbeperking: { enabled: boolean; color1: string; color2: string };
  pijlenBarricades: boolean;
  puntenKortste: { enabled: boolean; secondShortest: boolean };
  blokkerendePunten: { enabled: boolean; secondShortest: boolean };
  kompasPunten: boolean;
  puntenOnbekend: boolean;
  puntenVrijeRoute: { enabled: boolean; radius: number };
  vakkenLangste: boolean;
  tSystemen: boolean;
  routebeschrijvingOpKaart: boolean;
  bolPijl: boolean;
  visgraat: boolean;
  pijlenEnPuntenGecombineerd: { enabled: boolean; radius: number };
}

export interface ReglementConfig {
  event: EventConfig;
  organization: OrganizationConfig;
  location: LocationConfig;
  registration: RegistrationConfig;
  classes: ClassConfig;
  technical: TechnicalConfig;
  routeRules: RouteRulesConfig;
  tieBreaker: TieBreakerConfig;
  navigationSystems: NavigationSystemsConfig;
}

export const defaultConfig: ReglementConfig = {
  event: {
    name: '',
    organizationName: '',
    date: '',
    area: '',
    routeLengthKm: 0,
    approvalDate: '',
    approvalNumber: '',
    website: '',
    championships: {
      nrfKlassiek: false,
      nrfKaartlezen: false,
      nkHistorisch: false,
    },
  },
  organization: {
    secretary: { name: '', email: '', phone: '' },
    chairman: '',
    committeeMembers: [],
    routeSetters: [],
    routeCheckers: [],
    raceDirector: { name: '', phone: '' },
    emergencyHead: { name: '', phone: '' },
    contactPerson: { name: '', phone: '' },
    serviceTeam: { name: '', phone: '' },
  },
  location: {
    startLocation: { name: '', address: '', phone: '' },
    startTime: '',
    finishLocation: { name: '', address: '', phone: '' },
    finishTime: '',
    sameAsStart: true,
    publicationTime: '',
    prizeTime: '',
    onlineResultsDate: '',
  },
  registration: {
    openingDate: '',
    closingDate: '',
    publicationDate: '',
    acceptanceDate: '',
    documentCheckDate: '',
    fee: 0,
    iban: '',
    maxParticipants: 0,
    allowModernVehicles: false,
    modernVehicleCategories: '',
    teamRegistration: {
      enabled: false,
      cost: 0,
      method: 'website',
    },
  },
  classes: {
    highest: { name: 'Expert', description: '' },
    middle: { name: 'Sport', description: '' },
    lowest: { name: 'Toer', description: '' },
  },
  technical: {
    mapScales: '1:50.000',
    controlType: 'physical',
    appName: '',
    appManualUrl: '',
    routeArrows: {
      enabled: true,
      type: 'physical',
      inscription: '',
    },
    regularityTest: true,
    skillTest: false,
    deviationToleranceMeters: 50,
    quietZones: {
      unpavedRoadsAutomatic: true,
    },
  },
  routeRules: {
    roadUsage: 'once_one_direction',
    considerTrafficRules: true,
    deadEndRoadsAllowed: false,
    lowestClassMustDetour: false,
    detourOppositeDirectionAllowed: false,
    legendLocation: 'appendix',
  },
  tieBreaker: {
    primary: 'ex_aequo_control',
    controlName: '',
    secondary: 'oldest_car',
  },
  navigationSystems: {
    ingetekendeLijn: true,
    ingetekendeLijnBarricades: true,
    grensbenadering: true,
    pijlenKortste: { enabled: true, secondShortest: false },
    blokkerendePijlen: { enabled: true, secondShortest: false },
    pijlenKleurbeperking: { enabled: false, color1: '', color2: '' },
    pijlenBarricades: true,
    puntenKortste: { enabled: true, secondShortest: false },
    blokkerendePunten: { enabled: true, secondShortest: false },
    kompasPunten: true,
    puntenOnbekend: true,
    puntenVrijeRoute: { enabled: false, radius: 100 },
    vakkenLangste: true,
    tSystemen: true,
    routebeschrijvingOpKaart: true,
    bolPijl: true,
    visgraat: true,
    pijlenEnPuntenGecombineerd: { enabled: false, radius: 100 },
  },
};
