
import CarContainer from "@/components/CardContainer/CarContainer";
import { populerCars, recomendedCars } from "@/components/CardContainer/cars";
import Header from "@/components/Header/Header";
import Pikup from "@/components/Pikup/Pikup";
import WIthNav from "@/components/WIthNav/WIthNav";

export default function Home() {
  return (
    <WIthNav>
      <Header />
      <Pikup />
      <CarContainer cars={recomendedCars} />
      <CarContainer cars={populerCars} />
    </WIthNav>
  );
}
