'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/modules'

import { images } from '@/lib/images'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow';

export default function Slider() {
  return (
    <Swiper
    modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      
      className='flex-1 self-center'
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className=''>
          <div className='justify-center items-center align-middle'>
          <Image
              src={image.src}
              alt={image.alt}
              className='object-cover max-h-40 md:max-h-80 w-auto m-auto md:mr-0'
            />
          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  )
}