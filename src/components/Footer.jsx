import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import {
  FaYoutube,
  FaPhoneSquareAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full relative z-50 flex flex-col text-sm  gap-0  items-center justify-between ">
      <div className="footer bg-[#111] py-12 lg:py-18 p-8 text-base-content">
        <div className="flex flex-col">
          <Image
            src="/logo_merah.png"
            alt="logo_aplus"
            width={75}
            height={75}
            priority={true}
            className="object-cover"
          />
          <p className="w-full max-w-sm  text-gray-300 pt-2 leading-relaxed">
            Aplus Multi Kreasi is a creative agency in the marketing sphere
            that focuses on Event, Production and Branding.
          </p>
        </div>
        <div className="">
          <span className=" text-gray-200 font-semibold mb-2">Support</span>
          <div className="flex gap-2 items-center text-gray-400">
            <FaPhoneSquareAlt size={20} />
            <span>0858-7238-1882</span>
          </div>
          <div className="flex gap-2 items-center text-gray-400">
            <AiOutlineMail size={20} />
            <span>sayhi@aplusmultikreasi@gmail.com</span>
          </div>
          <div className="flex items-start text-gray-400">
            <div className="flex gap-1 items-center">
              <FaMapMarkerAlt size={20} />
              <span>1:</span>
            </div>
            <span className="pl-3">
              Jl. Sariwangi No.165, Parongpong - <br /> Kabupaten Bandung Barat
              40559
            </span>
          </div>
          <div className="flex items-start text-gray-400">
            <div className="flex gap-1 items-center">
              <FaMapMarkerAlt size={20} />
              <span>2:</span>
            </div>
            <span className="pl-3">
              Perumahan Kemang IFI, Jl. Seruling I No.28 Blok F7, Jatirasa, Kec.
              Jatiasih - <br /> Bekasi Selatan - Jawa Barat 17424
            </span>
          </div>
        </div>
        <nav>
          <span className=" text-gray-200 font-semibold">Menu</span>
          <Link href="/" passHref className="text-gray-400 link link-hover">
            Home
          </Link>
          <Link
            href="/about"
            passHref
            className="text-gray-400 link link-hover"
          >
            About Us
          </Link>
          <Link
            href="/projects"
            passHref
            className="text-gray-400 link link-hover"
          >
            Projects
          </Link>
          <Link
            href="/gallery"
            passHref
            className="text-gray-400 link link-hover"
          >
            Gallery
          </Link>
          <Link
            href="/login"
            passHref
            className="text-gray-400 link link-hover"
          >
            Admin
          </Link>
        </nav>
        <nav>
          <span className=" text-gray-200 font-semibold">Legal</span>
          <Link
            passHref
            href="/terms&conditions"
            className="text-gray-400 link link-hover"
          >
            Terms and Conditions
          </Link>
          <Link
            passHref
            href="/privacypolicy"
            className="text-gray-400 link link-hover"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
      <div className="w-full bg-[#0a0a0a] gap-5 py-2 px-6 flex items-center justify-center md:justify-between flex-col-reverse md:flex-row">
        <div className="text-xs text-center text-gray-300 ">
          <span className="flex items-center gap-1">
            PT. APLUS MULTI KREASI © 2016
          </span>
        </div>
        <div className="flex gap-5 items-center text-gray-400 py-2 px-4">
          <Link
            passHref
            href="https://web.facebook.com/people/Aplus-Multi/61555802003335/"
            target="_blink"
          >
            <ImFacebook2 size={20} />
          </Link>
          <Link
            passHref
            href="https://api.whatsapp.com/send?phone=6281214707415&text=Hallo%20Aplus"
            target="_blink"
          >
            <FaWhatsapp size={20} />
          </Link>
          <Link
            passHref
            href="https://www.instagram.com/aplusmultikreasi.id"
            target="_blink"
          >
            <GrInstagram size={20} />
          </Link>
          <Link
            passHref
            href="https://www.youtube.com/@hello_aplus7424"
            target="_blink"
          >
            <FaYoutube size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
