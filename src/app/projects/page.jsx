import Image from "next/image";
import Link from "next/link";




export const metadata = {
  title: "Aplus Multi Kreasi - Projects",
  openGraph: {
    title: 'Projects',
  },
  description: "The best ideas come frome meetings, which is why when working with us there is no such thing as too many meetings Want to have a meeting to go over all of the event and production details.",
};


const Services = () => {


  return (
    <>
      <section className="overflow-hidden">

        <div className="w-full h-full bg-white py-8">
          <p className="text-center leading-relaxed text-xl text-black/80 w-full lg:w-4/6 mx-auto p-6 text">
            The best ideas come frome meetings, which is why when working with us there is no such thing as too many meetings.
            Want to have a meeting to go over all of the event and production details. <br /> Lets do it

          </p>

          <div className="w-full h-full px-2 lg:px-20">
            <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 py-10 ">
              {/* Event Management */}
              <Link href="/projects/events" >
                <div className="group cursor-pointer transition duration-700 ease-linear mb-6 lg:mb-0">
                  <div className="overflow-hidden w-full h-full lg:h-80 relative group">
                    <Image
                      src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt=""
                      width={1200}
                      height={800}
                      objectFit="cover"
                      className="group group-hover:scale-110 transition duration-700 ease-linear"
                    />
                    <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300  ease-linear bg-lime-300/50 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">
                      <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center  bg-inherit pt-5 pb-5 w-full  ">
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
                  <h3 className="pt-3 font-semibold text-xl">
                    Event Management
                  </h3>
                  <p className="capitalize">
                    Take a Look at our inspiring event
                  </p>
                </div>
              </Link>
              {/* Production */}
              <Link href="/projects/production" >
                <div className="group cursor-pointer transition duration-700 ease-linear mb-6 lg:mb-0">
                  <div className="overflow-hidden w-full h-full lg:h-80 relative group">
                    <Image
                      src="https://images.unsplash.com/photo-1637441212098-baef320ab80b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt=""
                      width={1200}
                      height={800}
                      objectFit="cover"
                      className="group group-hover:scale-110 transition duration-700 ease-linear"
                    />
                    <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300  ease-linear bg-orange-300/50 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">
                      <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center  bg-inherit pt-5 pb-5 w-full  ">
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
                  <h3 className="pt-3 font-semibold text-xl">
                    Production
                  </h3>
                  <p className="capitalize">
                    see closer to our production built
                  </p>
                </div>
              </Link>

              {/* Branding */}
              <Link href="/projects/branding" >
                <div className="group cursor-pointer transition duration-700 ease-linear mb-6 lg:mb-0">
                  <div className="overflow-hidden w-full h-full lg:h-80 relative group">
                    <Image
                      src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt=""
                      width={1200}
                      height={800}
                      objectFit="cover"
                      className="group group-hover:scale-110 transition duration-700 ease-linear"
                    />
                    <div className="group opacity-0 group-hover:opacity-100 transition-all group-hover:delay-75 delay-500 duration-300  ease-linear bg-red-500/50 absolute top-0 left-0 right-0 overflow-hidden h-full bottom-0 z-10 flex items-center justify-center">
                      <div className="group target1 block  relative text-4xl lg:text-9xl -tracking-wide font-semibold text-center  bg-inherit pt-5 pb-5 w-full  ">
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
                  <h3 className="pt-3 font-semibold text-xl">
                    Branding
                  </h3>
                  <p className="capitalize">
                    Is a story unfolding across all customer touch points
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-zinc-500 text-right  pt-8 relative right-4  ">
            <Link href="/gallery" passhref={true} className="text-5xl lg:text-7xl text-transparent font-outline-2 transition-all duration-300 ease-linear">
              Gallery -
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

