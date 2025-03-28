import * as React from "react"

interface SheetProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Sheet({ children, open, onOpenChange }: SheetProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange?.(false)}>
      {children}
    </div>
  );
}

export function SheetTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function SheetContent({ 
  children,
  side = "right"
}: { 
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
}) {
  const sideStyles = {
    right: "right-0 h-full w-64",
    left: "left-0 h-full w-64",
    top: "top-0 w-full h-64",
    bottom: "bottom-0 w-full h-64"
  };

  return (
    <div className={`fixed ${sideStyles[side]} bg-white p-6 shadow-lg`}>
      {children}
    </div>
  );
} 