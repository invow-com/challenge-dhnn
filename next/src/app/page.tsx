import { Navbar } from "@/components/Navbar/Navbar";
import HomePage from "@/pages/Home";

export default function Home() {
  return (
    <div className="bg-white flex flex-col w-full">
      <Navbar />
      <HomePage />
    </div>
  );
}
