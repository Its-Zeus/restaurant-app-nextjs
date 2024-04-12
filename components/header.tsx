import React from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { MdFastfood } from "react-icons/md";


const Header = () => {
    const menuItems = [
        "Home",
        "About",
        "Menu",
        "New"
      ];
  return (
    <Navbar>
        <NavbarContent className='hidden sm:flex' justify="start">
          <NavbarBrand className='flex gap-2'>
            <MdFastfood size={40}/>
            <p className="font-bold text-inherit text-large">Tasty</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className='hidden sm:flex gap-4' justify="center">
          <NavbarItem isActive>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground" aria-current="page">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Menu
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              New
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className='hidden sm:flex' justify="end">
          <NavbarItem>
            <Button className='px-8 font-normal font-bold hover:bg-white hover:text-primary' as={Link} color="primary" radius='full' href="#">
              Order Now
            </Button>
          </NavbarItem>
        </NavbarContent>


        <NavbarContent className="sm:hidden pr-3" justify="start">
            <NavbarBrand>
                <MdFastfood size={40}/>
                <p className="font-bold text-inherit text-large">Tasty</p>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="sm:hidden" justify="end">
            <NavbarItem>
                <Button className='px-8 font-normal font-bold hover:bg-white hover:text-primary' as={Link} color="primary" radius='full' href="#">
                Order Now
                </Button>
            </NavbarItem>
            <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color= "foreground"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header