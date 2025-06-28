// components/SlidingCard.tsx
import Image from "next/image";

interface CardProps {
  icon: React.ReactNode;
  text: string;
  author: string;
  avatar: string;
}

export default function SlidingCard({ icon, text, author, avatar }: CardProps) {
  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-6 w-72 flex-shrink-0">
      <div className="text-[#0050D8] mb-4">{icon}</div>
      <p className="text-sm text-gray-800 mb-6 leading-relaxed">{text}</p>
      <div className="flex items-center gap-3 mt-auto">
        <Image
          src={avatar}
          alt={author}
          width={36}
          height={36}
          className="rounded-full object-cover"
        />
        <p className="text-sm font-semibold">{author}</p>
      </div>
    </div>
  );
}
