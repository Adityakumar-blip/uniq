import Image from "next/image";
import { Inter } from "next/font/google";
import ProjectsCard from "@/components/ProjectsCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4"></div>
  );
}
