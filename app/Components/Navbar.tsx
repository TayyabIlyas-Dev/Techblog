"use client";
import Link from "next/link";
import React from "react";
import { MdMenuOpen } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Props type using interfaces;
interface navprops {
  logo: string;
}

const Navbar: React.FC<navprops> = ({ logo }) => {
  return (
    <div className="flex justify-center">
      <nav
        className="fixed top-0 w-[88vw] z-50 bg-white bg-opacity-30 backdrop-blur-lg shadow-md mt-6 border border-[#e4e4e7] rounded-full"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-extrabold flex justify-center items-center text-black">
              <Link href="/" aria-label="Home">
                <span className="text-blue-600">&lt;/&gt;</span>
                {logo}
              </Link>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center">
            <Link href="/" passHref>
              <span
                className="text-gray-600 font-semibold hover:bg-[#f4f4f5] px-4 py-1.5 rounded-full hover:text-black transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                role="menuitem"
              >
                Blogs
              </span>
            </Link>
            <Link href="/about" passHref>
              <span
                className="text-gray-600 font-semibold transition cursor-pointer hover:bg-[#f4f4f5] px-4 py-1.5 rounded-full hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                role="menuitem"
              >
                Feature
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span
                className="text-gray-600 font-semibold transition cursor-pointer hover:bg-[#f4f4f5] px-4 py-1.5 rounded-full hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                role="menuitem"
              >
                Analytics
              </span>
            </Link>

            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="text-gray-600 font-semibold hover:bg-[#f4f4f5] px-4 py-1.5 rounded-full hover:text-black transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                  Community
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Our Team</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/developers">Developers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Designers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">CEO</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contactus">Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex space-x-4">
            <Link href="/login" passHref>
              <span
                className="custom-shadow px-5 py-2 text-sm font-semibold text-[#52525b] border border-gray-300 rounded-full hover:bg-black hover:text-white transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                role="button"
              >
                Login
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <MdMenuOpen
                  className="text-3xl text-black"
                  aria-label="Open Menu"
                />
              </SheetTrigger>
              <SheetContent className="bg-white p-4 pt-5 rounded-lg shadow-lg">
                <SheetHeader>
                  <SheetTitle className="text-center text-gray-800 text-2xl font-semibold">
                    Menu
                  </SheetTitle>
                  <SheetDescription className="text-gray-600">
                    <div className="flex flex-col gap-8 mt-6">
                      <SheetClose asChild>
                        <Link href="/" passHref>
                          <span className="font-semibold hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                            Home
                          </span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/about" passHref>
                          <span className="font-semibold hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                            About
                          </span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/developers" passHref>
                          <span className="font-semibold hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                            Developers
                          </span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/designer" passHref>
                          <span className="font-semibold hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                            Designer
                          </span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/ceo" passHref>
                          <span className="font-semibold hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                            CEO
                          </span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/contactus" passHref>
                          <span className="font-semibold hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                            Contact Us
                          </span>
                        </Link>
                      </SheetClose>
                      <div className="flex justify-center pt-4 space-x-6">
                        <Link href="/login" passHref>
                          <span className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-black hover:text-white transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                            Login
                          </span>
                        </Link>
                        <Link href="/signup" passHref>
                          <span className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-blue-700 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                            Sign Up
                          </span>
                        </Link>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
