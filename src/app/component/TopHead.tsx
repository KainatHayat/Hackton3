import Link from "next/link";
import React from "react";
import { Phone } from 'lucide-react';
import { CiInstagram } from "react-icons/ci";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function TopHeader() {
  return (
    <div>
      <div>
       
          <div className="grid grid-flow-col items-center bg-slate-800 text-white w-full h-12 pl-10 pr-10">
          <ul className="flex justify-start gap-3">
            <Phone/>
            <li>(225) 555-0118</li>
            <li>michelle.rivera@example.com</li>
            </ul>
            <ul className="flex justify-center">
            <h1 className="flex">Follow Us  and get a chance to win 80% off</h1>
            </ul>
            
            <ul className="flex justify-end gap-4">
            <li>Follow Us</li>
            <li>   < CiInstagram />       </li>
            <li>    <FaSquareYoutube/>    </li>
            <li>     <FaFacebook/>        </li>
            <li>      <FaTwitter/>        </li>
          </ul>
         
          </div>
      </div>
    </div>
  );
}
