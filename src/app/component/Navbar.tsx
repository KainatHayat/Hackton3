import React from "react"
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
export default function Navbar(){
    return(
        <div>
            <div>
                <div className="grid grid-flow-col bg-slate-100 h-12 text-slate-600 font-semibold pl-10 pr-10">
                    <ul className="flex justify-start items-center">
                    <h1 className="font-black text-2xl">Bandage</h1>
                    </ul>
                    <ul className="flex justify-center items-center gap-10">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Page</li>
                    </ul>
                    <ul className="flex justify-end items-center">
                        <li>   <RiAccountCircleLine/>   </li>
                        <li>Login/Rigester</li>
                        <ul className="flex justify-end gap-4">
                            <li className="flex left-2">  <CiSearch />  </li>
                            <li>  <CiShoppingCart/>   </li>
                            <li>  <CiHeart/>       </li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}