# Wizard Configurator - UX Decisions

This document outlines the design and usability decisions made for the `/v2` wizard-style configurator.

---

## Design Philosophy

The wizard follows principles from [Adam Silver's Form Design Patterns](https://adamsilver.io/) and the [GOV.UK Design System](https://design-system.service.gov.uk/), adapted for a configuration tool rather than a transactional form.

**Core principle:** Reduce cognitive load by showing one section at a time, while allowing non-linear navigation for users who know what they want to change.

---

## Layout

### Centered Container
- Sidebar and form are grouped in a single centered container (`max-w-5xl`)
- Creates focus by limiting line length and reducing visual noise
- Whitespace on both sides gives the content room to breathe

### Sticky Sidebar
- Navigation stays visible while scrolling through long sections
- Users always know where they are and can jump to other sections
- Positioned at `top-8` to give some breathing room from the viewport edge

---

## Navigation

### Non-Linear by Design
Unlike traditional wizards that force users through a linear sequence, this design allows jumping to any section at any time. Reasons:

1. **Returning users** may want to edit just one section
2. **Incomplete information** - users might not have all data upfront (e.g., NRF approval number comes later)
3. **Exploration** - users can browse what's needed before committing to fill everything

### No Completion Indicators
The sidebar intentionally does not show checkmarks or completion status because:

1. Not all sections have clear "complete" states (e.g., "Routebepalingen" has sensible defaults)
2. Checkmarks can create anxiety or pressure to "complete" sections
3. The current section highlight is sufficient for orientation

### Simple Text Navigation
- Just section titles, no icons or descriptions
- Current section highlighted with subtle background
- Keeps the sidebar compact and scannable

---

## Form Structure

### One Section at a Time
Following GOV.UK's "one thing per page" principle, each section focuses on a specific topic:

| Section | Focus |
|---------|-------|
| Evenement | Basic event identity |
| Organisatie | People and contacts |
| Locaties | Where and when |
| Inschrijving | Registration process |
| Klassen | Competition structure |
| Technisch | How the event works |
| Routebepalingen | Navigation rules |
| Ex Aequo | Tie-breaking |
| Navigatiesystemen | Which systems are used |

### Section Introduction
Each section starts with:
1. **Clear heading** - What this section is about
2. **Brief description** - Why this information matters

This helps users understand context before diving into fields.

### Logical Grouping
Within sections, related fields are grouped with:
- Visual separators (`<Separator />`)
- Sub-headings for groups
- Consistent spacing

### Hint Text
Complex fields include hint text explaining:
- What the field is for
- Example values
- Why the information is needed

---

## Form Controls

### Labels Above Inputs
Following accessibility best practices, labels are always positioned above inputs, not inline or floating.

### Required Field Indication
Required fields are marked with a red asterisk (`*`). Optional fields are left unmarked (following the pattern: mark the minority).

### Appropriate Input Types
- Date fields use `type="date"` for native date pickers
- Numbers use `type="number"` with appropriate `min`/`step`
- URLs use `type="url"` for validation hints

### Selection Cards for Choices
For mutually exclusive options (control type, road usage, tie-breakers), visual cards are used instead of radio buttons:

- Larger click target
- Icon provides quick recognition
- Description explains the option
- Selected state is clearly visible (border color + checkmark)

This pattern is especially effective for the Navigation Systems section where users select from 18 different systems.

---

## Navigation Systems Section

### Visual Card Grid
Each navigation system is represented by a card with:
1. **Custom SVG icon** - Stylized representation of the system
2. **Name** - Standard NRF terminology
3. **Short description** - One-line explanation

### Why Visual Cards?
- **Recognition over recall** - Icons help users recognize systems they know
- **Scannability** - Grid layout allows quick scanning of all 18 systems
- **Touch-friendly** - Large tap targets work on tablets
- **Delight** - More engaging than a checkbox list

### Expandable Sub-options
Some systems have variants (e.g., "kortste" vs "op één na kortste"). When a card is selected, sub-options appear inline within the card.

---

## Progress & Next Button

### No Progress Bar
A progress bar was intentionally omitted because:
- Creates pressure to "complete" when exploration is valid
- The 9 sections are visible in the sidebar anyway
- Users may not go linearly

### Next Button in Content
The "Volgende: [Section]" button appears at the bottom of each section, separated by a border. This:
- Guides linear users to the natural next step
- Doesn't block the interface (no sticky footer)
- Shows what's coming next

### Final Section
On the last section (Navigatiesystemen), instead of a Next button, users see:
- A completion message
- A prompt to use the Preview function

---

## Preview

### Sheet (Slide-in Panel)
The preview opens as a sheet from the right side rather than:
- A new page (loses form context)
- A modal (too constrained)
- Split view (reduces form space)

Benefits:
- Can compare form values with output
- Easy to close and continue editing
- Full document preview without navigation away

---

## Accessibility Considerations

- All interactive elements are keyboard accessible
- Form labels are properly associated with inputs
- Color is not the only indicator of state (icons + borders for selection)
- Focus states are visible
- Sufficient color contrast

---

## Future Considerations

Potential improvements to explore:

1. **Auto-save** - Persist form state to localStorage
2. **Validation summary** - Show missing required fields before preview
3. **Keyboard shortcuts** - Navigate sections with arrow keys
4. **Mobile layout** - Collapse sidebar to hamburger menu on small screens
