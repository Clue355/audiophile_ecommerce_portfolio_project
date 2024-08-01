import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex justify-center w-full bg-blackbg text-textlight h-[632px]">
            <div className="flex 2-xl:w-[1113.4px] max-w-2xl pt-[128px]">
                <div className="w-[398px] h-[346px] mr-[46.6px]">
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
                <div className="w-[708px]">
                    <Image width={100} height={100} src="" alt="picture of XX99 Mark II Headphones" />
                </div>
            </div>
        </section>
    );
}
