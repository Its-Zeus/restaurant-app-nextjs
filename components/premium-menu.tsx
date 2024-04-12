import React from 'react'
import { Image } from '@nextui-org/react'
import {Grid} from '@radix-ui/themes'
import neapolitan from '../public/premium/neapolitan.png'
import burger from '../public/premium/burger.png'
import spaghetti from '../public/premium/spaghetti.png'
import pepperoni from '../public/premium/pepperoni.png'
import salad from '../public/premium/salad.png'
import { FiShoppingCart } from "react-icons/fi";
import {premium} from '@/lib/premium'


const PremiumMenu = () => {
  return (
    <section className='pb-20 pt-20'>
        <h1 className='text-center text-3xl font-thin mb-20'>Premium Menu</h1>
        <Grid columns={{ initial: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(3, 250px)', lg: 'repeat(3, 250px)'}} width="auto" align={'center'} justify={'center'} gapY="9" gapX="3">
            {
                premium.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center items-center py-1 mx-5 relative'>
                        <Image src={item.src} alt={item.alt} className='h-[132px]'/>
                        <h4 className='mt-5 text-lg'>{item.alt}</h4>
                        <p className='text-[#DAD8D7] text-xs mb-3'>{item.cat}</p>
                        <p className='text-base'>{item.price}</p>
                        <button className='absolute right-0 bottom-0 bg-primary rounded-t-md rounded-bl-md rounded-br-xl'>
                            <FiShoppingCart color='black' size={15} className='m-2' />
                        </button>
                    </div>
                ))
            }
        </Grid>
    </section>
  )
}

export default PremiumMenu