"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-center justify-between p-5 text-left cursor-pointer">
        <span className="text-sm font-medium pr-4">{q}</span>
        <ChevronDown className={`size-4 shrink-0 text-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className="overflow-hidden transition-all duration-300 ease-out" style={{ maxHeight: open ? "200px" : "0", opacity: open ? 1 : 0 }}>
        <p className="px-5 pb-5 text-sm text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
    </div>
  );
}
