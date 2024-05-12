import * as React from "react";

function Logo() {
  return (
    <div className="flex gap-3.5 mt-1 max-w-full w-[187px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4f7835d0b92af255b00f00966a92bad2af1d0d54ffd2635a33dc696e7bbd37d?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
        alt="Company logo"
        className="shrink-0 rounded-xl aspect-square w-[41px]"
      />
      <div className="flex gap-1 my-auto">
        <div className="flex gap-0.5 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a2a6c332fb41ee8da166f0f0981b0f7956cfd1297fa1d057d69a861236cfaa2?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt=""
            className="shrink-0 w-3.5 aspect-[0.61] fill-neutral-900"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/26d802b51c2a643ae6e0b6b2cfcd4ad0cede21e731a96d353a29b6508bd5b82c?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt=""
            className="shrink-0 mt-1 aspect-[0.95] fill-neutral-900 w-[19px]"
          />
        </div>
        <div className="flex gap-1 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2da5d5946875326aa22c918bc2a25796c42aa6ee21ff92be02db08328255d14?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt=""
            className="shrink-0 mt-1 aspect-[0.75] fill-neutral-900 w-[15px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8399404b0d86f617163b53f188dcfa58e881c8854b15663526e0a101dd73bcb9?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt=""
            className="shrink-0 w-2.5 aspect-[0.43] fill-neutral-900"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0a75c3299608f92b905b025fb06e97c97da9fa0b9677e1ca73f5e2975a4ea81?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt=""
            className="shrink-0 mt-1 aspect-[0.9] fill-neutral-900 w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c5f8d1fb778faeed8cc0f0748e435be235cf1fb2d8e62b92020a703e910a200?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt=""
            className="shrink-0 mt-1 aspect-[0.47] fill-neutral-900 w-[9px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/531cd83ed28ab6668a5106111a4c16ca4941d287f34c419a5480a57171819e7d?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt=""
            className="shrink-0 aspect-[0.78] fill-neutral-900 w-[18px]"
          />
          <div className="shrink-0 w-1 bg-neutral-900 h-[23px]" />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col px-16 py-20 w-full border border-solid border-slate-200 max-w-[1216px] rounded-[40px] max-md:px-5 max-md:max-w-full">
      <Logo />
      <div className="flex gap-5 px-0.5 mt-9 w-full text-base text-zinc-400 max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto leading-6">
          Ready to elevate your online presence? Contact us today to discuss
          your project and discover how we can bring your vision to life.
        </div>
        <nav className="flex gap-5 justify-between self-start leading-[150%]">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/how-it-works">How it Works</a>
          <a href="/services">Services</a>
        </nav>
      </div>
      <div className="flex gap-5 justify-between mt-10 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-3.5 self-end mt-7 text-base leading-6 text-zinc-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/067c90e0f3ccb049cb583c84360e689e90276a228b5ceb02b202c7c404bba6d3?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt="Love icon"
            className="shrink-0 w-5 border-2 border-solid aspect-[1.11] border-zinc-400 stroke-[1.5px] stroke-zinc-400"
          />
          <div className="flex-auto">Made with love powered by inkyy.com</div>
        </div>
        <div className="flex gap-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fe957b8f37bd87cb7835b4aadf5ef3e11a5b38952aa4149797b1dc01f455fc8?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt="Social media icon 1"
            className="shrink-0 w-12 h-12 rounded-full aspect-square bg-slate-50"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed857161416e403afd8350f0cd2e42d93cc0a092e39d5d4e29ce01612e4c12c?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt="Social media icon 2"
            className="shrink-0 w-12 h-12 rounded-full aspect-square bg-slate-50"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/42a7757c5d787e56ac448a5e8111b393ae87b61f93b1968982b242cc2121280a?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt="Social media icon 3"
            className="shrink-0 w-12 h-12 rounded-full aspect-square bg-slate-50"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5002ca02bec17b51cf565a94ecfe00ee3aea34a139648e4ad153da3e6330106a?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
            alt="Social media icon 4"
            className="shrink-0 w-12 h-12 rounded-full aspect-square bg-slate-50"
          />
        </div>
      </div>
    </footer>
  );
}

function ContactForm() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col px-5 ml-14 max-w-full text-lg font-bold leading-5 text-zinc-800 w-[696px]">
        <h1 className="self-center text-6xl text-center max-md:max-w-full max-md:text-4xl">
          Let's Get in Touch
        </h1>
        <div className="mt-24 max-md:mt-10 max-md:max-w-full">email</div>
        <input defaultValue={"example@email.com"} className="justify-center items-start px-8 py-7 mt-3.5 text-xl leading-8 whitespace-nowrap rounded-xl border border-solid border-slate-200 text-zinc-400 max-md:px-5 max-md:max-w-full"/>
          
        
        <div className="mt-6 max-md:max-w-full">name</div>
        <input defaultValue={"full name"} className="justify-center items-start px-8 py-7 mt-3.5 text-xl leading-8 rounded-xl border border-solid border-slate-200 text-zinc-400 max-md:px-5 max-md:max-w-full"/>
          
        
      </div>
      <div className="self-stretch mt-8 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <div className="overflow-hidden relative z-10 flex-col grow items-end pt-0 pr-44 pb-20 pl-16 text-lg font-bold leading-5 whitespace-nowrap mix-blend-color-burn min-h-[525px] text-zinc-800 max-md:pr-8 max-md:pl-5 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1a68749d06fac1075a856b8b44852e150330636ce7164891fae08bab8ec3ea3?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
                alt="Background image"
                className="object-cover absolute inset-0 size-full"
              />
              message
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 mt-5 leading-[150%] max-md:max-w-full">
              <input defaultValue={"write your message...."} className="items-start px-8 pt-7 pb-36 text-xl rounded-xl border border-solid border-slate-200 text-zinc-400 max-md:px-5 max-md:pb-10 max-md:max-w-full"/>
                
              
              <button
                type="submit"
                className="self-center mt-12 text-base font-bold text-center text-white max-md:mt-10"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetInTouch() {
  return (
    <main>
      <ContactForm />
      <Footer />
    </main>
  );
}

export default GetInTouch;