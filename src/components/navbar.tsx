"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { components } from 'src/constants'
import { cn } from "src/app/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";



export function NavBar() {
  return (
    <nav>
    <div className="bg-[#008080] mx-auto  px-2 sm:px-6 lg:px-8 rounded-b-lg">
      <div className="relative flex h-16 items-center justify-between"> {/* Align logo, menu, and buttons */}
        {/* Logo */}
        
          <Link href="/">
            <Image
              src="/Home-page-logo.png"
              alt="logo"
              width={120}
              height={75}
              className=" left-4 cursor-pointer" // Keep the logo on the left
            />
          </Link>
          
        

        {/* Navigation Menu */}
        <div className="flex-1 flex justify-center"> {/* Center the menu */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center justify-center gap-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Icons.logo className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy and
                            paste into your apps. Accessible. Customizable. Open
                            Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button
            onClick={() => (window.location.href = "/pages/login")}
            type="submit"
            className="hover:bg-slate-100 cursor-pointer px-4 py-2 hover:text-slate-950 transition-all duration-300"
          >
            Login
          </Button>
          <Button
            onClick={() => (window.location.href = "/pages/register")}
            type="submit"
            className="text-black bg-slate-100 cursor-pointer hover:bg-slate-950 px-4 py-2 hover:text-slate-100 transition-all duration-300"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default NavBar;