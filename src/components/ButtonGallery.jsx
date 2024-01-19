
import { buttons } from "@/lib/buttons"


const ButtonGallery = ({ activeButton, setActiveButton }) => {



  return (
    <div className=" buttonContainer px-4 pt-10 pb-6 flex gap-5 md:gap-8  overflow-scroll z-20 w-screen max-w-[240vw] touch-manipulation  h-full items-center justify-center ">
      {buttons?.map((button, i) => (
        <button
          key={i}
          type={button?.type}
          onClick={() => setActiveButton(button?.name)}
          className={`group hover:border-orange-500 transition-all text-sm  hover:text-orange-500 duration-200 ease-linear p-2 w-fit relative  bg-[#121212] border ${activeButton === button?.name
            ? " border-orange-500 text-orange-500 "
            : " border-zinc-600 text-zinc-500/80 "
            }`}
        >
          {button?.id}
          <span
            className={`border-l border-b   group-hover:border-none border-zinc-600 -left-1.5 -bottom-1.5 group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300 ease-linear group-hover:bg-gradient-to-r from-red-500 to-orange-500 w-full h-full absolute -z-20 ${activeButton === button?.name
              ? "bg-gradient-to-r from-red-500 to-orange-500 -bottom-2 -left-2 border-none"
              : ""
              } `}
          ></span>
        </button>
      ))}
    </div>
  )
}

export default ButtonGallery



