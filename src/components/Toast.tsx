"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string;
  visible: boolean;
  onClose: () => void;
};

export function Toast({ message, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onClose, 2200);
    return () => clearTimeout(t);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 animate-toast-in"
    >
      <div className="rounded-full border border-ctp-border bg-ctp-elevated/95 px-5 py-2.5 text-sm font-medium text-ctp-text shadow-xl backdrop-blur-md glow-ring">
        {message}
      </div>
    </div>
  );
}
