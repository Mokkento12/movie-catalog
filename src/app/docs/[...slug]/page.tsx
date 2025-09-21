type Props = {
  params: { slug: string[] };
};

export default function DocsPage({ params }: Props) {
  return (
    <main className="p-6">
      <h1 className="text=2xl font-bold mb-4">Документация</h1>
      <p>Путь: {params.slug.join("/")}</p>
    </main>
  );
}
