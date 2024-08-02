import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="center-parent  bg-[#131313] text-textlight h-[96px] ">
            <div className="flex justify-between items-center text-center  max-w-[1110px] w-full h-full border-b border-graydarker">
                <div className="relative h-[25px] w-[143px] ">
                    <Image src="/icons/audiophile.svg" fill alt="audiophile logo" />
                </div>
                <ul className="flex justify-between max-w-[429px] w-full subtitle">
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
                </ul>
                <div className="relative w-[23px] h-[20px]">
                    <button className="w-full h-full">
                        <Image src="/icons/cart.svg" fill alt="cart button" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
