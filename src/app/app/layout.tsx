// src/app/app/layout.tsx
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-right text-gray-800">
      <main className="max-w-md mx-auto px-4 py-6 pb-24">{children}</main>
    </div>
  );
}
