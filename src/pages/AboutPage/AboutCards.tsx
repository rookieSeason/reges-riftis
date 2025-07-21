const CARD_CLIP =
  "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)";

const CARD_DATA = [
  {
    title: "MISSION",
    content:
      "To build a competitive team of elite players who strive for growth, synergy, and impact in the Wild Rift esports scene.",
  },
  {
    title: "IDENTITY",
    content:
      '"Reges Riftis" is Latin for *Kings of the Rift*. Our identity is rooted in strategy, aggression, and unity — we reign together.',
  },
  {
    title: "PLAYSTYLE",
    content:
      "Fast-paced, flashy combos. Roaming plays. Unpredictable drafts. We press early — we punish mistakes. We're showstoppers.",
  },
];

interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => (
  <div
    className="p-6 bg-sky-950 dark:bg-cyan-500 dark:text-gray-800 transition duration-300"
    style={{ clipPath: CARD_CLIP }}
  >
    <h3 className="text-xl font-semibold text-white dark:text-black mb-2 italic">
      {title}
    </h3>
    <p className="text-sm text-gray-100 dark:text-gray-700 leading-relaxed">
      {content}
    </p>
  </div>
);

export default function AboutCards() {
  return (
    <div className="md:w-1/2 grid gap-6 self-center">
      {CARD_DATA.map(({ title, content }) => (
        <Card key={title} title={title} content={content} />
      ))}
    </div>
  );
}
