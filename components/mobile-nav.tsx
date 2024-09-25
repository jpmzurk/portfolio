import { Linkedin, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Github from "../public/svgs/github.svg";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const firstPathnameRef = useRef(pathName);

  useEffect(() => {
    if (firstPathnameRef.current !== pathName) {
      setIsOpen(false);
    }

    firstPathnameRef.current = pathName;
  }, [pathName]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} dismissible>
      <DrawerTrigger asChild className="sm:hidden">
        <Button size="icon" className="fixed top-4 right-2 z-50">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent aria-describedby="" className="bg-black flex flex-col">
        <DrawerTitle className="hidden">Links</DrawerTitle>
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
  );
};
