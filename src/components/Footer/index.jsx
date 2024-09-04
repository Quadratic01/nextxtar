import {Button, Input, Img, Text, Heading } from "./.."
import React from "react"

export default function Footer({ ...props}) {
    return (
        <footer {...props} className={`${props.className} flex justify-center items-center py-12 md:py-5 bg-[#002f17]`}>
            <div className="container-xs md-3 flex justify-center md:px-5">
                <div className="flex w-full flex-col item-start gap-[46px]">
                <div className="flex w-[90%] item-start justify-between gap-5 md:w-full md:flex-col">
                 <div className="flex w-[14%] flex-col items-center self-center md:w-full"> 
                    <Img src="images/img_footer_logo.png" alt="Footer Logo" className="h-[100px] w-[-164] object-contain" />
                    <ul className ="!mt-1.5 flex flex-col ites-center gap-3.5 self-stretch py-2">
                        <li>
                            <a href="#">
                            <img
                            src="images/img_button.svg"
                            alt="Downlaod Button"
                            className="h-[46px] w-[object-contain"
                            />
                            </a>
                            </li>
                            <li>
                                <a href="#">
                                <Img
                                src="images/img_google_play_468x160.png"
                                alt="Google Play Link"
                                className="h-[46px] w-[160px] rounded-md object-contain"
                                />
                                </a>
                            </li>
                            </ul>
                            <div className="mx 2.5 mt-[50px] flex flex-col items-start gap-2 self-stretch md:mx-0">
                                <Text size="textmd" as="p" className="!font-medium !text-[#ffffff]">
                                 Follow US
                                </Text>
                                <div className="flex items-center gap-4 self-stretch">
                                    <Img src="images/img_group.png" alt="Social Group Image" className="h-[24px w-[24px] object-cover" />
                                    <Img src="images/img_trash.svg" alt="Trash icon" className="h-[24px w-[24px]" />
                                    <Img src="images/img_logos_facebook.svg" alt="Facebook logo" className="h-[24px w-[24px]" />
                                    <Img src="images/img_warning.svg" alt="Warning Icon" className="h-[24px]" />
                                </div>
                                </div>
                                </div>
                            <div className="flex w-[56%] items-start justify-between gap-5 md:full sm:flex-col">
                                <div className="relative h-[316px] w-[42%] self-center md:h-auto sm:w-full">
                                    <Heading size= "headingmd" as="h5" className="mt-2">
                                        Help
                                    </Heading>
                                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-1.5">
                                        <div className="flex">
                                            <Heading size="headingmd" as="h5" className="self-end">
                                                Help
                                            </Heading>
                                        </div>
                                        <ul className="flex flex-col items-start justify-center gap-3.5 py-1.5">
                                        <li>
                                            <a href="FAQ" target="_blank" rel="noreferrer">
                                            <Text as="p">FAQ</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text as="p">Privacy Policy</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text as="p">Streaming Platforms</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Competitions" target="-blank" rel="noreferrer">
                                                <Text as="p">Competitions</Text>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="Promotions" target="_blank" rel="noreferrer">
                                               <Text as="p">Promotions</Text> 
                                            </a>
                                        </li>
                                        <li>
                                         <a href="#">
                                            <Text as="p">Terms and Condition</Text
                                            ></a>  
                                        </li>
                                    </ul>
                                    </div>
                                    </div>
                                    <div className="mt-7 flex w-[36%] flex-col items-start sm:w-full">
                                        <Heading size="heading" as="h6">
                                            Stay up to date
                                        </Heading>
                                        <Text size="textxs" as="p" className="mt-[18px] w-[94%] leading-[26px] !text-[#ffffff] md:w-full">
                                            Stay Informed on how you can make a difference
                                        </Text>
                                        <input 
                                        color="gray_50"
                                        size="xs"
                                        shape="round"
                                        name="Email Input"
                                        placeholder={`Your Email Address`}
                                        suffix={
                                            <div className="flex h-[-10px] w-[10px] items-center justify-center">
                                                <Img src="images/img_save.svg" alt="Save" className="my-1 h-[10px] w-[10px]" />
                                                </div>
                                        }
                                        className="mt-8 gap-2 self-stretch border border-solid border-[#ccdbf1] font-medium"
                                        />
                                    </div>
                                    </div>
                                    </div>
                                    <Button color="blue_gray_800" size="Ig" variant="outlines" shape="square" className="self-stretch">
                                        @ Quadratic 2024 Copyright, NextXtar, All rights reserved.
                                    </Button>
                                    </div>
                                    </div>
                                 </footer>               
    );
}