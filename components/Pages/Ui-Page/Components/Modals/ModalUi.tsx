"use client";
import Container from "@/components/Layouts/Container";
import Modal from "@/components/Ui-Comp/Modals/Modal";
import React, { useState } from "react";
import ModalUse from "./ModalsUsages/ModalUse";
import Header from "@/components/Shared/Header";

export default function ModalUi() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Container>
        <div>
          <div className="py-3">
            <Header
              title="Modals"
              description="Provide helpful contextual hints that appear when users hover over or focus on interface elements, making actions easier to understand without cluttering the UI."
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="rounded-lg bg-lime-500 px-4 py-2 text-white"
            >
              Open Modal
            </button>
          </div>
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Create Announcement"
            size="md"
            footer={
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border px-4 py-2 text-black"
                >
                  Cancel
                </button>
                <button className="rounded-lg bg-black px-4 py-2 text-white">
                  Create
                </button>
              </div>
            }
          >
            {/* Your form/content */}
            <div className="space-y-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quia eveniet cupiditate nisi, illo ea earum enim
              voluptatum nam expedita.
            </div>
          </Modal>
          <ModalUse />
        </div>
      </Container>
    </div>
  );
}
