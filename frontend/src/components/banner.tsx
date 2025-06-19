import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-[1300px]">
        <Image
          src="/banner.png"
          alt="banner"
          className="w-full h-auto object-cover rounded-2xl"
          priority
          width={1200}
          height={900}
        />
      </div>
    </div>
  );
}
