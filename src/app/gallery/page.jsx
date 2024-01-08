"use client"

import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import axios from "axios";
import Link from "next/link";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";


const Gallery = () => {

  // const easing = [0.5, 0.8, -0.35, 0.01];
  const slideInLeft = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.5, 0.8, -0.35, 0.01],
      },
    },
  };
  const slideInRight = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.5, 0.8, -0.35, 0.01],
      },
    },
  };

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

        <div className="bg-path z-5" />
        <motion.div
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          className="relative w-full h-full  grid grid-cols-1 lg:grid-cols-12 mx-auto items-center px-2 "
        >
          <motion.div
            variants={slideInLeft}
            className="antialiased  col-span-1 lg:col-span-8 space-y-2 leading-relaxed"
          >
            <span className="flex text-white items-center font-semibold text-4xl lg:text-7xl w-full lg:w-4/6 ">
              Gallery Of
            </span>
            <div className="pt-6 ">
              <h2 className="text-white">APLUS MULTI KREASI</h2>
              <h3 className="text-3xl textCustom  lg:text-5xl tracking-wide lg:tracking-wide text-transparent font-extrabold uppercase">
                inspiring partner
              </h3>
            </div>
          </motion.div>
          <div className=" px-6 lg:px-3 col-span-1 lg:col-span-4  relative top-8">
            <Image src="/logo_red.png" alt="logo" width={350} height={350} className="mix-blend-screen opacity-20 " />
          </div>
        </motion.div>
      </div>
      <div className="buttonContainer px-4 flex gap-5 md:gap-8 relative overflow-scroll z-20 w-screen max-w-[240vw] touch-manipulation py-10 h-full items-start mt-4">
        
        <button
          onClick={() => setActiveButton("backdrop")}
          className={`group hover:border-orange-500 transition-all text-sm  hover:text-orange-500 duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border ${activeButton === "backdrop"
            ? " border-orange-500 text-orange-500 "
            : " border-zinc-600 text-zinc-500/80 "
            }`}
        >
          Backdrop
          <span
            className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-r from-red-500 to-orange-500 w-full h-full absolute -z-20 ${activeButton === "backdrop"
              ? "bg-gradient-to-r from-red-500 to-orange-500 -bottom-2 -left-2 border-none"
              : ""
              } `}
          ></span>
        </button>
        <button
          onClick={() => setActiveButton("framescreen")}
          className={`group hover:border-orange-500 transition-all text-sm  hover:text-orange-500  duration-200 ease-linear py-2 px-12 md:px-5 w-52 md:w-32 relative  bg-[#121212] border  ${activeButton === "framescreen"
            ? "border-orange-500 text-orange-500"
            : "border-zinc-600 text-zinc-500/80"
            }`}
        >
          Framescreen
          <span
            className={`border-l border-b  group-hover:border-none border-zinc-600  -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-r from-red-500 to-orange-500 w-full h-full absolute -z-20 ${activeButton === "framescreen"
              ? "bg-gradient-to-r from-red-500 to-orange-500 -bottom-2 -left-2 border-none"
              : ""
              }`}
          ></span>
        </button>
        <button
          onClick={() => setActiveButton("backframe")}
          className={`group hover:border-orange-500 transition-all text-sm  hover:text-orange-500 duration-200 ease-linear py-2 px-12 md:px-5 w-full md:w-fit relative  bg-[#121212] border  ${activeButton === "backframe"
            ? "border-orange-500 text-orange-500"
            : "border-zinc-600 text-zinc-500/80"
            }`}
        >
          Backdrop & Framescreen
          <span
            className={`border-l border-b group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-r from-red-500 to-orange-500 w-full h-full absolute -z-20 ${activeButton === "backframe"
              ? "bg-gradient-to-r from-red-500 to-orange-500 -bottom-2 -left-2 border-none"
              : ""
              }`}
          ></span>
        </button>

      </div>
      {isLoading && (
        <div className="w-full h-full  z-50 right-0 text-center mt-10 md:mt-40 text-zinc-200">
          <div className="flex gap-2 items-center justify-center">
            <span>Loading...</span>
            <span className="loading loading-spinner loading-sm"></span>
          </div>
        </div>
      )}
      <LightGallery
        speed={800}
        plugins={[lgZoom]}
        elementClassNames="w-full relative z-10 h-full columns-2 md:columns-3 gap-1 md:gap-3 px-1 md:px-12 py-8 md:py-20"
      >
        {activeButton === "" ? (
          <>
            {!isLoading &&
              data.map((g, i) => (
                <Link
                  key={i}
                  href={g.secure_url}
                  className="overflow-hidden"
                  passHref
                  prefetch={true}
                  data-sub-html={`<h4>Property of Aplus Multi Kreasi <p class="date"> posted : ${moment(
                    g.created_at
                  )
                    .startOf("hour")
                    .fromNow()}</p>`}
                >
                  <div className="overflow-hidden w-full md:w-96 h-96 mb-[4px] md:mb-3 relative">
                    <Image
                      className="w-full md:w-96 hover:scale-110 duration-700 h-auto object-cover mb-[4px] md:mb-3 mx-auto"
                      src={g.secure_url}
                      alt=""
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
                  passHref
                  prefetch={true}
                  
                  data-sub-html={`<h4>Property of Aplus Multi Kreasi <p class="date"> posted : ${moment(
                    g.created_at
                  )
                    .startOf("hour")
                    .fromNow()}</p>`}
                >
                  <div className="overflow-hidden w-full md:w-96 h-96 mb-[4px] md:mb-3 relative">
                    <Image
                      className="w-full md:w-96 hover:scale-110 duration-700 h-auto object-cover mb-[4px] md:mb-3 mx-auto"
                      src={g.secure_url}
                      alt=""
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