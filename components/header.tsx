"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import Github from "../public/svgs/github.svg";
import { MobileNav } from "./mobile-nav";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 w-full bg-black p-4 z-100 font-[family-name:var(--font-geist-sans)]">
      <nav className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Patrick Mazurek</Link>
        </div>
        <NavigationMenu className={`hidden sm:block`}>
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
        <MobileNav />
      </nav>
    </header>
  );
};

export default Header;
