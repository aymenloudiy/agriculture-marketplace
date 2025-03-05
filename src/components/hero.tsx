import Search from "./search";

export default function Hero() {
  return (
    <div className="flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full">
      <h2 className="text-lg">Buy your agricultral goods now</h2>
      <h2 className="font-bold text-[60px]">Buy goods now</h2>
      <Search />
    </div>
  );
}
