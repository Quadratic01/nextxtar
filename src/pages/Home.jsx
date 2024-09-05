import { heros, logos } from "../assets/images";
import Button from "../components/buttons/button";
import PlayLists from "../components/landing/playlists";
import Nav from "../components/navigation/nav";


const Home = () => {
    return ( 
        <>
      <Nav />
      <div className="w-full min-h-screen">
        <div style={{ backgroundImage: `url(${heros.mainHero})`, backgroundSize: "cover"}}  className="pt-[100px] pb-20 w-full px-16">
          <h1 className="mt-[150px] text-[80px] text-white text-center font-extrabold">We are all about The Music</h1>
          <p className="mt-4 text-[32px] text-white font-medium text-center">Stream and download the music of your favourite artists.</p>
          <div className="mt-[150px] mx-auto flex gap-10 w-fit">
            <div className="bg-black-100 rounded-md py-1 px-4 flex gap-3 text-white items-center">
                <div><img width={32} height={32} src={logos.apple} alt="" /></div>
                <div>
                    <span className="text-xs">Download on the</span>
                    <h4 className="text-xl font-medium">App store</h4>
                </div>
            </div>
            <div className="bg-black-100 rounded-md py-1 px-4 flex gap-3 text-white items-center">
                <div><img width={32} height={32} src={logos.apple} alt="" /></div>
                <div>
                    <span className="text-xs">Get it on</span>
                    <h4 className="text-xl font-medium">Google Play</h4>
                </div>
            </div>
          </div>
          
          <div className="mt-[100px]">
            <h3 className="text-2xl text-white font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              {[logos.ig, logos.twitter, logos.fb, logos.yt].map((el, i) => <img src={el} key={i}/>)}
            </div>
          </div>
        </div>

      </div>
      <div className="w-full py-24 px-16 h-[850px] relative flex justify-between">
        <img className="absolute bottom-0 left-[calc((100%-800px)/2)] w-[800px]" src={heros.hero2} alt="" />
        <div className="h-full">
          <div className="max-w-[508px] rounded-lg px-6 py-12 bg-[#121212] space-y-3 text-white">
            <Button fullWidth size="large">ENGAGE</Button>
            <p className="text-[32px] text-center">Share your music effectively, create a genuine fan base, and generate alternate streams of revenue in the process.</p>
          </div>
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className="max-w-[508px] rounded-lg px-6 py-12 bg-[#121212] space-y-3 text-white">
            <Button fullWidth size="large">INTERACT</Button>
            <p className="text-[32px] text-center">Be a part of the NextXtar community where artists and listeners interact. Receive feedback and add your own take on other artists tracks.</p>
          </div>
        </div>
      </div>
      <PlayLists />
    </>
     );
}
 
export default Home;