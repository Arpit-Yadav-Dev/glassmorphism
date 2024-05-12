import * as React from "react";

const MenuLink = ({ children }) => (
  <div className="text-zinc-400">{children}</div>
);

const MenuButton = ({ children }) => (
  <div className="justify-center px-9 py-4 font-bold text-center text-white bg-indigo-600 rounded-xl max-md:px-5">
    {children}
  </div>
);

const Header = () => (
  <header className="flex gap-3.5 justify-between items-center self-stretch  w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
    <div className="flex justify-center items-center self-stretch px-3 my-auto bg-black rounded-xl h-[37px] w-[37px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcf1201c554e7c2744e4070489d3c362599bfaff6238abe2aec1d99ed6aa9286?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
        alt=""
        className="aspect-[0.62] fill-black w-[13px]"
      />
    </div>
    <div className="flex gap-1 self-stretch my-auto">
      <div className="flex gap-0.5 items-start">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/49dc68d39ccec35b956d50ea78607281c98d0068b5ca1b5c92a330b1993dd895?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
          alt=""
          className="shrink-0 w-3 aspect-[0.57] fill-black"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5ad96c133f036edf20d2d879da814ad76adc11f830de73bfd9b269b7fb7af58?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
          alt=""
          className="shrink-0 mt-1 aspect-square fill-black w-[18px]"
        />
      </div>
      <div className="flex gap-0.5 items-start">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/45ed9b58daa535705175ab3217e0ba8391531413bb8bd018e87ace25b790e6ca?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
          alt=""
          className="shrink-0 mt-1 aspect-[0.72] fill-black w-[13px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b5aabec04d783c9dc12d659355888256ede2d7b73442cbcf55760a020f3768f?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
          alt=""
          className="shrink-0 w-2.5 aspect-[0.48] fill-black"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8bb3d649ec43fb78ad000ac58f913ee01c8d6a2dce1d3643401cf4dbec9a3a1?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
          alt=""
          className="shrink-0 mt-1 aspect-[0.94] fill-black w-[17px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7e5f51458fbf810d4f61cf16c45b155f8b14f61972bfc68bc058e3d43e38e32?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
          alt=""
          className="shrink-0 mt-1 aspect-[0.53] fill-black w-[9px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b84a6905388756c9bfd7ecda466980c7fdb0c3108cbb27d80d153051b4684962?apiKey=877e8cc34e814577be2645c5cab8e8b7&"
          alt=""
          className="shrink-0 self-stretch aspect-[0.78] fill-black w-[17px]"
        />
        <div className="shrink-0 w-1 bg-black h-[21px]" />
      </div>
    </div>
    <nav className="flex gap-5 justify-between self-stretch text-base leading-6 max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 justify-between px-14 py-7 rounded-3xl border border-white border-solid bg-white bg-opacity-60 text-zinc-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="font-bold text-zinc-800">Home</div>
        <MenuLink>About</MenuLink>
        <MenuLink>How it Works</MenuLink>
        <MenuLink>Services</MenuLink>
      </div>
      <div className="flex gap-5 justify-between my-auto">
        <MenuLink>Sign In</MenuLink>
        <MenuButton>Sign Up</MenuButton>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="flex flex-col items-center">
    <h1 className="mt-28 text-7xl font-bold text-center leading-[73px] text-zinc-800 w-[764px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
      Awesome UI Dark Template for Webflow Agency
    </h1>
    <button className="justify-center px-14 py-6 mt-8 text-base font-bold leading-6 text-center text-white rounded-xl bg-zinc-800 max-md:px-5">
      Get in Touch
    </button>
  </section>
);

function FirstSection() {
  return (
    <div className="flex flex-col items-center px-5 ">
      <Header />
      <Hero />
    </div>
  );
}

export default FirstSection;
