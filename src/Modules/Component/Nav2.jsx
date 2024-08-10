
export const Nav2 = () => {
  return (
        <div className=" relative overflow-x-hidden	">
            <div className="flex flex-wrap justify-center content-center">
            <div className="flex w-full md:w-2/4 md:pl-4 bg-black ">
                <img src="/iconStetic2.png" alt="Logo" className=" drop-shadow-Mi-config w-1/3 md:w-1/4"/>
                <h1 className= " text-white font-f22-grey text-3xl pl-6 content-center w-2/3 md:w-3/4">Center Stetic</h1>
            </div>
            <nav className="content-center w-full h-20 md:w-2/4 bg-black ">
                <ul className="flex justify-center gap-3 ">
                    <li className=" text-white  pl-2 border-l-[3px] border-b-[1px] rounded-s border-[#e3b4c2] bg-gradient-to-r from-[#e3b4c2] ">Home</li>
                    <li className=" text-white  pl-2 border-l-[3px] border-b-[1px] rounded-s border-[#e3b4c2] bg-gradient-to-r from-[#e3b4c2] ">Services</li>
                    <li className=" text-white  pl-2 border-l-[3px] border-b-[1px] rounded-s border-[#e3b4c2] bg-gradient-to-r from-[#e3b4c2] ">Contact</li>
                    <li className=" text-white  pl-2 border-l-[3px] border-b-[1px] rounded-s border-[#e3b4c2] bg-gradient-to-r from-[#e3b4c2] ">Abaut</li>
                </ul>
            </nav>
            </div>    
            <div className=" absolute top-8 left-[70%] w-[40%] h-5 bg-gradient-to-b from-[#e3b4c2] to-black rounded-full rotate-[50deg] md:hidden">

            </div>
    </div> 
  )
}
