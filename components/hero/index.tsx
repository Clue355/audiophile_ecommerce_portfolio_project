import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="center-parent  bg-[#131313] max-[1160px]:bg-[#131313] text-textlight h-[632px] overflow-hidden">
            <div className="relative flex justify-between h-full w-full max-w-[1110px] max-[1160px]:justify-center max-[1160px]:max-w-full ">
                <div className="w-[398px] h-[346px]  pt-[128px] max-[1160px]:z-10  max-[1160px]:absolute max-[1160px]:justify-center max-[1160px]:text-center  ">
                    <p className="spacedtext text-[#7c7c7c] mb-[24px] font-normal">NEW PRODUCT</p>
                    <h1 className="mb-[24px]">XX99 MARK II HEADPHONES</h1>
                    <p className="mb-[40px] font-medium text-[#c4c4c4] w-[370px]">
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music
                        enthusiast.
                    </p>
                    <Button variant="default" className="hover:bg-lightorange">
                        <p className="subtitle">SEE PRODUCT</p>
                    </Button>
                </div>
                <div className="absolute -top-[100px] right-0 w-[708px] h-[730px] max-[1160px]:z-0 max-[1160px]:mx-auto max-[1160px]:left-0 max-[1160px]:right-0">
                    <Image
                        className="max-[1160px]:opacity-50 "
                        fill
                        src="/images/Bitmap.png"
                        alt="picture of XX99 Mark II Headphones"
                    />
                </div>
            </div>
        </section>
    );
}

// position: absolute;
// top: -100px !important;
// width: 708px !important;
// height: 730px !important;
// max-width: none !important;
