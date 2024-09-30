"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import Logo2 from "./Logo2";
export default function NavbarCharin() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { title: "ติดต่อเรา", href: "/contactUs" },
    { title: "ผลการดำเนินงาน", href: "/performance" },
    { title: "สมัครสมาชิกพรรค", href: "/applyforMember" },
    { title: "อาสาก้าวไกลอยุธยา", href: "/asaMFP" },
    { title: "ลงชื่อเข้าใช้", href: "/login" },
  ];

  return (
    <Navbar className="sm:hidden  bg-white " onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo2 />
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            className="hover:bg-primary-400 hover:scale-105 ease-in-out duration-300"
            key={`${item}-${index}`}
          >
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
