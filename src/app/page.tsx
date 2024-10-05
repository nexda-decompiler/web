"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import Particles from "@/components/ui/particles";

export default function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden">
      <div>
        <Image src={'logo-w.svg'} alt="Logo" width={142} height={142} className="mt-10" />
      </div>
      <h1 className="text-4xl mt-20 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          The modern SRE platform.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Nexda is a software reverse engineering platform built in C++, made for decompilation and disassembly. It is designed to be fast, efficient, and easy to use.
        </p>
        <ShimmerButtonDemo />
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}

import ShimmerButton from "@/components/ui/shimmer-button";

export function ShimmerButtonDemo() {
  return (
    <>
    <a className="z-20" href='https://github.com/nexda-decompiler/nexda'>
    <div className="z-10 flex mt-5 items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Explore more
        </span>
      </ShimmerButton>
    </div>
    </a>
    </>
  );
}