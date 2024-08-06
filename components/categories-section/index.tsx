import Image from "next/image";
import { Button } from "../ui/button";

export default function Categories() {
    return (
        <section className="center-parent h-[572px] w-full ">
            <div className="relative flex justify-between max-[1160px]:justify-center items-center w-[1110px] h-[284px] ">
                {/* headphones */}
                <div className="group w-[350px] h-[204px] max-[1160px]:h-[165px] max-[1160px]:w-[223px] max-[1160px]:mr-[10px] bg-graydarkish flex justify-center items-end cursor-pointer rounded-[8px]">
                    {/* Image */}
                    <div className="absolute -top-8 w-[190px] h-[190px] drop-shadow">
                        <Image src="/images/headphones.png" fill alt="image of headphones" />
                    </div>

                    {/* title and button */}
                    <div className="flex flex-col w-full text-center justify-center items-center mb-[15px]">
                        <h6>HEADPHONES</h6>
                        <Button variant="ghost">
                            <p className="subtitle text-[#797979] mr-13px  mr-[10px] group-hover:text-darkorange">
                                SHOP
                            </p>
                            <div className="relative w-[9px] h-[19px]">
                                <Image src="/icons/greaterthan.svg" fill alt="greater than sign" />
                            </div>
                        </Button>
                    </div>
                </div>

                {/* speakers */}
                <div className="group w-[350px] h-[204px] max-[1160px]:h-[165px] max-[1160px]:w-[223px] max-[1160px]:mr-[10px] bg-graydarkish flex justify-center items-end cursor-pointer rounded-[8px]">
                    {/* Image */}
                    <div className="absolute -top-6 w-[190px] h-[190px] ">
                        <Image src="/images/speakers.png" fill alt="image of speakers" />
                    </div>

                    {/* title and button */}
                    <div className="flex flex-col w-full text-center justify-center items-center mb-[15px]">
                        <h6>SPEAKERS</h6>
                        <Button variant="ghost">
                            <p className="subtitle text-[#797979] mr-13px  mr-[10px] group-hover:text-darkorange">
                                SHOP
                            </p>
                            <div className="relative w-[9px] h-[19px]">
                                <Image src="/icons/greaterthan.svg" fill alt="greater than sign" />
                            </div>
                        </Button>
                    </div>
                </div>

                {/* earphones */}
                <div className="group w-[350px] h-[204px] max-[1160px]:h-[165px] max-[1160px]:w-[223px] bg-graydarkish flex justify-center items-end cursor-pointer rounded-[8px]">
                    {/* Image */}
                    <div className="absolute -top-4 w-[190px] h-[170px] max-[1160px]:h-[104px] max-[1160px]:w-[103px] mb-[50px]">
                        <Image src="/images/earphones.png" fill alt="image of earphones" />
                    </div>

                    {/* title and button */}
                    <div className="flex flex-col w-full text-center justify-center items-center mb-[15px]">
                        <h6>EARPHONES</h6>
                        <Button variant="ghost">
                            <p className="subtitle text-[#797979] mr-13px  mr-[10px] group-hover:text-darkorange">
                                SHOP
                            </p>
                            <div className="relative w-[9px] h-[19px]">
                                <Image src="/icons/greaterthan.svg" fill alt="greater than sign" />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
