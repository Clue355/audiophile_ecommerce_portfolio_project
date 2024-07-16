import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex justify-center w-full">
            <div className="flex 2-xl:w-[1113.4px]">
                <div>
                    <p>New Product</p>
                    <p>XX99 Mark II Headphones</p>
                    <p>
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music
                        enthusiast.
                    </p>
                    <Button variant="default">See Product</Button>
                </div>
                <Image width={100} height={100} src="" alt="" />
            </div>
        </section>
    );
}
