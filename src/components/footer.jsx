import { logos, send } from "../assets/images";
import Button from "./buttons/button";
import StoreButtons from "./storeButtons";

const Footer = () => {
    return ( <div className="w-full bg-primary-alt p-16 text-white">
        <div className="flex justify-between">
            <div className="w-[500px] shrink-0 pl-10">
                <div className="mb-7">
                    <img src={logos.logo} alt="" />
                </div>
                <StoreButtons />
                <div className="mt-16">
                    <p className="text-lg">Follow Us</p>
                    <div className="flex gap-4 mt-3">
                        {[logos.ig, logos.twitter, logos.fb, logos.yt].map((el, i) => <img src={el} key={i}/>)}
                    </div>
                </div>
            </div>
            <div className="px-20 flex justify-between w-full pt-10">
                <div>
                    <h3 className="text-xl font-semibold mb-6">Help</h3>
                    <ul className="space-y-6 text-[#E2E8F0]">
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>Streaming Platforms</li>
                        <li>Competitions</li>
                        <li>Promotions</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div className="pt-10 space-y-8">
                    <h3 className="text-xl font-semibold">Stay up to date</h3>
                    <p className="capitalize w-[240px]">Stay informed on how you can make a difference</p>
                    <div className="w-[300px] bg-white rounded-lg p-2 flex gap-2 h-[60px]">
                        <input className="outline-none border-none text-gray-4 w-full" placeholder="Your email address" type="text" />
                        <Button size="small" ><img src={send} alt="" /></Button>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
    </div> );
}
 
export default Footer;