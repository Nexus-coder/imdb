import { useQuery } from "@tanstack/react-query"
import MovieOptionFetch from "../Fetch/MovieOptionFetch";
import { useState } from "react"

export default function Navbar() {
    const [movie, setMovie] = useState("")
    const res = useQuery(['movies', movie], MovieOptionFetch);

    let data = res.data ?? [];
    console.log(data)
    return (
        <div className="flex flex-row items-center px-4 gap-4 bg-slate-950 text text-white h-20">
            <button><span >Imdb</span></button>
            <button >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <span>Menu</span></button>
            <div id="search-box" className="relative w-10/12 h-10">
                <div className="flex flex-row items-center border-2  border-orange-500">
                    <div className="flex items-center justify-center w-1/12 h-10 text-center border-r-2">ALL</div>
                    <input
                        className="px-4 text-xl w-full outline-none text-black h-10 focus:outline"
                        type="search"
                        name=""
                        id=""
                        value={movie}
                        onChange={(e) => { setMovie(e.target.value) }}
                    />
                </div>
                {
                    data.length ? (<div className="absolute w-full mt-2 rounded-md py-3 bg-slate-400 z-50">
                        <ul className="grid grid-cols-2">
                            {data.map((elem) => (
                                <li className="flex items-center gap-4 hover:brightness-75 text-xl pl-3 mt-2">
                                    <div className="w-12 h-12 bg-slate-500 overflow-hidden">
                                        <img src={elem.show.image?.original ?? <p>No image</p>} alt="" />
                                    </div>
                                    {elem.show.name}
                                </li>
                            ))}
                        </ul>
                    </div>) : null
                }
            </div>
            <button className="w-20">WatchList</button>
            <button>Sign In</button>
        </div>
    )

}