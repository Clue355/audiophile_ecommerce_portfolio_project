import Image from "next/image";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="center-parent h-[365px] bg-blackbg">
            <div className="relative w-[1110px] h-full ">
                {/* small rectangle  */}
                <div className="absolute top-0 left-0  h-[4px] w-[101px] ">
                    <Image src="/icons/Rectangle.svg" fill alt="orange rectangle" />
                </div>

                {/* footer nav */}
                <div className="flex justify-between text-textlight mt-[75px]">
                    <div className="relative h-[25px] w-[143px] ">
                        <Image src="/icons/audiophile.svg" fill alt="audiophile logo" />
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
                </div>

                {/* about and socials */}
                <div className="mt-[36px] flex justify-between text-graydark">
                    <p className="w-[540px] h-[100px]">
                        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music
                        lovers and sound specialists who are devoted to helping you get the most out of personal audio.
                        Come and visit our demo facility - we&apos;re open 7 days a week.
                    </p>

                    <div className="flex justify-end items-end">
                        <div className="relative flex justify-between h-[24px] w-[104px] ">
                            <Image className="" src="/icons/facebook.svg" width="24" height="24" alt="facebook logo" />
                            <Image src="/icons/twitter.svg" width="24" height="24" alt="twitter logo" />
                            <Image src="/icons/insta.svg" width="24" height="24" alt="insta logo" />
                        </div>
                    </div>
                </div>

                {/* copyright */}
                <div className="text-graydark mt-[56px]">
                    <p className="font-bold">Copyright 2021. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
