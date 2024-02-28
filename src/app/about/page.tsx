import about from "@/images/about.jpg";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "I’m John Doe, a full-stack developer and tech enthusiast based in Hong Kong.",
};

export default function AboutPage() {
  return (
    // The grid layout is a 12-column grid, with a gap of 9 between columns and rows.
    <div className="grid grid-cols-12 lg:gap-x-9 gap-y-9">
      {/*  The lg:col-span-7 class applies to the element when the scree size is large or greater. */}
      {/*  It defaults to 12 columns on smaller screens. */}
      <div className="lg:col-span-7 col-span-12">
        <h1 className="text-4xl mt-6 font-bold tracking-tight text-zinc-800 sm:text-5xl">
          I’m John Doe, a full-stack developer and tech enthusiast based in Hong
        </h1>

        <div className="mt-6 space-y-7 text-base text-zinc-600 font-light">
          <p>
            My name is John Doe, and I am a passionate full-stack developer and
            technology enthusiast based in the vibrant city of Hong Kong.
            Currently, I hold the position of lead developer at TechNova, a
            cutting-edge tech company dedicated to creating groundbreaking
            solutions that harness the power of AI and machine learning to
            tackle real-world challenges head-on.
          </p>
          <p>
            Open-source software has always held a special place in my heart,
            and I take great pride in actively contributing to various
            open-source projects. Being part of the open-source community allows
            me to collaborate with like-minded individuals and contribute to the
            collective advancement of technology.
          </p>
          <p>
            Apart from my professional endeavors, I am also an avid AI hobbyist,
            constantly fueled by my curiosity to explore and experiment with the
            latest technologies and frameworks. The ever-evolving AI landscape
            presents endless opportunities for innovation, and I find immense
            joy in pushing the boundaries of what is possible.
          </p>
        </div>
      </div>

      <div className="lg:col-span-5 col-span-12 max-w-sm lg:max-w-none m-auto">
        <Image
          className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover"
          src={about}
          alt="John Doe's about image"
          priority
        />
      </div>
    </div>
  );
}
