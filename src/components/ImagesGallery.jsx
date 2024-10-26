"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const ImagesGallery = ({ data, isLoading }) => {
  return (
    <LightGallery
      plugins={[lgZoom]}
      speed={800}
      elementClassNames="w-full bg-white relative z-10 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-3 px-2 md:px-12 py-8 md:py-20"
    >
      {!isLoading &&
        data?.map((g, i) => (
          <Link
            key={i}
            href={g?.secure_url}
            className="overflow-hidden"
            passHref={true}
            prefetch={true}
            data-sub-html={`<h4>Property of Aplus Multi Kreasi <p class="date"> posted : ${moment(
              g?.created_at
            )
              .startOf("hour")
              .fromNow()}</p>`}
          >
            <div
              data-aos="zoom-in-up"
              data-aos-duration="800"
              className="overflow-hidden w-full md:w-96 h-full md:h-96 mb-[4px] md:mb-3 relative"
            >
              <Image
                className="w-full md:w-96 hover:scale-110 duration-700 h-full md:h-96  object-cover mb-[4px] md:mb-3 mx-auto"
                src={g?.secure_url}
                alt="Aplus Gallery"
                placeholder="blur"
                blurDataURL={g?.secure_url}
                width={1200}
                height={900}
                priority={true}
              />
            </div>
          </Link>
        ))}
    </LightGallery>
  );
};

export default ImagesGallery;
