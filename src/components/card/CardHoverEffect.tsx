import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="w-full">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    id: "1",
    icon: "/svg/card_1.svg",
    title: "Request a Freeze on interest and charges",
    description:
      "This will prevent balance growth, and enable you to pay off the debt up to 5x faster.",
  },
  {
    id: "2",
    icon: "/svg/card_2.svg",
    title: "Legal Audit",
    description:
      "We'll check your credit agreements to see if the lender skipped necessary verifications. If so, you could get compensation or a complete debt write-off.",
  },
  {
    id: "3",
    icon: "/svg/card_3.svg",
    title: "CUT your repayments by 50%",
    description:
      "Cut your repayments by half to have more money at the end of each month. Pay off your outstanding debts faster by directing funds towards the current balance",
  },
  {
    id: "4",
    icon: "/svg/card_4.svg",
    title: "Account Review",
    description:
      "We'll meet weekly and monthly with lenders to keep your arrangements in place as long as you need",
  },
  {
    id: "5",
    icon: "/svg/card_5.svg",
    title: "Dedicated paralegal",
    description:
      "Our expert paralegals are ready to help you with any questions or concerns you may have. You are not alone on this journey.",
  },
  {
    id: "6",
    icon: "/svg/card_6.svg",
    title: "Increase your credit score",
    description:
      "Get your credit report with in-depth data to see what lenders look for when approving new finances.",
  },
];
