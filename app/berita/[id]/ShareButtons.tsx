"use client";

import { useState } from "react";
import {
  Share2,
  Facebook,
  Twitter,
  MessageCircle,
  Link2,
  Check,
} from "lucide-react";

type Props = {
  url: string;
  title: string;
};

export default function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    },
    {
      name: "Twitter / X",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-[#112D4E] hover:text-white hover:border-[#112D4E]",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#112D4E]/60 mr-1">
        <Share2 className="w-3.5 h-3.5 text-[#3F72AF]" />
        <span>Bagikan:</span>
      </div>

      {shareLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Bagikan ke ${item.name}`}
            className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#F9F7F7] border border-[#DBE2EF] text-[#112D4E]/70 transition-all duration-200 ${item.color}`}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}

      {/* Copy Link Button */}
      <button
        onClick={handleCopy}
        aria-label="Salin tautan"
        className={`inline-flex items-center gap-2 px-3 h-9 rounded-lg border text-xs font-semibold transition-all duration-200 ${
          copied
            ? "bg-emerald-500 text-white border-emerald-500"
            : "bg-[#F9F7F7] border-[#DBE2EF] text-[#112D4E]/70 hover:bg-[#3F72AF] hover:text-[#F9F7F7] hover:border-[#3F72AF]"
        }`}
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5" />
            <span>Tersalin!</span>
          </>
        ) : (
          <>
            <Link2 className="w-3.5 h-3.5" />
            <span>Salin</span>
          </>
        )}
      </button>
    </div>
  );
}