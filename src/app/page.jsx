import Link from "next/link";
import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Aplus Multi Kreasi - Home",
  description:
    "We are event and production management whose entire team works together to accomplish one mission, to create the equation through quality, trust and ease.",
};

export default function Home() {
  return (
    <>
      {/* Header */}
      <section>
        <div className="relative min-h-screen md:min-h-[90vh] py-12 md:py-20 lg:py-24 overflow-hidden">
          <div className='bg-[url("/bg.jpg")] bg-cover bg-bottom absolute z-10 top-0 left-0 bottom-0 w-full h-full' />
          <div className="absolute z-20 w-full h-full bottom-0 bg-gradient-to-tr from-black to-transparent " />
          <div className="w-full relative z-30 grid grid-cols-1 lg:grid-cols-12 ">
            <div className="col-span-1 lg:col-span-10 py-20 px-4 lg:py-32 lg:px-12">
              <div className="flex pb-8 leading-loose flex-col w-full  item-center justify-center gap-3 text-zinc-100">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="600"
                  className="text-lg md:text-xl"
                >
                  APLUS MULTI KREASI
                </h1>
                <span
                  data-aos="fade-up"
                  data-aos-duration="700"
                  className="text-4xl lg:text-6xl bg-gradient-to-tr tracking-wide from-red-600 to-orange-500 bg-clip-text text-transparent font-extrabold uppercase"
                >
                  inspiring partner
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full lg:w-[60%] tracking-wide font-normal leading-relaxed text-sm md:text-md lg:text-lg "
                >
                  We are event and production management whose entire team works
                  together to accomplish one mission, to create the equation
                  through quality, trust and ease.
                </p>
              </div>
              <Link
                data-aos="fade-up"
                data-aos-duration="800"
                className="px-6 py-2 rounded-full bg-gradient-to-tr from-red-600 to-orange-500 text-zinc-200 text-sm lg:text-md"
                href="/about"
              >
                About Us
              </Link>
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col items-center justify-center text-white">
              <p className="text-sm block lg:hidden text-center py-6">
                connect with us
              </p>
              <div className="flex flex-row lg:flex-col gap-8 items-center justify-center">
                <Link
                  data-aos="fade-left"
                  href="https://web.facebook.com/people/Aplus-Multi/61555802003335/"
                  target="_blink"
                  className="relative hover:-rotate-12 transition-all duration-300 ease-in-out hover:text-blue-600"
                >
                  <ImFacebook2 size={24} />
                </Link>
                <Link
                  data-aos="fade-left"
                  data-aos-delay="0.5"
                  href="https://api.whatsapp.com/send?phone=6281214707415&text=Hallo%20Aplus"
                  target="_blink"
                  className="relative hover:-rotate-12 transition-all duration-300 ease-in-out hover:text-green-600"
                >
                  <FaWhatsapp size={24} />
                </Link>
                <Link
                  data-aos="fade-left"
                  data-aos-delay="0.8"
                  href="https://www.instagram.com/aplusmultikreasi.id"
                  target="_blink"
                  className="relative hover:-rotate-12 transition-all duration-300 ease-in-out hover:text-pink-600"
                >
                  <GrInstagram size={24} />
                </Link>
                <Link
                  data-aos="fade-left"
                  data-aos-delay="0.10"
                  href="https://www.youtube.com/@hello_aplus7424"
                  target="_blink"
                  className="relative hover:-rotate-12 transition-all duration-300 ease-in-out hover:text-red-500  text-zinc-100"
                >
                  <FaYoutube size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animate Text Aplus */}
      <div className="w-full relative bg-[#000] overflow-hidden py-8 lg:py-12 ">
        <div className="h-full w-24 md:w-96 absolute top-0 left-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="h-full w-24 md:w-96 absolute top-0 right-0 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="target block  relative text-5xl lg:text-7xl  font-bold text-center  py-6 w-full  ">
          <span className="hidden">APLUS Multi KREASI</span>
          <div className="absolute z-5 top-[50%] right-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-100 transition-opacity duration-300 text-transparent bg-clip-text bg-gradient-to-tr from-black to-red-600/90 ">
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
            <span className="ml-10 md:ml-14 uppercase ">
              APLUS Multi Kreasi
            </span>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="bg-[#000]">
        <div className="w-full h-full lg:min-h-screen px-4 lg:px-8 py-24 lg:py-32 relative z-auto">
          <div className="w-full h-full">
            <span
              data-aos="fade-up"
              data-aos-duration="600"
              className="text-zinc-500 text-[18px]"
            >
              — Our Projects
            </span>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className=" text-[24px] md:text-[28px] lg:text-[36px] text-zinc-500 w-full lg:w-[75%] pt-4"
            >
              As a tight-knit team of experts, we create memorable and emotional
              event, production, and branding.
            </p>
          </div>
          <div className="w-full lg:w-[80%] grid-cols-1 grid text-center gap-10 lg:gap-20  justify-center items-center mx-auto py-10 ">
            {/* Event Management */}
            <Link href={`/projects/events`}>
              <div className="group  cursor-pointer transition border-b border-b-zinc-600 pb-4 lg:pb-6 duration-700 ease-linear mb-6 lg:mb-0">
                <div className="overflow-hidden w-full h-full  relative group">
                  <Image
                    data-aos="zoom-in"
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                    width={1200}
                    height={800}
                    priority={true}
                    className="group object-cover group-hover:scale-110 transition duration-700 ease-linear"
                  />
                  <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300  ease-linear bg-lime-300/50 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">
                    <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center pt-5 pb-5 w-full  ">
                      <span className="hidden">Event Management</span>
                      <div className="group absolute z-2 top-[50%] left-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-20 transition-opacity duration-700 group-hover:opacity-100 text-white">
                        <span className="ml-8">Event Management</span>
                        <span className="ml-8">Event Management</span>
                        <span className="ml-8">Event Management</span>
                        <span className="ml-8">Event Management</span>
                        <span className="ml-8">Event Management</span>
                        <span className="ml-8">Event Management</span>
                        <span className="ml-8">Event Management</span>
                        <span className="ml-8">Event Management</span>
                        <span className="ml-8">Event Management</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="pt-3 text-zinc-400 font-semibold text-xl">
                  Event Management
                </h3>
                <p className="text-zinc-500 capitalize">
                  Take a Look at our inspiring event
                </p>
              </div>
            </Link>
            {/* Production */}
            <Link href={`/projects/production`}>
              <div className="group cursor-pointer transition border-b border-b-zinc-600 pb-4 lg:pb-6 duration-700 ease-linear mb-6 lg:mb-0">
                <div className="overflow-hidden w-full h-full relative group">
                  <Image
                    data-aos="zoom-in"
                    src="https://images.unsplash.com/photo-1637441212098-baef320ab80b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                    width={1200}
                    height={800}
                    priority={true}
                    className="group object-cover group-hover:scale-110 transition duration-700 ease-linear"
                  />
                  <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300  ease-linear bg-orange-300/50  absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">
                    <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center pt-5 pb-5 w-full  ">
                      <span className="hidden">Production</span>
                      <div className="group absolute z-2 top-[50%] left-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-20 transition-opacity duration-700 group-hover:opacity-100 text-white">
                        <span className="ml-8">Production</span>
                        <span className="ml-8">Production</span>
                        <span className="ml-8">Production</span>
                        <span className="ml-8">Production</span>
                        <span className="ml-8">Production</span>
                        <span className="ml-8">Production</span>
                        <span className="ml-8">Production</span>
                        <span className="ml-8">Production</span>
                        <span className="ml-8">Production</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="pt-3 text-zinc-400 font-semibold text-xl">
                  Production
                </h3>
                <p className="text-zinc-500 capitalize">
                  see closer to our production built
                </p>
              </div>
            </Link>

            {/* Branding */}
            <Link href={`/projects/branding`}>
              <div className="group cursor-pointer transition border-b border-b-zinc-600 pb-4 lg:pb-6 duration-700 ease-linear mb-6 lg:mb-0">
                <div className="overflow-hidden w-full h-full relative group">
                  <Image
                    data-aos="zoom-in"
                    src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                    width={1200}
                    height={800}
                    priority={true}
                    className="group object-cover group-hover:scale-110 transition duration-700 ease-linear"
                  />
                  <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300  ease-linear bg-red-500/50 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">
                    <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center  pt-5 pb-5 w-full  ">
                      <span className="hidden">Branding</span>
                      <div className="group absolute z-2 top-[50%] left-0 -translate-y-[50%] m-0 whitespace-nowrap opacity-20 transition-opacity duration-700 group-hover:opacity-100 text-white">
                        <span className="ml-8">Branding</span>
                        <span className="ml-8">Branding</span>
                        <span className="ml-8">Branding</span>
                        <span className="ml-8">Branding</span>
                        <span className="ml-8">Branding</span>
                        <span className="ml-8">Branding</span>
                        <span className="ml-8">Branding</span>
                        <span className="ml-8">Branding</span>
                        <span className="ml-8">Branding</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="pt-3 text-zinc-400 font-semibold text-xl">
                  Branding
                </h3>
                <p className="text-zinc-500 capitalize">
                  Is a story unfolding across all customer touch points
                </p>
              </div>
            </Link>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-zinc-500 text-right  relative right-4 "
          >
            <Link
              href="/about"
              className="text-5xl lg:text-7xl text-transparent font-outline-2 transition-all duration-300 ease-linear"
            >
              About Us -
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
