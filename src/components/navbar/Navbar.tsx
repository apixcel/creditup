"use client";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

function Navbar({ className }: { className?: string }) {
const [active, setActive] = useState<string | null>(null);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
  if (window.scrollY > 0) {
  setScrolling(true);
  } else {
  setScrolling(false);
  }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <div className={cn( "fixed inset-x-0 w-[100%] z-50 transition-colors duration-300" , scrolling ? "bg-[#242732]"
    : "bg-transparent" , className )}>
    <div className="container">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Benefits">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Testimonial">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Works">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="FAQ">
        </MenuItem>
      </Menu>
    </div>
  </div>
  );
  }

  export default Navbar;