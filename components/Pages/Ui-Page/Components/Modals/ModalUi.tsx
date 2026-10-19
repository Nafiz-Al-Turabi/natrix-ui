"use client";
import Container from "@/components/Layouts/Container";
import Modal from "@/components/Ui-Comp/Modals/Modal";
import React, { useState } from "react";
import ModalUse from "./ModalsUsages/ModalUse";
import Header from "@/components/Shared/Header";

export default function ModalUi() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const open = (key: string) => setOpenModal(key);
  const close = () => setOpenModal(null);

  return (
    <div>
      <Container>
        <div className="space-y-3">
          {/* Page Header */}
          <div className="py-3">
            <Header
              title="Modals"
              description="A flexible modal dialog component that supports multiple sizes, custom headers, scrollable content, and footer actions — built with smooth open/close animations."
            />
          </div>

          {/* ── Section: Basic Usage ── */}
          <section className="space-y-4">
            <div>
              <h2 className="text-base font-semibold">
                Basic Modal
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Click the button below to open a simple modal with a title, body
                content, and footer action buttons.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => open("basic")}
                className="rounded-lg bg-black px-4 py-2 text-sm text-white  transition border border-(--border)"
              >
                Open Basic Modal
              </button>
            </div>
          </section>

          {/* ── Section: Sizes ── */}
          <section className="space-y-4">
            <div>
              <h2 className="text-base font-semibold ">Sizes</h2>
              <p className="mt-1 text-sm ">
                The modal supports five sizes:{" "}
                <code className="rounded text-black bg-lime-400 px-1 py-0.5 text-xs font-mono">
                  sm
                </code>
                ,{" "}
                <code className="rounded text-black bg-lime-400 px-1 py-0.5 text-xs font-mono">
                  md
                </code>
                ,{" "}
                <code className="rounded text-black bg-lime-400 px-1 py-0.5 text-xs font-mono">
                  lg
                </code>
                ,{" "}
                <code className="rounded text-black bg-lime-400 px-1 py-0.5 text-xs font-mono">
                  xl
                </code>
                , and{" "}
                <code className="rounded text-black bg-lime-400 px-1 py-0.5 text-xs font-mono">
                  xxl
                </code>
                . Pass the{" "}
                <code className="rounded text-black bg-lime-400 px-1 py-0.5 text-xs font-mono">
                  size
                </code>{" "}
                prop to control width.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {(["sm", "md", "lg", "xl", "xxl"] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => open(size)}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </section>

          {/* ── Section: Variants ── */}
          <section className="space-y-4">
            <div>
              <h2 className="text-base font-semibold ">
                Variants
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Use the modal for different scenarios — confirmations, forms,
                alerts, and more.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => open("confirm")}
                className="rounded-lg bg-cyan-500 px-4 py-2 text-sm text-white hover:bg-blue-700 transition"
              >
                Confirmation Modal
              </button>
              <button
                onClick={() => open("danger")}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700 transition"
              >
                Danger / Delete Modal
              </button>
              <button
                onClick={() => open("form")}
                className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white hover:bg-violet-700 transition"
              >
                Form Modal
              </button>
            </div>
          </section>

          {/* ── Props Reference ── */}
          <section className="space-y-3">
            <div>
              <h2 className="text-base font-semibold ">Props</h2>
              <p className="mt-1 text-sm text-gray-500">
                All available props for the{" "}
                <code className="rounded bg-gray-100 px-1 py-0.5 text-xs font-mono">
                  Modal
                </code>{" "}
                component.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-(--border)">
              <table className="min-w-full  text-sm">
                <thead className="bg-background">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">
                      Prop
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Default
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-background">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-lime-500">
                      isOpen
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-600">
                      boolean
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">—</td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      Controls whether the modal is visible.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-lime-500">
                      onClose
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-600">
                      {"() => void"}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">—</td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      Callback fired when the modal requests to close.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-lime-500">
                      title
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-600">
                      string
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-500">
                      {'"Modal"'}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      Text shown in the modal header.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-lime-500">
                      children
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-600">
                      ReactNode
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">—</td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      Main body content of the modal.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-lime-500">
                      footer
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-600">
                      ReactNode
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">
                      undefined
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      Optional sticky footer (e.g. action buttons).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-lime-500">
                      size
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-600">
                      {'"sm" | "md" | "lg" | "xl" | "xxl"'}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-500">
                      {'"md"'}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      Max-width of the modal panel.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Code Preview ── */}
          <ModalUse />
        </div>

        {/* ── Modals ── */}

        {/* Basic */}
        <Modal
          isOpen={openModal === "basic"}
          onClose={close}
          title="Basic Modal"
          size="md"
          footer={
            <div className="flex justify-end gap-3">
              <button
                onClick={close}
                className="rounded-lg border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={close}
                className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
              >
                Confirm
              </button>
            </div>
          }
        >
          <p className="text-sm text-gray-600 leading-relaxed">
            This is a basic modal. Pass any content as{" "}
            <code className="rounded bg-gray-100 px-1 text-xs font-mono">
              children
            </code>{" "}
            and optional action buttons via the{" "}
            <code className="rounded bg-gray-100 px-1 text-xs font-mono">
              footer
            </code>{" "}
            prop.
          </p>
        </Modal>

        {/* Sizes */}
        {(["sm", "md", "lg", "xl", "xxl"] as const).map((size) => (
          <Modal
            key={size}
            isOpen={openModal === size}
            onClose={close}
            title={`Modal — size="${size}"`}
            size={size}
            footer={
              <div className="flex justify-end">
                <button
                  onClick={close}
                  className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
                >
                  Close
                </button>
              </div>
            }
          >
            <p className="text-sm text-gray-600 leading-relaxed">
              This modal uses{" "}
              <code className="rounded bg-gray-100 px-1 text-xs font-mono">
                size=&quot;{size}&quot;
              </code>
              . The available sizes map to Tailwind max-width utilities:{" "}
              <code className="rounded bg-gray-100 px-1 text-xs font-mono">
                sm → max-w-md
              </code>
              ,{" "}
              <code className="rounded bg-gray-100 px-1 text-xs font-mono">
                md → max-w-lg
              </code>
              ,{" "}
              <code className="rounded bg-gray-100 px-1 text-xs font-mono">
                lg → max-w-2xl
              </code>
              ,{" "}
              <code className="rounded bg-gray-100 px-1 text-xs font-mono">
                xl → max-w-4xl
              </code>
              ,{" "}
              <code className="rounded bg-gray-100 px-1 text-xs font-mono">
                xxl → max-w-6xl
              </code>
              .
            </p>
          </Modal>
        ))}

        {/* Confirmation */}
        <Modal
          isOpen={openModal === "confirm"}
          onClose={close}
          title="Are you sure?"
          size="sm"
          footer={
            <div className="flex justify-end gap-3">
              <button
                onClick={close}
                className="rounded-lg border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={close}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              >
                Yes, continue
              </button>
            </div>
          }
        >
          <p className="text-sm text-gray-600 leading-relaxed">
            This action will publish the announcement to all users. Please
            review your content before proceeding.
          </p>
        </Modal>

        {/* Danger / Delete */}
        <Modal
          isOpen={openModal === "danger"}
          onClose={close}
          title="Delete Account"
          size="sm"
          footer={
            <div className="flex justify-end gap-3">
              <button
                onClick={close}
                className="rounded-lg border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={close}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
              >
                Yes, delete
              </button>
            </div>
          }
        >
          <div className="space-y-2">
            <p className="text-sm font-medium text-red-600">
              ⚠ This action cannot be undone.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Deleting your account will permanently remove all your data,
              projects, and settings. Are you absolutely sure you want to
              proceed?
            </p>
          </div>
        </Modal>

        {/* Form Modal */}
        <Modal
          isOpen={openModal === "form"}
          onClose={close}
          title="Create Announcement"
          size="md"
          footer={
            <div className="flex justify-end gap-3">
              <button
                onClick={close}
                className="rounded-lg border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={close}
                className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white hover:bg-violet-700"
              >
                Publish
              </button>
            </div>
          }
        >
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700">Title</label>
              <input
                type="text"
                placeholder="Enter announcement title"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your announcement..."
                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700">
                Audience
              </label>
              <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
                <option>All users</option>
                <option>Admins only</option>
                <option>Specific team</option>
              </select>
            </div>
          </div>
        </Modal>
      </Container>
    </div>
  );
}
