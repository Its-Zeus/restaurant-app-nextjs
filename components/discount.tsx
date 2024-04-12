import React from 'react'
import {Grid} from '@radix-ui/themes'
import { Image } from '@nextui-org/react'
import discountimg from '../public/images/discount-img.png'
import {Button, Link} from "@nextui-org/react";

const Discount = () => {
  return (
    <section className='flex justify-center items-center m-auto xl:w-[50%] lg:w-[80%] md:w-[90%] pb-20 pt-20'>
    <Grid columns={{ initial: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 500px)', lg: 'repeat(2, 500px)'}} width="auto" gap="9">
        <div className='flex md:justify-end justify-center'>
            <Image src={discountimg.src} alt="about" style={{maxHeight: '300px'}}/>
        </div>
        <div className='text-center self-center'>
            <h1 className='text-2xl font-thin mb-10'>50% Discount <br />On New Products</h1>
            <Button className='px-8 py-6 text-base hover:bg-white hover:text-primary' as={Link} color="primary" radius='sm' href="#">
                Go to new
            </Button>
        </div>
    </Grid>
</section>
  )
}

export default Discount