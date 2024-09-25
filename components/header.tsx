"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Linkedin, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Github from "../public/svgs/github.svg";
import { Drawer, DrawerContent } from "./ui/drawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName && isOpen) {
      setIsOpen(false);
    }
  }, [pathName]);

  return (
    <header className="fixed top-0 right-0 w-full bg-black p-4 z-100 font-[family-name:var(--font-geist-sans)]">
      <nav className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Patrick Mazurek</Link>
        </div>
        <div className="md:hidden -mr-4">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
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
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          dismissible
          direction="right"
        >
          <DrawerContent className="bg-black flex flex-col rounded-t-[10px] h-full w-[200px] mt-24 fixed bottom-0 right-0">
            <div className="flex flex-col p-4 bg-black flex-1 gap-4">
              <Link
                href="/about"
                legacyBehavior
                passHref
                className="text-white hover:underline"
              >
                About
              </Link>
              <Link href="/projects" legacyBehavior passHref>
                Projects
              </Link>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Github className="w-5 h-5 mr-2" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </a>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </header>
  );
};

export default Header;
