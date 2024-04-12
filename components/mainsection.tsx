import React from 'react'
import Slider from './slider'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


const MainSection = () => {
  return (
    <section>
        <div className='md:flex md:flex-row flex-wrap py-10 gap-10'>
          <Slider/>
          <div className='flex-1 md:ml-10 md:text-left text-center px-5'>
            <h4 className='text-xl uppercase my-2'>#1 of this week</h4>
            <div className='uppercase text-6xl font-extrabold'>
                <h1 className='hidden md:block my-2'>eat</h1>
                <h1 className='hidden md:block my-2'>healthy</h1>
                <h1 className='md:hidden block my-2'>eat healthy</h1>
                <h1 className='mb-5'>be health</h1>
            </div>
            <p className='max-w-lg m-auto md:mx-0 md:max-w-sm mb-5'>Savor nourishing cuisine crafted from fresh, locally-sourced ingredients. Embrace wellness with every bite at our restaurant.</p>
            <Button className='px-8 py- font-normal font-bold hover:bg-white hover:text-primary' as={Link} color="primary" radius='md' href="#">
              Order Now
            </Button>
        </div>
        </div>
    </section>
  )
}

export default MainSection