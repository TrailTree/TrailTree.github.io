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
    // TODO Jack: replace with a real one/two-sentence description of Emba.
    description:
      "Emba — describe what it is, what it does, and what you designed or built. (Placeholder: edit this.)",
    specs: ["TODO: specs"], // TODO: components/techniques, e.g. "op-amp", "PCB"
    image: "", // e.g. "images/emba.jpg" — drop a photo in images/ and set the path
    links: [], // e.g. { label: "Build log", url: "https://..." }
    featured: true,
  },
  {
    title: "Device Two",
    description:
      "Describe what it is, the interesting engineering, and the result. Keep it to a line or two so cards stay tidy.",
    specs: ["analog filter", "discrete transistors", "hand-wired"],
    image: "",
    links: [{ label: "Schematic (PDF)", url: "https://example.com/schematic.pdf" }],
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
