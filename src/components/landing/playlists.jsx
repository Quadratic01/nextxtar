import { covers } from "../../assets/images";
import Button from "../buttons/button";



const playListData = [
    {image: "bloodsugar", genre: "Blood Sugar Sex Magik Edition", desc: "Red Hot Chili Peppers", genreType: "label"},
    {image: "dailydiscovery", genre: "Red Hot Chili Peppers", desc: "Songs by new artists", genreType: "label"},
    {image: "mymix2", genre: "My Mix 2", desc: "Ghali Liberato and Coma-cose", genreType: "label"},
    {image: "mymix4", genre: "My Mix 4", desc: "Adekunle gold and Banky W", genreType: "label"},
    {image: "honor", genre: "In Your Honor", desc: "Foo Fighters", genreType: "label"},
    {image: "bloodsugar2", genre: "Blood Sugar Sex Magik Edition", desc: "Red Hot Chili Peppers", genreType: "label"},
    {image: "dailydiscovery2", genre: "Red Hot Chili Peppers", desc: "Songs by new artists", genreType: "label"},
    {image: "mymix22", genre: "My Mix 2", desc: "Ghali Liberato and Coma-cose", genreType: "label"},
    {image: "mymix24", genre: "My Mix 4", desc: "Adekunle gold and Banky W", genreType: "label"},
    {image: "honor2", genre: "In Your Honor", desc: "Foo Fighters", genreType: "label"},
]


const PlayLists = () => {
    return ( <div className="w-full py-24 px-16 flex flex-col items-center">
        <h2 className="text-[42px] text-white leading-[64px] text-center">Discover the trending Playlists and our talented Artists</h2>
        <div className="w-full px-8 space-y-10 my-16">
            <div className="w-full flex flex-col">
                <div className="w-full flex justify-between items-center">
                    <h4 className="text-[26px] text-white font-semibold">All Genres</h4>
                    <a className="text-[18px] text-success font-medium" href="">See More</a>
                </div>
                <div className="mt-5 flex gap-12 mx-auto">
                    {playListData.slice(0, 5).map((item, i) => <MusicCard {...item} key={i}/>)}
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="w-full flex justify-between items-center">
                    <h4 className="text-[26px] text-white font-semibold">Recently uploaded</h4>
                    <a className="text-[18px] text-success font-medium" href="">See More</a>
                </div>
                <div className="mt-5 flex gap-12 mx-auto">
                    {playListData.slice(5, 10).map((item, i) => <MusicCard {...item} key={i}/>)}
                </div>
            </div>
        </div>
        <Button size="large">Discover Music and Artists</Button>
    </div> );
}
 
export default PlayLists;


const MusicCard = ({image, genre, desc, genreType}) => {
    return (
        <div className="w-full max-w-[200px] text-white">
            <div className="w-full overflow-hidden rounded-[3px]">
                <img src={covers[image] ? covers[image] : covers.bloodsugar} alt="" className="w-full object-scale-down" />
            </div>
            <p className="mt-3 mb-2 text-sm font-semibold max-w-full overflow-hidden text-clip whitespace-nowrap">{genre}</p>
            <p className="text-sm font-semibold overflow-hidden text-clip whitespace-nowrap">{desc}</p>
            <span className="text-[10px] uppercase">{genreType}</span>
        </div>
    )
}