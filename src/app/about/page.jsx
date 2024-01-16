import Image from "next/image";
import { choose } from "@/lib/data";
import Link from "next/link";



export const metadata = {
  title: "About - Aplus Multi Kreasi",
  openGraph: {
    title: 'About',
  },
  description: "We are event and production management whose entire team works together to accomplish one mission, to create the equation through quality, trust and ease.",
};



const About = () => {

  return (
    <section className="overflow-hidden">
      <div className="w-full min-h-screen relative px-4 lg:px-14 py-24 lg:py-40   ">
        <div className="absolute z-10 left-28 lg:left-52 right-0 bottom-0 ">
          <Image src="/logo.png" alt="logo" width={350} height={350} className="opacity-5 " />
        </div>
        <div className="bg-path z-5" />
        <div className="relative w-full h-full  grid grid-cols-1 lg:grid-cols-12 mx-auto items-center px-2 ">
          <div className="antialiased  col-span-1 lg:col-span-8 space-y-2 leading-relaxed">
            <span className="flex text-zinc-200 items-center font-semibold text-4xl lg:text-7xl w-full lg:w-4/6 ">
              <span className="relative -left-2">About Us</span>
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
              We are committed to be a one-stop shop for your event & production needs.
            </p>
          </div>

        </div>
      </div>
      <div className="w-full h-full relative bg-[#fff] grid grid-cols-1 gap-4 lg:gap-4 lg:grid-cols-12 justify-center px-4 py-10 lg:py-20 lg:px-20">

        <div className="col-span-1 lg:col-span-5 w-full lg:w-5/6 mx-auto relative">
          <div className="w-2 h-full rounded-full hidden lg:block bg-red-600/30 absolute -left-8 top-0 z-0" />
          <p className="text-sm leading-relaxed md:text-lg text-[#636262]">
            We are event and production management whose entire team works together  to accomplish one mission, to create the equation through quality, trust and ease.
            We understand that planning an event can be extremely stressful, confusing, and upredictable.
            <br />
            We promise where things might be stressful, we will make it easy. We pride ourselves on the quality of our integrated event service and the event management we deliver to create the ultimate live event for our clients. 
            <br />
            We want to bring it all together for our client, just like creating an equation to provide you the perfect solution.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-7 relative">
          <div className="p-4 z-5 bg-red-600/50 absolute left-2 -top-2 w-full h-full" />
          <Image
            priority
            src="/event.jpg"
            alt="about us"
            width={1200}
            height={800}
            className="z-10 relative rounded-bl-xl"
          />
        </div>
      </div>


      {/* Why Choose Us */}
      <div className="relative w-full h-full py-14 px-2 lg:py-24 lg:px-14 bg-black overflow-hidden">
        <div className="w-full h-full pb-14">
          <span className="text-zinc-500 text-[18px]">— Why Choose Us ??</span>
          <p className=" text-[22px] md:text-[28px] lg:text-[36px] text-zinc-400 w-full lg:w-[75%] pt-4">
            We Focus on finding ways to make your life as easy as possible when planning an event & production.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 lg:my-0 ">
          {choose?.map((c, i) => (

            <div key={i} className="flex gap-2 w-full h-full mb-4 lg:mb-0 text-white flex-col bg-gradient-to-tr from-black to-zinc-800 rounded p-4 md:p-8">
              <span className="text-5xl">{c?.icons}</span>
              <h3 className="text-md uppercase text-zinc-300 mb-2">{c?.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{c?.desc}</p>
            </div>

          ))}
        </div>
        <div className="text-zinc-500 text-right  pt-8 relative right-4  ">
          <Link href="/projects" passhref={true} className="text-5xl lg:text-7xl text-transparent font-outline-2 transition-all duration-300 ease-linear">
            Projects -
          </Link>
        </div>
      </div>

    </section>
  )
}

export default About