import * as React from "react";

const ServiceCard = ({ icon, title, description }) => (
  <div className="flex flex-col px-6 py-8 w-full rounded-xl border border-solid border-zinc-800 mix-blend-plus-lighter max-md:px-5 max-md:mt-10">
    <img src={icon} alt={title} className="w-11 rounded-lg aspect-square" />
    <div className="mt-6 text-xl font-semibold leading-6 text-zinc-800">{title}</div>
    <div className="mt-6 text-sm leading-5 text-zinc-400">{description}</div>
  </div>
);

const services = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9347a6a52f2ec7c65b5b8f68430cec4e69028d4e28d23dcbb56dd33bfee3c8a6?apiKey=877e8cc34e814577be2645c5cab8e8b7&",
    title: "Web Design",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1165298245b61fddb1345e1fb3d59eab9752a903aa63ecfb63dc03d8b046b1dd?apiKey=877e8cc34e814577be2645c5cab8e8b7&",
    title: "UI/UX Design", 
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2f12595ab0e8f300b9f9762047c297c060633926b9012a20ee96c87b7652daf?apiKey=877e8cc34e814577be2645c5cab8e8b7&",
    title: "Responsive Design",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b05f133cc53a336b5690011ed01a5f904a58de06f7a31703198af28192fc5d8?apiKey=877e8cc34e814577be2645c5cab8e8b7&",
    title: "Custom Development",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
  },
];

const WebflowSection = () => (
  <div className="grow px-6 py-5 w-full rounded-xl border border-solid border-zinc-800 mix-blend-plus-lighter max-md:pl-5 max-md:mt-8 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto max-md:mt-10">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f12595ab0e8f300b9f9762047c297c060633926b9012a20ee96c87b7652daf?apiKey=877e8cc34e814577be2645c5cab8e8b7&" alt="Webflow" className="w-11 rounded-lg aspect-square" />
          <div className="mt-6 text-xl font-semibold leading-6 text-zinc-800">Webflow</div>
          <div className="mt-7 text-sm leading-5 text-zinc-400">
            From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
        <div className="flex justify-center items-center px-16 w-full bg-indigo-500 rounded-md aspect-square max-md:px-5 max-md:mt-10">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceb967fbb35c761e6d5e3bc08cafa9ae07d1f6303b72ed60b561a0ebd3bfa4d9?apiKey=877e8cc34e814577be2645c5cab8e8b7&" alt="" className="mt-3 aspect-[1.54] fill-white w-[91px]" />
        </div>
      </div>
    </div>
  </div>
);

const EcommerceSection = () => (
  <div className="flex flex-col grow px-6 py-7 mt-14 w-full rounded-xl border border-solid border-zinc-800 mix-blend-plus-lighter max-md:pr-5 max-md:mt-10">
    <div className="shrink-0 rounded-lg bg-slate-50 h-[46px]" />
    <div className="mt-6 text-xl font-semibold leading-6 text-zinc-800 max-md:mr-2.5">E-commerce Solutions:</div>
    <div className="mt-8 text-sm leading-5 text-zinc-400">
      From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
    </div>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e24dff699a5d683182f615d12f50299b9745d807d576659125a8a87477471c5e?apiKey=877e8cc34e814577be2645c5cab8e8b7&" alt="E-commerce Solutions" className="mt-12 w-full aspect-[0.87] max-md:mt-10" />
  </div>  
);

function WhatWeDo() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 max-md:mt-8 max-md:max-w-full">
            <h1 className="text-6xl font-bold leading-[72px] text-zinc-800 max-md:max-w-full max-md:text-4xl">What We do</h1>
            <div className="mt-3.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {services.map((service, index) => (
                  <div key={index} className={`flex flex-col ${index > 0 ? 'ml-5' : ''} w-[33%] max-md:ml-0 max-md:w-full`}>
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
                  <WebflowSection />
                </div>
                <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                  <ServiceCard
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6b05f133cc53a336b5690011ed01a5f904a58de06f7a31703198af28192fc5d8?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
                    title="Custom Development"
                    description="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
          <EcommerceSection />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;