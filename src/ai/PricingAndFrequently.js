import * as React from "react";

const CheckmarkIcon = () => (
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/198567ce543a81d139cdff078c9c211038d5f9ce64afc7b1ec5de3c063ebd6e1?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
    alt="Checkmark icon"
    className="shrink-0 w-5 border-2 border-solid aspect-square border-zinc-800 stroke-[1.5px] stroke-zinc-800"
  />
);

const ServiceItem = ({ children }) => (
  <div className="flex gap-4">
    <CheckmarkIcon />
    <div className="flex-auto">{children}</div>
  </div>
);

const PlusIcon = () => (
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a91949f7ad26d1dc2dda107003465885ab27aa04e228ab6d43df61023568009?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
    alt="Plus icon"
    className="shrink-0 my-auto w-4 border-2 border-solid aspect-[2] border-zinc-800 stroke-[1.5px] stroke-zinc-800"
  />
);

const MinusIcon = () => (
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a4a340b6b9e99133420038d755f833597f2edc5e1cb8f9dbd2f24bb08e4c90d?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
    alt="Minus icon"
    className="shrink-0 my-auto w-4 border-2 border-solid aspect-[7.69] border-zinc-800 stroke-[1.5px] stroke-zinc-800"
  />
);

const PlusMinusIcon = () => (
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9009c85638297fa603ef67b1c3474fc2299e2c858353cd4da92cde89a4139dfd?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
    alt="Plus minus icon"
    className="shrink-0 self-start w-4 border-2 border-solid aspect-square border-zinc-800 stroke-[1.5px] stroke-zinc-800"
  />
);

const FAQItem = ({ question, children, isOpen }) => (
  <div className="flex flex-col px-8 py-7 rounded-xl border border-solid border-zinc-800 mix-blend-plus-lighter text-zinc-800 max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 text-lg font-bold leading-5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <div className="flex-auto">{question}</div>
      {isOpen ? <MinusIcon /> : <PlusMinusIcon />}
    </div>
    {isOpen && <div className="mt-6 text-base leading-6 max-md:max-w-full">{children}</div>}
  </div>
);

const faqs = [
  {
    question: "How can I contact Inkyy Team?",
    answer: (
      <>
        You can reach us through our contact form on our website or by emailing us at{" "}
        <span className="font-bold text-zinc-800">hello@inkyy.com</span> We typically respond within 24 hours.
      </>
    ),
    isOpen: true,
  },
  {
    question: "What services do you offer?",
    answer: "",
    isOpen: false,
  },
  {
    question: "Do you provide website maintenance services?",
    answer: "",
    isOpen: false,
  },
  {
    question: "How long does it take to design and develop a website?",
    answer: "",
    isOpen: false,
  },
  {
    question: "Do you require a deposit for projects?",
    answer: "",
    isOpen: false,
  },
];

function PricingAndFrequently() {
  return (
    <div className="flex flex-col">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-10 font-bold max-md:max-w-full">
              <div className="flex flex-col self-end px-5 max-w-full w-[447px]">
                <h1 className="text-6xl leading-[72px] text-zinc-800 max-md:max-w-full max-md:text-4xl">Pricing</h1>
                <p className="mt-6 text-sm leading-5 text-zinc-400 max-md:max-w-full">
                  Take a look at some of our recent projects to see how we've helped businesses like yours succeed
                  online.
                </p>
                <div className="flex flex-col px-7 pt-11 pb-7 mt-20 rounded-3xl border border-solid border-zinc-800 mix-blend-plus-lighter max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-4xl leading-10 text-zinc-800">Let's Schedule a Meeting</h2>
                  <button className="justify-center items-center px-16 py-6 mt-8 text-base leading-6 text-center text-white bg-indigo-600 rounded-xl max-md:px-5">
                    Schedule Meeting
                  </button>
                </div>
              </div>
              <div className="overflow-hidden relative flex-col justify-center items-end px-16 pt-64 pb-52 mt-4 max-w-full text-6xl mix-blend-color-burn leading-[72px] min-h-[726px] text-zinc-800 w-[563px] max-md:py-10 max-md:pr-8 max-md:pl-5 max-md:text-4xl max-md:leading-[53px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c62ae8db991961de4939446345e27459a859c3cb66421b86c65b7e276af580b6?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
                  alt="Background image"
                  className="object-cover absolute inset-0 size-full"
                />
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-col items-start px-7 pt-12 pb-6 bg-indigo-600 rounded-3xl mix-blend-plus-lighter max-md:px-5 max-md:max-w-full">
                <h3 className="ml-7 text-3xl font-bold leading-9 text-zinc-800 max-md:ml-2.5">Unlimited Services</h3>
                <p className="mt-11 ml-7 text-sm leading-5 text-zinc-400 w-[383px] max-md:mt-10 max-md:max-w-full">
                  Take a look at some of our recent projects to see how we've helped businesses like yours succeed
                  online.
                </p>
                <div className="mt-11 ml-9 max-w-full w-[531px] max-md:pr-5 max-md:mt-10">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-sm leading-6 text-zinc-800 max-md:mt-10">
                        <ServiceItem>Unlimited requests</ServiceItem>
                        <div className="mt-6">
                          <ServiceItem>Unlimited requests</ServiceItem>
                        </div>
                        <div className="mt-6">
                          <ServiceItem>Unlimited requests</ServiceItem>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-sm leading-6 text-zinc-800 max-md:mt-10">
                        <ServiceItem>Unlimited requests</ServiceItem>
                        <div className="mt-6">
                          <ServiceItem>Unlimited requests</ServiceItem>
                        </div>
                        <div className="mt-6">
                          <ServiceItem>Unlimited requests</ServiceItem>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between self-stretch px-16 py-9 mt-11 w-full whitespace-nowrap rounded-xl bg-slate-50 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-3.5">
                    <div className="grow text-6xl font-bold leading-[72px] text-zinc-800 max-md:text-4xl">$3,250</div>
                    <div className="self-end mt-9 text-xl leading-8 text-zinc-400">/mo</div>
                  </div>
                  <PlusIcon />
                </div>
              </div>
              {faqs.map((faq, index) => (
                <div key={index} className="mt-4">
                  <FAQItem question={faq.question} isOpen={faq.isOpen}>
                    {faq.answer}
                  </FAQItem>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full border border-solid bg-slate-200 border-slate-200 min-h-[1px] max-md:max-w-full" />
    </div>
  );
}

export default PricingAndFrequently;