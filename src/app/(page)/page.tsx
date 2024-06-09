import { Faq } from "@/components/accordion/Faq";
import { HeroBanner } from "@/components/banner/HereBanner";
import { CardHoverEffect } from "@/components/card/CardHoverEffect";
import { Testimonial } from "@/components/carosol/Testimonial";
import NumberCounter from "@/components/counter/NumberCounter";

export default function Home() {
  return (
    <>
      <section className="relative h-[100%] overflow-hidden" id="home">
        <div className="container">
          <HeroBanner />
        </div>
      </section>
      <section className="py-[50px] bg" id="benefits">
        <div className="container">
          <div className="w-full md:w-[550px] m-auto mb-5">
            <h2 className="text-[30px] sm:text-[36px] text-white text-center font-bold">
              Real Time Statistics
            </h2>
          </div>
          <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
            <div className="text-center w-full h-full p-[40px] rounded-xl bg-[#242732]">
              <h4 className="text-[22px] font-semibold">
                Unfair lending claims paid out
              </h4>
              <h2 className="text-[36px] font-bold mt-3 flex flex-row items-center justify-center">
                £
                <NumberCounter
                  end={250000}
                  start={100}
                  duration={3}
                  decimals={2}
                />
              </h2>
            </div>
            <div className="text-center w-full h-full p-[40px] rounded-xl bg-[#242732]">
              <h4 className="text-[22px] font-semibold">
                Payment arrangements in place
              </h4>
              <h2 className="text-[36px] font-bold mt-3 flex flex-row items-center justify-center">
                <NumberCounter end={1650} start={100} duration={3} />
              </h2>
            </div>
            <div className="text-center w-full h-full p-[40px] rounded-xl bg-[#242732]">
              <h4 className="text-[22px] font-semibold">Donated to charity</h4>
              <h2 className="text-[36px] font-bold mt-3 flex flex-row items-center justify-center">
                £<NumberCounter end={305} start={100} duration={3} />K
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[80px] relative overflow-hidden">
        <div className="container">
          <div className="m-auto text-center">
            <h2 className="text-[30px] sm:text-[36px] md:text-[56px] mt-[-15px] md:mt-0 text-white text-center font-bold">
              Benefits
            </h2>
          </div>
          <CardHoverEffect />
        </div>
      </section>
      <section className="py-[80px] h-full relative bg overflow-hidden">
        <div className="container">
          <div className="w-full m-auto text-center">
            <h2 className="text-[30px] sm:text-[36px] md:text-[56px] mt-[-15px] md:mt-0 text-white text-center font-bold">
              Voices Of Clients
            </h2>
          </div>
          <div className="w-full mt-5 flex flex-col items-center">
            <Testimonial />
            <button className="mt-5 relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                Leave Your Review
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="py-[80px] relative overflow-hidden">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[30px] sm:text-[36px] md:text-[56px] mt-[-15px] md:mt-0 text-white text-center font-bold">
              HAVE QUESTIONS?
            </h2>
          </div>
          <div className="mt-8 z-10">
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
