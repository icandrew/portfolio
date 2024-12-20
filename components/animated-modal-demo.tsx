"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";

export function AnimatedModalDemo() {
  const [open, setOpen] = React.useState(false);

  const handleDownload = () => {
    window.open('/file/resume.pdf', '_blank');
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-center">
      <Modal open={open} onOpenChange={setOpen}>
        <Button
          onClick={() => setOpen(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 flex justify-center group/modal-btn relative overflow-hidden"
        >
          <span className="group-hover/modal-btn:translate-x-[200%] text-center transition-transform duration-500">
            Download CV
          </span>
          <div className="-translate-x-[200%] group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition-transform duration-500">
            📥
          </div>
        </Button>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl font-bold text-center mb-8">
              Download Resume
            </h4>
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Click the button below to download the CV in PDF format
              </p>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleDownload}>
              Download PDF
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
