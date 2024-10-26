"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

import Image from "next/image";

import ButtonGallery from "@/components/ButtonGallery";
import ImagesGallery from "@/components/ImagesGallery";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState("backdrop");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGallery = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/api/cloudinary?activeButton=${activeButton}`
        );
        setData(response.data);
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
      <div className="w-full h-full md:min-h-screen relative px-4 lg:px-14 py-24 lg:py-40 bg-black ">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="absolute z-10 left-28 lg:left-52 right-0 bottom-0 "
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={350}
            height={350}
            className="opacity-5 "
          />
        </div>
        <div className="bg-path" />
        <div className="relative w-full h-full py-14 md:py-10 grid grid-cols-1 lg:grid-cols-12 mx-auto items-center px-2 ">
          <div className="antialiased  col-span-1 lg:col-span-8 space-y-2 leading-relaxed">
            <span
              data-aos="fade-up"
              data-aos-duration="600"
              className="flex text-zinc-200 items-center font-semibold text-3xl lg:text-5xl w-full lg:w-4/6 "
            >
              GaLLery
            </span>
            <div className="pt-6 ">
              <h2
                data-aos="fade-up"
                data-aos-duration="700"
                className="text-zinc-200"
              >
                APLUS MULTI KREASI
              </h2>
              <h3
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-3xl textCustom  lg:text-5xl tracking-wide lg:tracking-wide text-transparent font-extrabold uppercase"
              >
                inspiring partner
              </h3>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4  pb-8 relative top-8">
            <p
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-zinc-400 lg:text-zinc-600 relative top-0 lg:top-32 antialiased tracking-wide"
            >
              A Property of Aplus Multi Kreasi ©
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full sticky top-14 z-20 bg-white/60 backdrop-blur-sm ">
        <ButtonGallery
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        {!isLoading ? (
          <div className="pb-3 w-full">
            {activeButton === "backframe" ? (
              <>
                <p className="w-fit text-center mx-auto px-3 border-b  border-orange-600  text-zinc-800  text-md md:text-xl  ">
                  Backdrop & Framescreen
                </p>
              </>
            ) : (
              <>
                <p className="w-fit text-center mx-auto uppercase text-zinc-800 border-b border-orange-600  text-md md:text-xl ">
                  {activeButton}
                </p>
              </>
            )}
          </div>
        ) : (
          <div className="w-full h-full  z-50 right-0 text-center  text-zinc-600">
            <div className="flex gap-2 items-center justify-center">
              <span>Loading...</span>
              <span className="loading loading-spinner loading-sm"></span>
            </div>
          </div>
        )}
      </div>

      <ImagesGallery data={data} isLoading={isLoading} />
    </section>
  );
};
``;
export default Gallery;
