// components/Header.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Github from "../public/svgs/github.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 w-full bg-black p-4 z-100">
      <nav className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Patrick Mazurek</Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        <NavigationMenu className={`hidden md:block`}>
          <NavigationMenuList className="flex space-x-6">
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:underline">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:underline">
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
            <a
              href="https://github.com/jpmzurk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <NavigationMenuItem>
                <Github />
              </NavigationMenuItem>
            </a>
            <a
              href="https://linkedin.com/in/patrick-mazurek-6702123b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <NavigationMenuItem>
                <Linkedin className="w-5 h-5" />
              </NavigationMenuItem>
            </a>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-4">
              <NavigationMenuItem>
                <Link href="/info" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white hover:underline">
                    Info
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white hover:underline">
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center"
              >
                <NavigationMenuItem>
                  <Github className="w-5 h-5 mr-2" /> GitHub
                </NavigationMenuItem>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center"
              >
                <NavigationMenuItem>
                  <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                </NavigationMenuItem>
              </a>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
};

export default Header;
