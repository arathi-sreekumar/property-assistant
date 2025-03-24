import { useState } from "react";
import { TooltipUI, TooltipWrapper } from "./Tooltip.css";

type Props = {
  content: string;
  direction?: "top" | "bottom" | "left" | "right";
  delay?: number;
  children: React.ReactNode;
};

const Tooltip = ({
  content,
  direction,
  delay,
  children,
}: Props) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <TooltipWrapper
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <TooltipUI className={`${direction || "top"}`}>
          {/* Content */}
          {content}
        </TooltipUI>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
