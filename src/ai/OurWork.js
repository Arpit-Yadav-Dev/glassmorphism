import * as React from "react";

function RoundedImage({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="bg-white rounded-full border border-white border-solid aspect-square h-[78px] stroke-[1px] w-[78px]"
    />
  );
}

function ImageWithBorder({ src, alt, className }) {
  return (
    <div className={`flex flex-col justify-center items-start py-9 mt-28 rounded-xl border border-solid border-zinc-800 mix-blend-plus-lighter max-md:pr-5 max-md:mt-10 ${className}`}>
      <img loading="lazy" src={src} alt={alt} className="w-full aspect-[0.46]" />
    </div>
  );
}

function OurWork() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd24c55814ab6e95ed765938a9942db299ff0ec87a180c02b74c11fd3dc059d2?apiKey=877e8cc34e814577be2645c5cab8e8b7&", alt: "Image 0" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f84b2f8dcf7314b008250e4a1f0c786ff4aeb04e6666a1dedd7e0a36ab290a3b?apiKey=877e8cc34e814577be2645c5cab8e8b7&", alt: "Image 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/960b5e4e0799dffdaf4681f169b4ac85d263db3d5777c8532042e6a1aff02724?apiKey=877e8cc34e814577be2645c5cab8e8b7&", alt: "Image 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c997ee716a987382e418fbe4011d70202034e95d35683b861a174291e41248ed?apiKey=877e8cc34e814577be2645c5cab8e8b7&", alt: "Image 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b09b83f0b389f637a358789578e4a05e130766b8d7fd1e73a7c7961a5bb104d1?apiKey=877e8cc34e814577be2645c5cab8e8b7&", alt: "Image 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/803a78c4fa6861899bcb4f4a868bcce747cf3641f305aa78b099682ec16e4220?apiKey=877e8cc34e814577be2645c5cab8e8b7&", alt: "Image 5" },
  ];

  return (
    <div className="flex flex-col">
      <div className="px-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-28 max-md:mt-10">
              <RoundedImage src={images[0].src} alt={images[0].alt} />
              <ImageWithBorder src={images[1].src} alt={images[1].alt} />
            </div>
          </div>
          <main className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <section className="flex overflow-hidden relative flex-col items-center pt-20 mix-blend-color-burn min-h-[841px] max-md:mt-4 max-md:max-w-full">
              <img loading="lazy" src={images[2].src} alt={images[2].alt} className="object-cover absolute inset-0 size-full" />
              <h1 className="relative mt-5 text-6xl font-bold leading-[72px] text-zinc-800 max-md:max-w-full max-md:text-4xl">
                Check our Work
              </h1>
              <p className="relative mt-12 text-sm leading-5 text-center text-zinc-400 w-[449px] max-md:mt-10 max-md:max-w-full">
                Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.
              </p>
              <div className="flex relative z-10 flex-col justify-center self-stretch p-9 mt-14 rounded-xl border border-solid border-zinc-800 mix-blend-plus-lighter max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src={images[3].src} alt={images[3].alt} className="w-full aspect-[1.33] max-md:max-w-full" />
              </div>
            </section>
          </main>
          <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start mt-28 max-md:mt-10">
              <RoundedImage src={images[4].src} alt={images[4].alt} />
              <ImageWithBorder src={images[5].src} alt={images[5].alt} className="ml-4 w-72 max-w-full max-md:pl-5 max-md:ml-2.5" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3.5 self-center px-6 py-6 mt-20 bg-white rounded-3xl border border-solid border-slate-200 max-md:px-5 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/204ac0ca1f6c66827150ba06315449ada872a9191f405dc5bbba7787af6eab64?apiKey=877e8cc34e814577be2645c5cab8e8b7&" alt="Review Image" className="shrink-0 max-w-full rounded-full border-2 border-white border-solid aspect-[4] w-[149px]" />
        <div className="flex flex-col self-start mt-1">
          <div className="text-base font-semibold leading-5 capitalize text-zinc-400">
            5.0 <span className="text-zinc-400">Based on</span> 145{" "}
            <span className="text-zinc-400">Reviews</span>
          </div>
          <div className="flex gap-2 mt-2 max-md:pr-5">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                loading="lazy"
                src={`{{ext_${7 + index}}}`}
                alt={`Star ${index + 1}`}
                className="shrink-0 w-3 aspect-square fill-amber-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWork