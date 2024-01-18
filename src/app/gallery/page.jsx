"use client"

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import axios from "axios";
import Link from "next/link";

const Gallery = () => {


  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState("backdrop");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGallery = async () => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;
      const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
      const auth = btoa(`${apiKey}:${apiSecret}`);

      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URI}/v1_1/${cloudName}/resources/image?type=upload&prefix=photo/aplus/${activeButton}&max_results=50`,
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );
        setData(response.data.resources);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
        // Setelah permintaan selesai, isLoading diubah menjadi false
      }
    };
    getGallery();
  }, [activeButton]);



  return (
    <section className="w-full h-full bg-white">
      <div className="w-full min-h-screen relative px-4 lg:px-14 py-24 lg:py-40 bg-black ">
        <div className="absolute z-10 left-28 lg:left-52 right-0 bottom-0 ">
          <Image src="/logo.png" alt="logo" width={350} height={350} className="opacity-5 " />
        </div>
        <div className="bg-path" />
        <div className="relative w-full h-full  grid grid-cols-1 lg:grid-cols-12 mx-auto items-center px-2 ">
          <div className="antialiased  col-span-1 lg:col-span-8 space-y-2 leading-relaxed">
            <span className="flex text-zinc-200 items-center font-semibold text-4xl lg:text-7xl w-full lg:w-4/6 ">
              Gallery
            </span>
            <div className="pt-6 ">
              <h2 className="text-zinc-200">APLUS MULTI KREASI</h2>
              <h3 className="text-3xl textCustom  lg:text-5xl tracking-wide lg:tracking-wide text-transparent font-extrabold uppercase">
                inspiring partner
              </h3>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4  pb-8 relative top-8">
            <p className="text-zinc-400 lg:text-zinc-600 relative top-0 lg:top-32 antialiased tracking-wide">
              A Property of Aplus Multi Kreasi ©
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full sticky top-14 z-20 bg-white/60 backdrop-blur-sm ">
        <div className=" buttonContainer px-4 pt-10 pb-6 flex gap-5 md:gap-8  overflow-scroll z-20 w-screen max-w-[240vw] touch-manipulation  h-full items-center justify-center ">

          <button
            type="button"
            onClick={() => setActiveButton("backdrop")}
            className={`group hover:border-orange-500 transition-all text-sm  hover:text-orange-500 duration-200 ease-linear p-2 w-fit relative  bg-[#121212] border ${activeButton === "backdrop"
              ? " border-orange-500 text-orange-500 "
              : " border-zinc-600 text-zinc-500/80 "
              }`}
          >
            1
            <span
              className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-r from-red-500 to-orange-500 w-full h-full absolute -z-20 ${activeButton === "backdrop"
                ? "bg-gradient-to-r from-red-500 to-orange-500 -bottom-2 -left-2 border-none"
                : ""
                } `}
            ></span>
          </button>
          <button
            type="button"
            onClick={() => setActiveButton("framescreen")}
            className={`group hover:border-orange-500 transition-all text-sm  hover:text-orange-500  duration-200 ease-linear p-2 w-fit relative  bg-[#121212] border  ${activeButton === "framescreen"
              ? "border-orange-500 text-orange-500"
              : "border-zinc-600 text-zinc-500/80"
              }`}
          >
            2
            <span
              className={`border-l border-b  group-hover:border-none border-zinc-600  -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-r from-red-500 to-orange-500 w-full h-full absolute -z-20 ${activeButton === "framescreen"
                ? "bg-gradient-to-r from-red-500 to-orange-500 -bottom-2 -left-2 border-none"
                : ""
                }`}
            ></span>
          </button>
          <button
            type="button"
            onClick={() => setActiveButton("backframe")}
            className={`group hover:border-orange-500 transition-all text-sm  hover:text-orange-500 duration-200 ease-linear p-2 w-fit  relative  bg-[#121212] border  ${activeButton === "backframe"
              ? "border-orange-500 text-orange-500"
              : "border-zinc-600 text-zinc-500/80"
              }`}
          >
            3
            <span
              className={`border-l border-b group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-r from-red-500 to-orange-500 w-full h-full absolute -z-20 ${activeButton === "backframe"
                ? "bg-gradient-to-r from-red-500 to-orange-500 -bottom-2 -left-2 border-none"
                : ""
                }`}
            ></span>
          </button>
          <button
            type="button"
            onClick={() => setActiveButton("mural")}
            className={`group hover:border-orange-500 transition-all text-sm  hover:text-orange-500 duration-200 ease-linear p-2 w-fit  relative  bg-[#121212] border  ${activeButton === "mural"
              ? "border-orange-500 text-orange-500"
              : "border-zinc-600 text-zinc-500/80"
              }`}
          >
            4
            <span
              className={`border-l border-b group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-r from-red-500 to-orange-500 w-full h-full absolute -z-20 ${activeButton === "mural"
                ? "bg-gradient-to-r from-red-500 to-orange-500 -bottom-2 -left-2 border-none"
                : ""
                }`}
            ></span>
          </button>
          <button
            type="button"
            onClick={() => setActiveButton("flagchain")}
            className={`group hover:border-orange-500 transition-all text-sm  hover:text-orange-500 duration-200 ease-linear p-2 w-fit  relative  bg-[#121212] border  ${activeButton === "flagchain"
              ? "border-orange-500 text-orange-500"
              : "border-zinc-600 text-zinc-500/80"
              }`}
          >
            5
            <span
              className={`border-l border-b group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-r from-red-500 to-orange-500 w-full h-full absolute -z-20 ${activeButton === "flagchain"
                ? "bg-gradient-to-r from-red-500 to-orange-500 -bottom-2 -left-2 border-none"
                : ""
                }`}
            ></span>
          </button>

        </div>
        {isLoading ? (
        <div className="w-full h-full  z-50 right-0 text-center  text-zinc-600">
          <div className="flex gap-2 items-center justify-center">
            <span>Loading...</span>
            <span className="loading loading-spinner loading-sm"></span>
          </div>
        </div>
        ) : (
          <div className="pb-3 w-full">
            {activeButton === "backframe" ? <><p className="w-fit text-center mx-auto px-3 border-b  border-orange-600  text-zinc-800  text-md md:text-xl  ">Backdrop & Framescreen</p></> : <><p className="w-fit text-center mx-auto uppercase text-zinc-800 border-b border-orange-600  text-md md:text-xl ">{activeButton}</p></>}
          </div>
        )}
      </div>


      <LightGallery
        plugins={[lgZoom]}
        speed={800}
        elementClassNames="w-full bg-white relative z-10 h-full grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3 px-1 md:px-12 py-8 md:py-20"
      >
        {activeButton === "" ? (
          <>
            {!isLoading &&
              data.map((g, i) => (
                <Link
                  key={i}
                  href={g.secure_url}
                  className="overflow-hidden"
                  passHref={true}
                  prefetch={true}
                  data-sub-html={`<h4>Property of Aplus Multi Kreasi <p class="date"> posted : ${moment(
                    g.created_at
                  )
                    .startOf("hour")
                    .fromNow()}</p>`}
                >
                  <div className="overflow-hidden w-full md:w-96 h-full md:h-96 mb-[4px] md:mb-3 relative">
                    <Image
                      className="w-full md:w-96 hover:scale-110 duration-700 h-full md:h-96  object-cover mb-[4px] md:mb-3 mx-auto"
                      src={g.secure_url}
                      alt="Aplus Gallery"
                      placeholder="blur"
                      blurDataURL={g.secure_url}
                      width={1200}
                      height={900}
                      priority={true}
                    />
                  </div>
                </Link>
              ))}
          </>
        ) : (
          <>
            {!isLoading &&
              data.map((g, i) => (
                <Link
                  key={i}
                  href={g.secure_url}
                  passHref={true}
                  prefetch={true}

                  data-sub-html={`<h4>Property of Aplus Multi Kreasi <p class="date"> posted : ${moment(
                    g.created_at
                  )
                    .startOf("hour")
                    .fromNow()}</p>`}
                >
                  <div className="overflow-hidden w-full md:w-96 h-full md:h-96 mb-[4px] md:mb-3 relative">
                    <Image
                      className="w-full md:w-96 hover:scale-110 duration-700 h-full md:h-96  object-cover mb-[4px] md:mb-3 mx-auto"
                      src={g.secure_url}
                      alt="Aplus Gallery"
                      placeholder="blur"
                      blurDataURL={g.secure_url}
                      width={1200}
                      height={900}
                      priority={true}
                    />
                  </div>
                </Link>
              ))}
          </>
        )}
      </LightGallery>
    </section>
  )
}

export default Gallery