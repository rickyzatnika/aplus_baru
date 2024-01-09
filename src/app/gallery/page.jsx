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
    <section className="overflow-hidden">
      <div className="w-full relative px-4 lg:px-14 py-24 lg:py-40  bg-[#171717] ">
        <div className="bg-path" />
        <div className="relative w-full h-full  grid grid-cols-1 lg:grid-cols-12 mx-auto items-center px-2 ">
          <div className="antialiased  col-span-1 lg:col-span-8 space-y-2 leading-relaxed">
            <span className="flex text-white items-center font-semibold text-4xl lg:text-7xl w-full lg:w-4/6 ">
              Gallery Of
            </span>
            <div className="pt-6 ">
              <h2 className="text-white">APLUS MULTI KREASI</h2>
              <h3 className="text-3xl textCustom  lg:text-5xl tracking-wide lg:tracking-wide text-transparent font-extrabold uppercase">
                inspiring partner
              </h3>
            </div>
          </div>
          <div className=" px-6 lg:px-3 col-span-1 lg:col-span-4  relative top-8">
            <Image src="/logo_red.png" alt="logo" width={350} height={350} priority={true} className="mix-blend-screen opacity-20 " />
          </div>
        </div>
      </div>
      <div className="buttonContainer px-4 flex gap-5 md:gap-8 relative overflow-scroll z-20 w-screen max-w-[240vw] touch-manipulation py-10 h-full items-center justify-center mt-4">

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

      </div>
      {isLoading ? (<div className="w-full h-full  z-50 right-0 text-center mt-10 md:mt-40 text-zinc-200">
        <div className="flex gap-2 items-center justify-center">
          <span>Loading...</span>
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      </div>
      ) : (
        activeButton === "backframe" ? <><p className="w-fit mx-auto px-3 border-b border-orange-600 pb-2 text-zinc-200  text-sm md:text-xl py-4 ">Backdrop & Framescreen</p></> : <><p className="w-fit mx-auto px-3 uppercase text-zinc-200 border-b border-orange-600 pb-2 text-sm md:text-xl py-4 ">{activeButton}</p></>
      )}

      <LightGallery
        plugins={[lgZoom]}
        speed={800}
        elementClassNames="w-full relative z-10 h-full grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3 px-1 md:px-12 py-8 md:py-20"
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