/* =============================================================================
   YOUR DEVICES — this is the only file you edit to add/change projects.

   HOW TO ADD A DEVICE (3 steps):
     1. Copy one whole { ... } block below (including the trailing comma).
     2. Paste it inside the [ ] list.
     3. Edit the fields and save. Refresh the page to see it.

   ADDING A PHOTO:
     - Drop the image file into the  images/  folder.
     - Set  image: "images/your-file.jpg"  (jpg/png/webp all work).
     - No photo yet? Delete the image line and a neutral placeholder shows.

   FIELDS:
     title        (required)  Device name.
     description  (required)  One or two sentences: what it is + what you built.
     specs        (required)  Array of strings — components/techniques, shown as
                              tag pills (e.g. "op-amp", "PCB", "tube", "3D-printed").
     image        (optional)  Path like "images/file.jpg". Omit for a placeholder.
     links        (optional)  Array of { label, url }. Name each button yourself
                              (Build log, Video, Schematic, Datasheet, Buy …).
                              Omit or leave [] for no buttons.
     featured     (optional)  true = show first, in a wider card.
   ============================================================================= */

const projects = [
  {
    title: "Emba",
    description:
      "A morning-ritual system: a hand-printed, pebble-sized device that sits across the room, paired with an iOS app. Tapping it dismisses your alarm and can lock your phone for up to an hour, building in just enough friction to get you into sunlight, water, and movement before a screen.",
    specs: ["hand-printed hardware", "iOS app", "habit tracking", "behavioral design", "local-only / no telemetry"],
    image: "images/emba.jpg", // hero screenshot of the app; swap for a device photo if you have one
    links: [{ label: "getemba.com", url: "https://getemba.com" }],
    featured: true,
  },
  {
    title: "Roger Mayer Octavia replica",
    description:
      "Work in progress — a from-scratch build of the Roger Mayer Octavia, the octave-up fuzz famously used by Jimi Hendrix. Working from the original schematic: an all-silicon design (2N3906 / MPS-A13 transistors, 1N4148 diodes) that generates its signature octave overtone without a transformer, before laying out the PCB and boxing it up.",
    specs: ["guitar pedal", "octave-up fuzz", "silicon transistors", "diode clipping", "WIP"],
    image: "images/octavia-schematic.gif", // placeholder schematic until build photos exist
    links: [],
  },
  {
    title: "Device Three",
    description:
      "Another build. The photo, specs, and link buttons all hide automatically when you leave their fields empty.",
    specs: ["microcontroller", "sensor array"],
    image: "",
    links: [],
  },

  // ⬇️ Copy a block above, paste it here, and edit the fields to add a device.
];
