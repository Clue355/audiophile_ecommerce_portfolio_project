import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex justify-center w-full bg-[#131313] text-textlight h-[632px]">
            <div className="flex 2-xl:w-[1113.4px]  ">
                <div className="w-[398px] h-[346px] mr-[46.6px] pt-[128px]">
                    <p className="spacedtext text-[#7c7c7c] mb-[24px] font-normal">New Product</p>
                    <h1 className="mb-[24px]">XX99 Mark II Headphones</h1>
                    <p className="mb-[40px] font-medium text-[#c4c4c4]">
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music
                        enthusiast.
                    </p>
                    <Button variant="default">
                        <p className="subtitle">SEE PRODUCT</p>
                    </Button>
                </div>
                <div className="relative w-[600px] h-full">
                    <Image
                        className="absolute bottom-0"
                        fill
                        src="/images/Bitmap.png"
                        alt="picture of XX99 Mark II Headphones"
                    />
                </div>
            </div>
        </section>
    );
}
