import { useDispatch } from "react-redux";

import MovieCard from "./MovieCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const MoviesGrid = ({ moviesList, pageNumber, increment, decrement }) => {
  const dispatch = useDispatch();

  console.log(moviesList?.results?.length);

  return (
    <>
      <div
        // layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 pt-28 md:pt-40 gap-8 place-content-center hide-scrollbar fadeAnimate"
      >
        {moviesList?.results
          ? moviesList?.results?.map((movie, index) => (
              <MovieCard
                index={index}
                key={movie.id}
                className="w-[200px] h-[150px]"
                movie={movie}
              />
            ))
          : moviesList.map((movie, index) => (
              // <AnimatePresence>
              <MovieCard
                index={index}
                key={movie.id}
                className="w-[200px] h-[150px]"
                movie={movie}
              />
              // </AnimatePresence>
            ))}
      </div>

      {moviesList?.results?.length && (
        <div className="flex items-center justify-center mt-10  space-x-4 text-black dark:text-white">
          {/* Prev button */}
          <button
            onClick={() => {
              if (pageNumber === 1) {
                return;
              } else {
                dispatch(decrement());
              }
            }}
            className={`flex items-center justify-center gap-[4px]  transition duration-200 ${
              pageNumber === 1
                ? "opacity-50 hover:text-black dark:opacity-50 dark:hover:text-white "
                : "hover:text-teal-400"
            }`}
          >
            <AiOutlineArrowLeft />
            Prev
          </button>

          {/* Next button */}
          <button
            onClick={() => {
              if (pageNumber === moviesList?.total_pages) {
                return;
              } else {
                dispatch(increment());
              }
            }}
            className={`flex items-center justify-center gap-[4px] transition duration-200 ${
              pageNumber === moviesList?.total_pages
                ? "opacity-50 hover:text-white"
                : "hover:text-teal-400"
            }`}
          >
            Next
            <AiOutlineArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default MoviesGrid;
