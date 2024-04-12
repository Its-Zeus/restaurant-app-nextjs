import React from 'react'
import {Grid} from '@radix-ui/themes'
import { Image } from '@nextui-org/react'
import aboutimg from '../public/images/about-img.png'
import {Button, Link} from "@nextui-org/react";

const About = () => {
  return (
    <section className='flex justify-center items-center m-auto xl:w-[50%] lg:w-[80%] md:w-[90%] pb-20'>
        <Grid columns={{ initial: '1', sm: '2' }} width="auto">
            <div className='text-center md:text-left md:pr-16 self-end mb-4 md:mb-0'>
                <h1 className='text-3xl font-thin mb-10'>About us</h1>
                <p className='text-[#DAD8D7] mb-7 px-12 md:px-0'>
                Crafting exceptional dining experiences with passion and dedication, one plate at a time. Welcome to our culinary journey, where every detail is infused with flavor and excellence.
                </p>
                <Button className='px-8 text-base hover:bg-white hover:text-primary' as={Link} color="primary" radius='md' href="#">
                    Order Now
                </Button>
            </div>
            <div className='flex md:justify-end justify-center'>
                <Image src={aboutimg.src} alt="about" style={{maxHeight: '300px'}}/>
            </div>
        </Grid>
    </section>
  )
}

export default About