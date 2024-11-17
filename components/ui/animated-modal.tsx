"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalContext = React.createContext<ModalContextType | null>(null);

export function Modal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function ModalTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error("ModalTrigger must be used within Modal");

  return (
    <button
      className={cn("relative overflow-hidden rounded-md px-4 py-2", className)}
      onClick={() => context.setOpen(true)}
    >
      {children}
    </button>
  );
}

export function ModalBody({ children }: { children: React.ReactNode }) {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error("ModalBody must be used within Modal");

  return (
    <AnimatePresence>
      {context.open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => context.setOpen(false)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0"
          >
            <div className="relative w-full max-w-lg rounded-lg bg-card p-4 md:p-6 shadow-lg border">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ModalContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}

export function ModalFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mt-6 flex justify-end", className)}>
      {children}
    </div>
  );
}
