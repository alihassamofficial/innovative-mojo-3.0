"use client";

import { CrossIcon, HamMenuIcon } from "@/ui/Icons";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
  DrawerClose,
} from "@/ui/ShadCnDrawer";
// import useDisclosure from "@/hooks/useDisclosure";
// import { useState } from "react";

interface WebDrawerProps {
  children?: React.ReactNode;
}

const WebDrawer = ({ children }: WebDrawerProps) => {
  // const { isOpen } = useDisclosure();

  // const [isOpen, setisOpen] = useState(false);

  return (
    <>
      {/* Drawer Trigger Button */}

      <Drawer direction="left">
        <DrawerTrigger asChild>
          <button className="p-2" aria-label="Open menu">
            <HamMenuIcon />
          </button>
        </DrawerTrigger>

        {/* Drawer Content */}
        <DrawerContent className="h-full w-full max-w-none rounded-none border-none bg-white">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-semibold">Menu</DrawerTitle>
            <DrawerDescription className="text-[30px] text-black font-bold">
              Leath
            </DrawerDescription>
          </DrawerHeader>

          <div className="relative">
            <div className="p-4 absolute right-0 -top-[70px]">
              <DrawerClose asChild>
                <button className="bg-transparent rounded-full">
                  <CrossIcon />
                </button>
              </DrawerClose>
            </div>

            {children}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default WebDrawer;
