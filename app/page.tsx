export default function Home() {
  return (
    <main className="text-4xl font-bold text-center">
      <h1>Thunderbolt</h1>

      <h1>{process.env.VERCEL_ENV}</h1>
      <h1>{process.env.ENV}</h1>
    </main>
  );
}
