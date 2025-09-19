export const dynamic = "force-dynamic";

export default async function SSRPge() {
  const time = new Date().toLocaleTimeString();

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">SSR (Server Side Rendering)</h1>
      <p>Эта страница рендериться на сервере при каждом запросе.</p>
      <p>Текущее время: {time}</p>
    </main>
  );
}
