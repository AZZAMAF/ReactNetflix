import BrowseLayout from "@/components/Layouts/BrowseLayout"
import Jumbotron from "@/components/Moduls/BrowsePage/Jumbotron"
import Modal from "@/components/Moduls/BrowsePage/Modal"
import MovieList from "@/components/Moduls/BrowsePage/MovieList"


function Browse(){
    return(
        <BrowseLayout>
            <Jumbotron/>
            <MovieList title={'Popular Movies'} moviesType={"now_playing"}/>
            <MovieList title={'Top Rated Movies'} moviesType={"popular"}/>
            <MovieList title={'Upcoming Movies'} moviesType={"top_rated"}/>
            {/* <MovieList title={'Upcoming Movies'} moviesType={"upcoming"}/> */}
            <Modal/>
        </BrowseLayout>
    )
}

export default Browse