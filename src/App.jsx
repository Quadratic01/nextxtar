import heroImg from './assets/heroes/main-hero.png'

function App() {


  return (
    <>
      <div className="w-full min-h-screen bg-black">
        <div style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover"}}  className="pt-[100px] w-full text-center h-[700px]">
          <h1 className="text-[80px] text-white text-center">We are all about The Music</h1>
          <p className="mt-4 text-[32px] text-white">Stream and download the music of your favourite artists.</p>
        </div>
      </div>
    </>
  )
}

export default App
