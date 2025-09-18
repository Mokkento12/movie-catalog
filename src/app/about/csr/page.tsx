"use client";

import { useEffect, useState } from "react";

export default function CSRPage() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">CSR (Client Side Rendering)</h1>
      <p>Текущее время: {time ?? "Загрузка..."}</p>
    </main>
  );
}
