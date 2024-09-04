import { Button, Heading, Img } from "./.."
import React from "react";

export default function Header({...props}) {
    return (
        < header
        {...props,}
        className={`${props.className} flex sm:flex-col justify-between items-center top-[6.50px] right-0 left-0 gap-5 px-[58px] m-auto md:px-5 flex-1 absolute sm:relative `}
        >
            <img 
            src="images/img_header_logo.png"
            alt="Logo Image"
            className="ml-[22px] h-[160px] w-[212px] object-contain md:ml-0"
            />
            <div className="flex gap-4">
                <div className="flex p-2.5">
                    <Heading size="heading as="h6" className ="!text-[#f9f5f5">
                        Login
                        </Heading>
                </div>
                <Button size="xs"  variant="outline" shape="round" className="min-w-[122px] font-semibold">
                    Register
                </Button>
                <Button size="xs" shape="round" className="min-w-[160px] font-semibold">
                    Discover Music
                </Button>
            </div>
        </header>
    );
}