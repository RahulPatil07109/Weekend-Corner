import axios from "axios";
import React, { useEffect, useState } from "react";
import useGenre from "../../../hooks/useGenre";
import CustomPagination from "../../Pagination/CustomPagination";
import Genres from "../../SingleContent/Genres";
import SingleContent from "../../SingleContent/SingleContent";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    // console.log(data);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);
  return (
    <div>
      <Genres
        type='movie'
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <span className='pageTitle'>Movies</span>
      <div className='trending'>
        {content &&
          content.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            );
          })}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
