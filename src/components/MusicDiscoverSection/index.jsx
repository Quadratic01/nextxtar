import { Heading, Img } from "./..";
import React from "react";

export default function MusicDiscoverSection({
    headingText = "Discover the trending Playlists and our talemted Artists",
    allGenresText = "All Genres",
    seeMoreLinks = "See More",
    allGenresTitle = "Blood Sugar Sex Magik Edition",
    allGenresAuthor = "Red Hot Chili Peppers",
    allGenresLabel = "LABEL",
    myDailyTitle = "My Daily Discovery",
    myDailyAuthor = "Songs by new artists",
    myDailyLabel = "LABEL",
    mymix2title = "My mix 2",
    mymix2author = "Ghali Liberato and Coma-cose",
    mymix2label = "LABEL",
    mymix4title = "My mix 4",
    mymix4author = "Adekunle gold and Banky W",
    mymix4label = "LABEL",
    inYourHonorTitle = "In Your Honor",
    inYourHonorAuthor = "Foo Fighters",
    inYourHonorLabel ="LABEL",
    ...props
}) {
    return (
        <div
        {...props}
        className={`${props.className} flex flex-col itemms-center gap-[74px] px-[30px] md:gap[55px] sm:gap-[37px] sm:px-5 flex-1 container-xs`}
        >
            <Heading size="heading4x1" as="h1" className="tracking-[-0.42px]">
                {headingText}
            </Heading>
            <div className="flex flex-col gap-[26px] self-stretch">
                <div className = "mr-4 flex items-center justify-between gap-5 px-2.5 md:mr-0">
                   <Heading size="heading-lg" as="h4" className="w-[12%] leading-[39px]">
                    {allGenresText}
                   </Heading>
                   < a href="#">
                   <Heading size="md_medium_text_medium" as="p" className="!text-[#05a20b]">
                    {seeMoreLink}
                    </Heading>
                    </a>
                </div>
                <div className="flex gap-12 md:fle-col">
                    <div className="flex w-full flex-col gap-4">
                        <div className="rounded-[3px] bg-[#ffffff]">
                            <Img
                            src="images/.img_image_thumb.png"
                            alt="Genre Image"
                            className="h-[200px] nw-full rounded-[3px] object-cover md:h-auto"
                            />
                        </div>
                        <div className="mb-4 flex flex-col items-start justify-center">
                            <Heading as="p">{allGenresTitle}</Heading>
                            <Heading as="p">{allGenresAuhor}</Heading>
                            <Heading size="headingxs" as="p" className="!text-[#e0e0e0]">
                                {allGenresLabel}
                            </Heading>
                        </div>
                        </div>
                        <div className="flex w-full flex-col gap-4">
                            <div className="rounded-[3px] bg=[#ffffff]">
                                <Img
                                src="images/img_image_thumb_200x200.png"
                                alt="Daily Discovery Image"
                                className="h-[200px] w-full rounded-[3px] md:h-auto"
                                />
                            </div>
                        <div className="mb-4 flex flex-col items-start justify-center gap-0.5">
                            <Heading as="p">{myDailyTitle}</Heading>
                            <div className="flex flex-col items-self-stretch">
                                <Heading as="p">{myDailyAuthor}</Heading>
                                <Heading size="headingxs" as="p" className="!text-[#e0e0e0]">
                                    {myDailyLabel}
                                </Heading>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <div className="rounded-[3px] bg-[#ffffff]">
                            <Img
                            src="images/img_thumb_1.png"
                            alt="Mix Image"
                            className="h-[200px] w-full rounded-[3px] object-cover md:h-auto"
                            />
                        </div>
                        <div className="md-4 flex flex-col items-start justify-center">
                            <Heading as="p">{mymix2title}</Heading>
                            <div className="flex flex-col items-start self-stretch">
                                <Heading as="p">{mymix2author}</Heading>
                                <Heading size="headingxs" as="p" className="!text-[#e0e0e0">
                                    {mymix2label}
                                </Heading>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <div className="round-[3px] bg-[#ffffff]">
                            <Img
                            src="images/img_image_thumb_2.png"
                            alt="Mix 4 Image"
                            className="h-[200px] w-full rounded-[3px] object-cover md:h-auto"
                            />
                        </div>
                        <div className="mb-4 flex flex-col items-start justify-center gap-0.5">
                            <Heading as="p">{mymix4title}</Heading>
                            <div className="flex flex-col items-start self-stretch">
                                <Heading as="p">{mymix4author}</Heading>
                                <Heading size="headingxs" as="p" className="!text-[#e0e0e0]">
                                    {mymix4label}
                                </Heading>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <div className="rounded-[3px] bg-[#ffffff]">
                            <Img 
                            src="images/img_image_thumb_3.png"
                            alt="Honor Album Image"
                            className="h-[200px] w-full rounded-[3px] object-cover md:h-auto"
                            />
                        </div>
                        <div className="mb-4 flex flex-col items-start justify-center">
                            <Heading as="p">{inYourHonorTitle}</Heading>
                            <Heading as="p">{inYourHonorAuthor}</Heading>
                            <Heading size="headingxs" as="p" className="!text-[#e0e0e0">
                                {inYourHonorLabel}
                            </Heading>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

