import About from '@/components/about'
import Discount from '@/components/discount'
import Footer from '@/components/footer'
import Header from '@/components/header'
import MainSection from '@/components/mainsection'
import NavbarComponent from '@/components/navbar'
import NewArrivals from '@/components/newarrivals'
import PremiumMenu from '@/components/premium-menu'
import Services from '@/components/services'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    {/* <NavbarComponent/> */}
    <Header/>
    <MainSection/>
    <Services/>
    <About/>
    <PremiumMenu/>
    <Discount/>
    <NewArrivals/>
    <Footer/>
    </>
    
  )
}
