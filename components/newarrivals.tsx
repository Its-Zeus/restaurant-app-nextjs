import React from 'react'
import { Image } from '@nextui-org/react'
import {Grid} from '@radix-ui/themes'
import cheeseburger from '../public/images/cheeseburger.png'
import { FiShoppingCart } from "react-icons/fi";

const NewArrivals = () => {
  return (
    <section className='pb-20 pt-20'>
        <h1 className='text-center text-3xl font-thin mb-20'>Premium Menu</h1>
        <Grid columns={{ initial: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(3, 250px)', lg: 'repeat(3, 250px)'}} width="auto" align={'center'} justify={'center'} gapY="9" gapX="3">
            {
                [...Array(3)].map((item, index) => (
                    <div key={index} className='flex flex-col justify-center items-center py-10 mx-5 relative'>
                    <Image src={cheeseburger.src} alt='Bacon cheeseburger' />
                    <h4 className='mt-5 text-lg text-center'>Bacon cheeseburger</h4>
                    <p className='text-[#DAD8D7] text-xs mb-3'>Fast Food</p>
                    <p className='text-base'>$14.99<p className='inline-block text-primary text-xs ml-2 self-start'>$21.99</p></p>
                    <button className='absolute right-0 bottom-0 bg-primary rounded-t-md rounded-bl-md rounded-br-xl'>
                        <FiShoppingCart color='black' size={15} className='m-2' />
                    </button>
                    <div className='absolute top-0 left-0 bg-primary rounded-md'>
                        <p className='my-1 mx-2 text-sm'>New</p>
                    </div>
                </div>
                ))
            }
        </Grid>
    </section>
  )
}

export default NewArrivals