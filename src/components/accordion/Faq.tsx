/* eslint-disable react/no-unescaped-entities */
"use client";
import { Accordion } from "keep-react";

export const Faq = () => {
  return (
    <Accordion flush={true}>
      <Accordion.Panel className="rounded-xl bg mt-4 border  border-[#ffffff23]">
        <Accordion.Container>
          <Accordion.Title className="text-[20px] text-white font-semibold">
            Q. Is this a debt management service?
          </Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className="text-white">
          We do not provide any form of debt management services. It is
          important to note that opting for a debt management plan may indicate
          to lenders that you are not in control of your finances and have
          sought external assistance to manage your money. In such a plan, a
          company takes control of your finances and charges a high management
          fee that could go up to 35-40% of your total repayment amount.
          Therefore, we strongly advise against choosing a debt management plan.
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="rounded-xl bg mt-4 border  border-[#ffffff23]">
        <Accordion.Container>
          <Accordion.Title className="text-[20px] text-white font-semibold">
            Q. Is this similar to an IVA?
          </Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className="text-white">
          We don't offer any IVA processes as part of our services. While an IVA
          may seem like an appealing option, it is a life-altering service that
          can either work in your favor or severely damage your financial
          well-being. However, we have partnered with firms that specialize in
          offering clear advice to help you determine whether an IVA is
          appropriate for your particular situation.
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="rounded-xl bg mt-4 border  border-[#ffffff23]">
        <Accordion.Container>
          <Accordion.Title className="text-[20px] text-white font-semibold">
            Q. If my creditor repayments are reduced by 50% will that mean, it
            will take me longer to pay off my problem debts?
          </Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className="text-white">
          Rest assured that when we help you freeze the interest and charges on
          your problem debts, your lender will no longer be able to add
          additional interest to your current balances moving forward. This
          guarantees that every month when you repay your debts, the full amount
          paid will go directly towards reducing your outstanding balances. With
          this approach, you can expect to reduce your balances up to four times
          faster. We are confident that this will help you achieve your
          financial goals in a timelier manner.
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="rounded-xl bg mt-4 border  border-[#ffffff23]">
        <Accordion.Container>
          <Accordion.Title className="text-[20px] text-white font-semibold">
            Q. Do I pay you my reduced payments and are these then distributed
            to my lenders?
          </Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className="text-white">
          No, as we provide a comprehensive solution that includes our AI
          software generating all the essential legal documents and letters for
          you, and our team of skilled paralegals assisting you in negotiating
          reduced payments with your lenders directly. This ensures that you
          retain complete control over your finances each month with confidence
          and peace of mind.
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="rounded-xl bg mt-4 border  border-[#ffffff23]">
        <Accordion.Container>
          <Accordion.Title className="text-[20px] text-white font-semibold">
            Q. Will this affect my credit score?
          </Accordion.Title>
          <Accordion.Icon />
        </Accordion.Container>
        <Accordion.Content className="text-white">
          It's important to understand that a good credit score doesn't always
          guarantee eligibility for new finance. This could be due to high debt
          levels in relation to income, similar to owning a Ferrari but not
          being able to afford the fuel to drive it. Despite the adverse effects
          on your file when you begin making payments under the new arrangement,
          rest assured that sticking to your reduced creditor repayments will
          yield positive results for your credit score. We're also providing you
          with access to a credit-boosting service at no additional cost, which
          has the potential to increase your score by up to 300 points within a
          few months. With this service, you can be confident of improving your
          creditworthiness and securing the finance you need.
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};
