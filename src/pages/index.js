import Slider from "@/components/SliderCard";
import Cards from "@/containers/cards";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Cards />
    </>
  );
}
