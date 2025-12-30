// SVG icons representing each navigation system
// These are stylized representations that help users visually identify each system

import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

// Ingetekende Lijn - A curved line on a map
export function IngetekendeLijnIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 40 Q24 20 32 32 Q40 44 48 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// BARIL - Line with barricades (perpendicular bars)
export function BarilIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 40 L48 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Barricades */}
      <path d="M24 38 L20 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 34 L32 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Grensbenadering - Border approach with directional arrow
export function GrensbenaderingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 2"
      />
      <path
        d="M20 44 L44 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 20 L44 20 L44 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Pijlen - Arrows indicating direction
export function PijlenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      {/* Arrow 1 */}
      <path
        d="M12 32 L24 32 M20 28 L24 32 L20 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow 2 */}
      <path
        d="M28 32 L40 32 M36 28 L40 32 L36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow 3 */}
      <path
        d="M44 32 L56 32 M52 28 L56 32 L52 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Crossroads hint */}
      <circle cx="24" cy="32" r="2" fill="currentColor" />
      <circle cx="40" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

// Blokkerende Pijlen - Blocking arrows
export function BlokkerendePijlenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      <path
        d="M16 32 L28 32 M24 28 L28 32 L24 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* X mark for blocked */}
      <path
        d="M36 26 L48 38 M48 26 L36 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Punten - Points/dots connected
export function PuntenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      <circle cx="16" cy="32" r="4" fill="currentColor" />
      <circle cx="32" cy="20" r="4" fill="currentColor" />
      <circle cx="48" cy="32" r="4" fill="currentColor" />
      <circle cx="32" cy="44" r="4" fill="currentColor" />
      {/* Connection hint */}
      <path
        d="M19 30 L29 22 M35 22 L45 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

// Blokkerende Punten
export function BlokkerendePuntenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      <circle cx="20" cy="32" r="4" fill="currentColor" />
      <circle cx="44" cy="32" r="4" fill="currentColor" />
      {/* X through middle point */}
      <circle cx="32" cy="32" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M28 28 L36 36 M36 28 L28 36" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Kompaspunten - Compass points
export function KompasPuntenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      <circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Compass directions */}
      <circle cx="32" cy="16" r="3" fill="currentColor" />
      <circle cx="48" cy="32" r="3" fill="currentColor" />
      <circle cx="32" cy="48" r="3" fill="currentColor" />
      <circle cx="16" cy="32" r="3" fill="currentColor" />
      {/* N indicator */}
      <text x="32" y="13" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="bold">N</text>
    </svg>
  );
}

// Punten Onbekend - Unknown points
export function PuntenOnbekendIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      <circle cx="20" cy="32" r="4" fill="currentColor" />
      <circle cx="44" cy="32" r="4" fill="currentColor" />
      {/* Question mark */}
      <text x="32" y="38" textAnchor="middle" fontSize="20" fill="currentColor" fontWeight="bold">?</text>
    </svg>
  );
}

// Punten Vrije Route - Free route points
export function PuntenVrijeRouteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="32" cy="32" r="5" fill="currentColor" />
      {/* Multiple paths hint */}
      <path d="M32 27 L32 12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M36 29 L48 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M28 29 L16 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

// Vakken - Grid cells (longest route)
export function VakkenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      {/* Grid */}
      <rect x="12" y="12" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="28" y="12" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="12" y="28" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="28" y="28" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="44" y="28" width="12" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Route through cells */}
      <path
        d="M16 36 L20 20 L36 20 L36 36 L50 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// T-Systemen - T-junction system
export function TSystemenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      {/* T shape */}
      <path
        d="M16 24 L48 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M32 24 L32 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Route indicators */}
      <circle cx="16" cy="24" r="3" fill="currentColor" />
      <circle cx="48" cy="24" r="3" fill="currentColor" />
      <circle cx="32" cy="48" r="3" fill="currentColor" />
    </svg>
  );
}

// Bol-Pijl - Circle to arrow
export function BolPijlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      {/* Start circle */}
      <circle cx="20" cy="32" r="8" fill="currentColor" />
      {/* Path */}
      <path
        d="M28 32 L44 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 2"
      />
      {/* End arrow */}
      <path
        d="M40 28 L48 32 L40 36"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Visgraat - Herringbone/striprit
export function VisgraatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      {/* Vertical spine */}
      <path d="M32 12 L32 52" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Ribs - alternating sides */}
      <path d="M32 18 L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 26 L42 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 34 L22 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 42 L42 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Routebeschrijving op kaart - Route description on map
export function RoutebeschrijvingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Text lines */}
      <path d="M14 20 L38 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 28 L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 36 L36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Arrow symbol */}
      <path d="M42 44 L50 44 M48 42 L50 44 L48 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Pijlen met kleurbeperking - Arrows with color restriction
export function PijlenKleurbeperkingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      {/* Colored rectangle (representing yellow road) */}
      <rect x="8" y="26" width="48" height="12" fill="currentColor" opacity="0.3" rx="1" />
      {/* Arrow crossing */}
      <path
        d="M16 32 L48 32 M42 26 L48 32 L42 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* X on colored part */}
      <path d="M26 28 L30 36 M30 28 L26 36" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Pijlen en Punten Gecombineerd
export function PijlenPuntenGecombineerdIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-full w-full", className)}>
      {/* Red arrow */}
      <path
        d="M12 24 L28 24 M24 20 L28 24 L24 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Point */}
      <circle cx="44" cy="24" r="4" fill="currentColor" />
      {/* Green point with circle */}
      <circle cx="28" cy="44" r="8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="28" cy="44" r="3" fill="currentColor" />
    </svg>
  );
}
