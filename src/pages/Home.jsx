import { heros, logos, pictures } from "../assets/images";
import Button from "../components/buttons/button";
import PlayLists from "../components/landing/playlists";
import Nav from "../components/navigation/nav";
import StoreButtons from "../components/storeButtons";


const Home = () => {
    return ( 
        <>
      <Nav />
      <div className="w-full min-h-screen">
        <div style={{ backgroundImage: `url(${heros.mainHero})`, backgroundSize: "cover"}}  className="pt-[100px] pb-20 w-full px-16">
          <h1 className="mt-[150px] text-[80px] text-white text-center font-extrabold">We are all about The Music</h1>
          <p className="mt-4 text-[32px] text-white font-medium text-center">Stream and download the music of your favourite artists.</p>
          <div className="mt-[150px] mx-auto flex gap-10 w-fit">
            <StoreButtons />
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
      <div className="w-full p-16 flex gap-[180px] text-white items-center justify-center">
        <div className="w-[592px]">
          <h2 className="text-[42px] font-semibold">Download and listen to your favourite songs and artists with NextXtar</h2>
          <p className="text-lg mb-4">NextXtar is available on Web, iOS and Android for download</p>
          <StoreButtons />
        </div>
        <div className="w-full max-w-[536px]">
          <img src={pictures.iphone} alt="" className="w-full" />
        </div>
      </div>
      <div className="p-16 w-full flex text-white">
        <div className="mx-auto max-w-[1200px] px-12 py-16 rounded-[20px] bg-[#121212] w-full space-y-10 relative">
          <img src={pictures.gallery} className="right-0 bottom-0 absolute w-[501px] object-scale-down" alt="" />
          <div className="w-[571px]">
            <h2 className="text-[32px] font-semibold">Subscribe to our Monthly Newsletter for Updates and Promos</h2>
            <div className="flex gap-4">
              <input type="text" className="bg-white rounded-md p-3 outline-none border-none text-center w-[300px]" placeholder="Enter your email address"/>
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-16 flex gap-[180px] text-white items-center justify-center">
      <div className="w-full max-w-[536px]">
          <img src={pictures.singer} alt="" className="w-full" />
        </div>
        <div className="w-[592px]">
          <h2 className="text-[42px] font-semibold">Get in Touch with Us</h2>
          <p className="text-lg mb-4">To be always updated with all our activities, you can follow us and subscribe on all our social media platforms by visiting our contact page</p>
          <Button size="large" variant="secondary" >Visit Our Contact Page</Button>
        </div>
      </div>
    </>
     );
}
 
export default Home;