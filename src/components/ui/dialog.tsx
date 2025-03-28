import * as React from "react"

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ children, open, onOpenChange }: DialogProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={() => onOpenChange?.(false)}>
      {children}
    </div>
  );
}

export function DialogContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg" onClick={e => e.stopPropagation()}>
      {children}
    </div>
  );
} 