import { Button } from "../ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="center-parent  bg-[#131313] text-textlight h-[96px] ">
            <div className="flex justify-between items-center text-center  max-w-[1110px] w-full h-full border-b border-graydarker max-[1160px]:mx-[40px]">
                <div className="relative h-[25px] w-[143px] hover:bg-darkorange rounded-[8px] ">
                    <Link href="/">
                        <Image src="/icons/audiophile.svg" fill alt="audiophile logo" />
                    </Link>
                </div>
                <ul className="flex justify-between max-w-[429px] w-full subtitle">
                    <li className="hover:text-darkorange ">
                        <Link href="/">HOME</Link>
                    </li>
                    <li className="hover:text-darkorange">
                        <Link href="/headphones">HEADPHONES</Link>
                    </li>
                    <li className="hover:text-darkorange">
                        <Link href="/speakers">SPEAKERS</Link>
                    </li>
                    <li className="hover:text-darkorange">
                        <Link href="/earphones">EARPHONES</Link>
                    </li>
                </ul>
                <div className="relative w-[23px] h-[20px] ">
                    <Button size="icon" className="w-full h-full bg-blackbg  hover:bg-darkorange rounded-[8px]">
                        <Image src="/icons/cart.svg" fill alt="cart button" />
                    </Button>
                </div>
            </div>
        </nav>
    );
}
