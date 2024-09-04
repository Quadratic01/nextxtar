import { heros, logos } from "../assets/images";
import Nav from "../components/navigation/nav";


const Home = () => {
    return ( 
        <>
      <Nav />
      <div className="w-full min-h-screen bg-black">
        <div style={{ backgroundImage: `url(${heros.mainHero})`, backgroundSize: "cover"}}  className="pt-[100px] w-full text-center h-[700px]">
          <h1 className="mt-[150px] text-[80px] text-white text-center font-extrabold">We are all about The Music</h1>
          <p className="mt-4 text-[32px] text-white font-medium">Stream and download the music of your favourite artists.</p>
          <div className="mt-[100px] mx-auto flex gap-10 w-fit">
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
        </div>

      </div>
    </>
     );
}
 
export default Home;