import Image from "next/image";

export default function About() {
    return (
        <section className="center-parent mt-[160px] mb-[200px]">
            <div className="flex justify-between items-center w-[1110px] h-[588px]">
                <div className="h-[295px] w-[445px]">
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
                <div className="relative w-[540px] h-full rounded-[8px]">
                    <Image src="/images/person.png" fill alt="picture of a person wearing headphones" />
                </div>
            </div>
        </section>
    );
}
