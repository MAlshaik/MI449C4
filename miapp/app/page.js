import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-12">
      <h1 className="text-4xl font-bold">Your profile</h1>
      <Image width={400} height={400} alt="yo" src="/profile.png" />
      <h1 className="text-2xl font-bold">friends</h1>
      <div className="flex flex-row gap-12">
        <Image width={100} height={100} alt="yo" src="/profile.png" />
        <Image width={100} height={100} alt="yo" src="/profile.png" />
        <Image width={100} height={100} alt="yo" src="/profile.png" />
        <Image width={100} height={100} alt="yo" src="/profile.png" />
        <Image width={100} height={100} alt="yo" src="/profile.png" />
      </div>
    </main>
  );
}
