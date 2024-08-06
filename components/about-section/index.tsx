import Image from "next/image";

export default function About() {
    return (
        <section className="center-parent mt-[160px] mb-[200px] max-[1160px]:mt-[96px]">
            <div className="flex justify-between max-[1160px]:flex-col-reverse items-center w-[1110px] h-[588px]">
                <div className="h-[295px] w-[445px] max-[1160px]:w-[573px] max-[1160px]:text-center">
                    <h2>
                        BRINGING YOU THE <span className="text-darkorange">BEST</span> AUDIO GEAR
                    </h2>
                    <p className="mt-[32px]">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                        rooms available for you to browse and experience a wide range of our products. Stop by our store
                        to meet some of the fantastic people who make Audiophile the best place to buy your portable
                        audio equipment.
                    </p>
                </div>
                <div className="relative w-[540px] max-[1160px]:w-[689px] h-full max-[1160px]:h-[300px] max-[1160px]:mb-[63px] rounded-[8px]">
                    <Image src="/images/person.png" fill alt="picture of a person wearing headphones" />
                </div>
            </div>
        </section>
    );
}
