import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-24">
      <h1 className="text-6xl font-bold">Your profile</h1>
      <Image width={800} height={800} alt="yo" src="/profile.png" />
      <h1 className="text-4xl font-bold">friends</h1>
      <div className="flex flex-row gap-28">
        <Image width={200} height={200} alt="yo" src="/profile.png" />
        <Image width={200} height={200} alt="yo" src="/profile.png" />
        <Image width={200} height={200} alt="yo" src="/profile.png" />
        <Image width={200} height={200} alt="yo" src="/profile.png" />
        <Image width={200} height={200} alt="yo" src="/profile.png" />
      </div>
    </main>
  );
}
