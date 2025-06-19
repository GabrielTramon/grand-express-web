import Image from "next/image";
import banner from "../assets/banner.png";

export default function Banner() {
  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-[1300px]">
        <Image
          src={banner}
          alt="banner"
          className="w-full h-auto object-cover rounded-2xl"
          priority
        />
      </div>
    </div>
  );
}
