"use client"
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "@/components/counter/ScrollTrigger";

interface NumberCounterProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number; // Specify that decimals is an optional prop
}

const NumberCounter: React.FC<NumberCounterProps> = ({
  end,
  start = 0,
  duration,
  decimals = 0, // Provide a default value if necessary, or handle it being undefined in CountUp
}) => {
  const [visible, setVisible] = useState(false);

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onExitViewport = () => {
    setVisible(false);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      {visible && <CountUp start={start} end={end} duration={duration} decimals={decimals} />}
    </ScrollTrigger>
  );
};

export default NumberCounter;
