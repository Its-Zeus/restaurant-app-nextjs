'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { images } from '@/lib/images'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Slider() {
  return (
    <section className='py-12'>
      <div className='flex flex-col md:flex-row flex-wrap gap-4'>
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className='hidden md:flex-1 h-auto max-h-80 rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='hidden md:block h-full w-auto '
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='hidden md:block flex-1'>
            <h4 className='text-xl uppercase my-2'>#1 of this week</h4>
            <div className='uppercase text-6xl font-extrabold'>
                <h1 className='my-2'>eat</h1>
                <h1 className='my-2'>healthy</h1>
                <h1 className='mb-5'>be health</h1>
            </div>
            <p className=' max-w-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quibusdam eaque ad veritatis sed sit nostrum et ullam tempora error.</p>
            <Button className='px-8 py- font-normal font-bold hover:bg-white hover:text-primary' as={Link} color="primary" radius='md' href="#">
              Order Now
            </Button>
        </div>
        <div className='flex-1 text-center max-w-full md:hidden'>
            <h4 className='text-xl uppercase my-2'>#1 of this week</h4>
            <div className='uppercase text-6xl font-extrabold'>
                <h1 className='my-2'>eat</h1>
                <h1 className='my-2'>healthy</h1>
                <h1 className='mb-5'>be health</h1>
            </div>
            <p className='px-20 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quibusdam eaque ad veritatis sed sit nostrum et ullam tempora error.</p>
            <Button className='px-8 py- font-normal font-bold hover:bg-white hover:text-primary' as={Link} color="primary" radius='md' href="#">
              Order Now
            </Button>
        </div>
      </div>
    </section>
  )
}