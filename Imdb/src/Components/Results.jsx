import MovieCard from "../MiniComponents/MovieCard"
export default function Results({heading,props}) {
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-6xl font-bold ">{heading}</h1>
            <div className="flex overflow-x-scroll">
                {props.map((elem, index) => (
                    <MovieCard 
                    description={elem.show.summary}
                    image={elem.show.image}
                    score={elem.score}
                    name={elem.show.name}
                     key={index} />
                ))}
            </div>
        </div>
    )
}