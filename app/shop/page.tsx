import Image from "next/image";
import Hero from "../../assets/rasters/hamuj1-2.jpg";
import { Metadata } from "next";
import Shop from "./shop";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore our catalog of products",
  icons: {
    icon: "/favicon.png",
  },
};

const ShopPage = () => {
  return (
    <main className="relative w-full h-auto min-h-lvh">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden">
        <Image
          src={Hero}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.7] z-[1]"
        />
        <div className="z-[2] absolute w-full h-full bg-gradient-to-tr from-[#061843ad] to-[#2a2a2a00]" />

        <h1 className="absolute z-[3] w-full text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">
            SHOP
          </span>
          <span className="text-sm md:text-[20px] max-w-[90%] md:max-w-[70%] leading-[1.25]">
          Explore our catalog of lush furniture and other products
          </span>
        </h1>
      </section>
      <Shop />
    </main>
  );
};

export default ShopPage;