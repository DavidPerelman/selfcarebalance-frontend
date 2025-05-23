// src/app/app/layout.tsx
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-y-auto text-right text-gray-800">
      <main className="max-w-md mx-auto px-4 py-4 h-full flex flex-col justify-center">
        {children}
      </main>
    </div>
  );
}
