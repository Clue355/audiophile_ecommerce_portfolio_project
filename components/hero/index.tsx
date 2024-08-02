import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex justify-center w-full  bg-[#131313] text-textlight h-[632px] overflow-hidden">
            <div className="flex justify-center max-w-[1110px] ">
                <div className="w-[398px] h-[346px] mr-[46.6px] pt-[128px]">
                    <p className="spacedtext text-[#7c7c7c] mb-[24px] font-normal">NEW PRODUCT</p>
                    <h1 className="mb-[24px]">XX99 MARK II HEADPHONES</h1>
                    <p className="mb-[40px] font-medium text-[#c4c4c4] w-[370px]">
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music
                        enthusiast.
                    </p>
                    <Button variant="default">
                        <p className="subtitle">SEE PRODUCT</p>
                    </Button>
                </div>
                <div className="relative w-[712px] h-[690px]  ">
                    <Image
                        className="header-image"
                        fill
                        src="/images/Bitmap.png"
                        alt="picture of XX99 Mark II Headphones"
                    />
                </div>
            </div>
        </section>
    );
}
