import React from 'react'
import {Grid} from '@radix-ui/themes'
import food from '../public/images/food.png'
import customer from '../public/images/customer.png'
import delivery from '../public/images/delivery.png'
import { Image } from '@nextui-org/react'

const Services = () => {
  return (
    <section className='flex flex-col justify-center items-center mt-20 pb-20'>
        <h1 className='text-center text-3xl font-thin mb-20'>Our Services</h1>
        <Grid gap="6" columns={{ initial: '1', sm: '2', md: '3', lg: '3'}} width="auto" align={'center'} justify={'center'}>
            <div className='flex flex-col text-center justify-center items-center'>
                <Image  src={customer.src} alt="customer" style={{height: '150px'}}/>
                <h4 className='text-lg my-2'>24/7 Services</h4>
                <p className='px-7 max-w-[300px] text-[#DAD8D7]'>Convenience at your fingertips, round the clock, every day.</p>
            </div>
            <div className='flex flex-col text-center justify-center items-center'>
                <Image src={delivery.src} alt="delivery" style={{height: '150px'}}/>
                <h4 className='text-lg my-2'>Fast Delivery</h4>
                <p className='px-7 max-w-[300px] text-[#DAD8D7]'>Savor our flavors in record time, delivered fresh and hot.</p>
            </div>
            <div className='flex flex-col text-center justify-center items-center md:col-span-2 lg:col-span-1'>
                <Image src={food.src} alt="food" style={{height: '150px'}}/>
                <h4 className='text-lg my-2'>Delicious Food</h4>
                <p className='px-7 max-w-[300px] text-[#DAD8D7]'>Savor culinary delight in every bite, crafted to perfection.</p>
            </div>
        </Grid>
    </section>
  )
}

export default Services