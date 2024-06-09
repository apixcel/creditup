"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  img?: string;
}

interface TestimonialMovingCardsProps {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const TestimonialMovingCards: React.FC<TestimonialMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) scrollerRef.current.appendChild(duplicatedItem);
    });

    getDirection();
    getSpeed();
  };

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "normal" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          containerRef.current && scrollerRef.current ? "animate-scroll" : "",
          pauseOnHover ? "hover:animate-none" : ""
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] bg-[#242732]"
            key={item.name + idx} // Added idx to ensure unique key
          >
            <blockquote>
              <Image
                src={item.img as string}
                alt="Description of the image"
                width={50}
                height={50}
                className="relative z-20 leading-[1.6] text-gray-100 text-[16px] font-medium rounded-lg"
              />
              <div className="relative z-20 my-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-[18px] leading-[1.6] text-white font-bold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
              <span className="relative z-20 leading-[1.6] text-gray-100 text-[16px] font-medium">
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
