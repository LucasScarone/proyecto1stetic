import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'

export const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick= ()=> setClick(!click);
  const content =
  <>
  <div className='lg:hidden block absolute top-16 w-full left-0 ring-0 bg-black' >
    <ul className='text-center text-xl p-20'>
      <Link spy={true} smooth={true}  to= 'Home' >
      <li className='my-4 py-4 border-b border-black hover:bg-black hover:rounded'>Home</li>
      </Link>
      <Link spy={true} smooth={true} to='OurService'>
      <li className='my-4 py-4 border-b border-black hover:bg-black hover:rounded'>Nuestros servicios</li>
      </Link>
      <Link spy={true} smooth={true} to='Contact'>
      <li className='my-4 py-4 border-b border-black hover:bg-black hover:rounded'>contacto</li>
      </Link>
      <Link spy={true} smooth={true} to='About'>
      <li className='my-4 py-4 border-b border-black hover:bg-black hover:rounded'>Sobre nosotros</li>
      </Link>
    </ul>
  </div>
  </>
  return (
    <>
    <nav>
      <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4'>
        <div className='flex items-center flex-1'>
          <img src="./iconStetic.png"></img>
          {/* <span className='text-3xl font-bold'>logo</span> */}
        </div>
        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden '>
          <div className='flex-10'>
            <ul className='flex gap-8 lg:mr-16 text-[18px]'>
              <Link spy={true} smooth={true}  to= 'Home' >
              <li className='hover:text-fuchsia-600 transition border-b-2 border-black hover:border-fuchsia-600 cursor-pointer'>Home</li>
              </Link>
              <Link spy={true} smooth={true} to='OurService'>
              <li className='hover:text-fuchsia-600 transition border-b-2 border-black hover:border-fuchsia-600 cursor-pointer'>Nuestros servicios</li>
              </Link>
              <Link spy={true} smooth={true} to='Contact'>
              <li className='hover:text-fuchsia-600 transition border-b-2 border-black hover:border-fuchsia-600 cursor-pointer'>contacto</li>
              </Link>
              <Link spy={true} smooth={true} to='About'>
              <li className='hover:text-fuchsia-600 transition border-b-2 border-black hover:border-fuchsia-600 cursor-pointer'>Sobre nosotros</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
    </nav>
    </>
  )
}
