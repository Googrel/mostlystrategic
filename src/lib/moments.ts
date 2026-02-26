export type Moment = {
  id: string;
  title: string;
  year: string;
  country: string;
  whyItWorked: string;
};

export const moments: Moment[] = [
  {
    id: "think-small",
    title: "Volkswagen — Think Small",
    year: "1959",
    country: "United States",
    whyItWorked:
      "It inverted category norms by making modesty a virtue in an era of excess. The tone was self-aware, the design was sparse, and the message stayed coherent across years. It made honesty feel premium before that was fashionable."
  },
  {
    id: "1984",
    title: "Apple — 1984",
    year: "1984",
    country: "United States",
    whyItWorked:
      "It framed a product launch as a cultural event, not a feature drop. Distinctive visual language and strategic scarcity amplified memory. The promise and product moment were tightly synchronized."
  },
  {
    id: "dove-real-beauty",
    title: "Dove — Campaign for Real Beauty",
    year: "2004",
    country: "United Kingdom",
    whyItWorked:
      "It challenged category aesthetics while staying emotionally legible. The idea traveled across formats without losing intent. It converted a social tension into a long-term brand platform with evidence from participation and press."
  },
  {
    id: "old-spice",
    title: "Old Spice — The Man Your Man Could Smell Like",
    year: "2010",
    country: "United States",
    whyItWorked:
      "It used absurd humor with disciplined brand cues. Fast response videos turned a campaign into an interaction loop, increasing salience and shareability. Distinct voice and execution coherence did most of the heavy lifting."
  },
  {
    id: "fearless-girl",
    title: "State Street — Fearless Girl",
    year: "2017",
    country: "United States",
    whyItWorked:
      "It transformed an institutional message into an instantly legible public symbol. The placement carried context, and the timing aligned with broader social discourse. Physical distinctiveness drove earned attention."
  },
  {
    id: "spotify-wrapped",
    title: "Spotify — Wrapped",
    year: "2016",
    country: "Global",
    whyItWorked:
      "It productized annual reflection and made users the protagonist. Personal data became social storytelling with low friction and high replay value. The ritual repeats because the system is coherent and self-renewing."
  }
];
