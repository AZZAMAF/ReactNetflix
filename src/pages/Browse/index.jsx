import BrowseLayout from "@/components/Layouts/BrowseLayout"
import Jumbotron from "@/components/Moduls/BrowsePage/Jumbotron"
import MovieList from "@/components/Moduls/BrowsePage/MovieList"


function Browse(){
    return(
        <BrowseLayout>
            <Jumbotron/>
            <MovieList title={'Popular Movies'}/>
            <MovieList title={'Top Rated Movies'}/>
            <MovieList title={'Upcoming Movies'}/>
        </BrowseLayout>
    )
}

export default Browse