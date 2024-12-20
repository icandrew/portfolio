"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Modal({ children, open, onOpenChange }: ModalProps) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[100]">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => onOpenChange?.(false)} />
          <div className="fixed left-[50%] top-[50%] z-[101] translate-x-[-50%] translate-y-[-50%] max-h-[90vh] w-[90vw] max-w-[500px] overflow-y-auto">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export function ModalBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("bg-background rounded-lg border shadow-lg", className)}>
      {children}
    </div>
  );
}

export function ModalContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
}

export function ModalFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center justify-end p-6 pt-0", className)}>
      {children}
    </div>
  );
}
