import Image from "next/image";

export default function PortfolioPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <img src="/images/logo.png" alt="logo" />
      <p className="text-stale-500 text-4xl">Portfolio</p>
    </main>
  );
}