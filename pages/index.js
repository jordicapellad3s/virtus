import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virtus</title>
        <meta name="description" content="Estoicism quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold">Virtus</h1>
      </main>
    </div>
  );
}
