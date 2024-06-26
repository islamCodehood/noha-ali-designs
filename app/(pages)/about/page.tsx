import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <img src="/images/logo.png" alt="logo" />
      <p className="text-stale-500 text-4xl">About</p>
    </main>
  );
}