export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid w-full grid-cols-[1fr_minmax(0,theme(maxWidth.339,1356px))_1fr] bg-background transition-colors">
      <div className="border-r border-(--border) bg-[repeating-linear-gradient(45deg,var(--pattern)_0,var(--pattern)_1px,transparent_0,transparent_12px)] bg-size-[16px_16px]" />

      <main className="w-full bg-background px-4">{children}</main>

      <div className="border-l border-(--border) bg-[repeating-linear-gradient(45deg,var(--pattern)_0,var(--pattern)_1px,transparent_0,transparent_12px)] bg-size-[16px_16px]" />
    </div>
  );
}
