'use client';

import { useEffect, useState } from "react";
import { useImageProtection } from "@/hooks/useImageProtection";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useImageProtection();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="no-select">{children}</div>;
  }

  return <div className="no-select">{children}</div>;
} 