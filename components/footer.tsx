import React from 'react'
import {Flex} from '@radix-ui/themes'
import { MdFastfood } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
        <Flex gap='9' justify="center" py='9' wrap='wrap'>
            <div className='px-6'>
                <div className='flex flex-row mb-5'>
                    <MdFastfood className='mr-2' size={30}/>
                    <p className="font-bold text-inherit text-md self-end">Tasty</p>
                </div>
                <p className='text-[#DAD8D7]'>We serious about</p>
                <p className='text-[#DAD8D7]'>food</p>
            </div>
            <div className='px-6'>
                <h1 className='text-center text-lg font-thin mb-5'>About</h1>
                <ul>
                    <li className='text-[#DAD8D7] text-sm mb-2'>About Us</li>
                    <li className='text-[#DAD8D7] text-sm mb-2'>Features</li>
                    <li className='text-[#DAD8D7] text-sm mb-2'>News</li>
                </ul>
            </div>
            <div className='px-6'>
                <h1 className='text-center text-lg font-thin mb-5'>Our Services</h1>
                <ul>
                    <li className='text-[#DAD8D7] text-sm mb-2'>Pricing</li>
                    <li className='text-[#DAD8D7] text-sm mb-2'>Discounts</li>
                    <li className='text-[#DAD8D7] text-sm mb-2'>Shipping mode</li>
                </ul>
            </div>
            <div className='px-6'>
                <h1 className='text-center text-lg font-thin mb-5'>Our Company</h1>
                <ul>
                    <li className='text-[#DAD8D7] text-sm mb-2'>Blog</li>
                    <li className='text-[#DAD8D7] text-sm mb-2'>About us</li>
                    <li className='text-[#DAD8D7] text-sm mb-2'>Our mission</li>
                </ul>
            </div>
        </Flex>
        <p className='text-[#DAD8D7] text-xs text-center pb-10'>Tasty. All rigths reserved</p>
    </footer>
  )
}

export default Footer