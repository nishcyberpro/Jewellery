import Image from "next/image";
import Slider from "./components/Slider";
import NewArrival from "./components/NewArrival";

export default function Home() {
  return (
    <div>
      <Slider />
      <NewArrival />
      <NewArrival />
      <NewArrival />
    </div>
  );
}
