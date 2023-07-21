export default function ShowMoviePage({ props }) {
    console.log(props);
    const { score, show } = props;
    const { genres, image, name, ended, summary } = show
    return (
        <div className="p-5">
            <section>
                <nav>
                    <ul className="flex gap-2 text-2xl">
                        <li className="font-bold">Episode Guide<span>90</span></li>
                        <li>Cast and Crew</li>
                        <li>User Review</li>
                        <li>Trivia</li>
                        <li>IMDBPro</li>
                        <li>All Topics</li>
                        <li>Share</li>
                    </ul>
                </nav>
                <nav className="flex">
                    <div>
                        <span className="text-5xl">{ }</span>
                        <div className="text-2xl leading-6 ">{ended}</div>
                    </div>
                </nav>
                <div className="flex gap-1 h-[410px] mt-2">
                    <div className="w-1/4 h-full bg-black"><img src={image.original} alt="" /></div>
                    <div className="w-2/4 h-full bg-slate-500"></div>
                    <div className="w-1/4 h-full bg-slate-400"></div>
                </div>
                <div>
                    <div className="w-3/5">
                        <div className="my-1">
                            {genres.map((elem) => { <span className="border-2 border-slate-900  w-12 h-9 px-4 rounded-3xl text-center text-xl">{elem}</span> })}
                        </div>
                        <p className="text-2xl font-bold py-1">{summary}</p>
                        <hr className="border-slate-600" />
                        <p className="text-2xl font-bold py-2">Creator:Andrew Kimani</p>
                        <hr className="border-slate-600" />
                        <p className="text-2xl font-bold py-2">Stars</p>
                        <hr className="border-slate-600" />
                        <p className="text-2xl font-bold py-2">ImdbPro See Production ,box oices and company info</p>
                    </div>
                </div>
            </section>
            <div>
                <p>Nominated or  Primetime Emmy</p>
            </div>

            <div>
                <p>Episodes</p>
                <div>
                    <button>Watchlist</button>
                    <span>Mon,May 2006</span>
                    <span>S1 E21</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, deserunt aut consequatur nihil facilis vitae</p>
                </div>
                <div>
                    <button>Watchlist</button>
                    <span>Mon,May 2006</span>
                    <span>S1 E21</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, deserunt aut consequatur nihil facilis vitae</p>
                </div>
                <p>Browse Episodes</p>
                <p>Top Rated</p>
                <p>5 seasons</p>
                <p>6 years</p>
            </div>
            <div>
                <p>Videos</p>
                <div className="w-[390px] h-[220px] bg-slate-500"></div>
                <div className="w-[390px] h-[220px] bg-slate-500"></div>
            </div>
            <div>
                <p>Photos</p>
                <div className="w-48 h-48 bg-slate-500"></div>
            </div>
            <div className="text-4xl p-4 rounded-xl border-4 w-80">
                <div className="flex flex-row gap-5">
                    <div className="w-24 h-24 rounded-full bg-stone-700">
                    </div>
                    <div className="flex flex-col gap-3 justify-center">
                        <span className="text-2xl leading-6 ">name</span>
                        <span className="text-2xl leading-6">country.name</span>
                    </div>
                </div>
            </div>
        </div>
    )
}