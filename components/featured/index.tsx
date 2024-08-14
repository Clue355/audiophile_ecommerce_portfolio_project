import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Featured() {
    return (
        <section className="center-parent mb-[40px]">
            <div className="max-h-fit w-full max-w-[1110px] max-[1160px]:w-full max-[1160px]:mx-[40px] max-[1160px]:flex max-[1160px]:flex-col max-[1160px]:justify-center max-[1160px]:items-center">
                {/* top */}
                <div className="relative mb-[48px] flex justify-end max-[1160px]:justify-center items-center max-[1160px]:items-end h-[560px] max-[1160px]:h-[720px] w-full max-[1160px]:w-[689px]  bg-darkorange text-textlight rounded-[8px] overflow-hidden">
                    {/* image  h-[1296px] max-[1160px]:h-[1500px]*/}
                    <div className="absolute left-[120px] -bottom-[30px]  w-[410px] h-[493px] max-[1160px]:w-[197px] max-[1160px]:h-[237px] max-[1160px]:left-0 max-[1160px]:right-0 max-[1160px]:mx-auto max-[1160px]:bottom-[415px]">
                        <Image className="z-10" src="/images/featuredspeaker.png" fill alt="picture of ZX9 SPEAKER" />
                    </div>
                    <div className="absolute -left-[145px] -bottom-[350px] w-[944px] h-[944px] max-[1160px]:-left-[126px] max-[1160px]:right-0 max-[1160px]:bottom-[65px]">
                        <Image
                            className="z-0 opacity-25"
                            src="/icons/featured_circles.png"
                            fill
                            alt="background circles"
                        />
                    </div>

                    {/* title, text, and button */}
                    <div className="mr-[95px] max-[1160px]:mr-0 max-[1160px]:mb-[64px] z-10 max-[1160px]:text-center max-[1160px]:flex max-[1160px]:flex-col max-[1160px]:justify-center  max-[1160px]:items-center">
                        <h1 className="mb-[24px] w-[265px]">ZX9 SPEAKER</h1>
                        <p className="mb-[40px] w-[349px]">
                            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                        </p>
                        <Button variant="secondary" className="hover:bg-graydarker">
                            <p className="subtitle">SEE PRODUCT</p>
                        </Button>
                    </div>
                </div>

                {/* middle */}
                <div className="relative flex justify-start items-center pl-[95px] h-[320px] w-[1110px] max-[1160px]:w-[689px] bg-graydark rounded-[8px] overflow-hidden mb-[48px]">
                    <div className="z-10">
                        <h4 className="mb-[32px]">ZX7 SPEAKER</h4>
                        <Button variant="outline" className="hover:bg-blackbg ">
                            <p className="subtitle">SEE PRODUCT</p>
                        </Button>
                    </div>
                    <div className="absolute -right-[100px] max-[1160px]:-right-[70px] -bottom-[60px] max-[1160px]:-bottom-[40px]  w-[1247px] h-[863px] max-[1160px]:w-[761px] max-[1160px]:h-[527px] z-0">
                        <Image className="z-10" src="/images/zx7speaker.png" fill alt="picture of ZX7 SPEAKER" />
                    </div>
                </div>

                {/* bottom */}
                <div className="flex justify-between max-[1160px]:justify-center h-[320px] w-full max-w-[1110px]">
                    {/* earphones image */}
                    <div className="relative w-[540px] h-[320px] max-[1160px]:w-[339px] max-[1160px]:h-[320px] max-[1160px]:mr-[11px]  rounded-[8px]">
                        <Image className="z-10" src="/images/featuredheadphones.png" fill alt="picture of headphones" />
                    </div>

                    {/* title */}
                    <div className="flex justify-start items-center pl-[95px] max-[1160px]:pl-[40px] w-[540px] h-[320px] max-[1160px]:w-[339px] max-[1160px]:h-[320px] rounded-[8px] bg-graydarkish">
                        <div>
                            <h4 className="mb-[32px]">YX1 EARPHONES</h4>
                            <Button variant="outline" className="hover:bg-blackbg ">
                                <p className="subtitle">SEE PRODUCT</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
