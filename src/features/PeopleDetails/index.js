import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchPeopleDetails,
  selectFetchDataStatus,
  selectPersonDetails,
  selectPersonMovieCast,
  selectPersonMovieCrew,
  selectGenreList,
} from "./peopleDetailsSlice";
import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";
import { ActorProfile } from "./ActorProfile";
import { MoviesList } from "./MoviesList";
import { StyledMain } from "../styled";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
};

export const PeopleDetails = () => {
  const dispatch = useDispatch();
  const personId = useParams();
  const fetchDataStatus = useSelector(selectFetchDataStatus);
  const personDetails = useSelector(selectPersonDetails);
  const moviesCast = useSelector(selectPersonMovieCast);
  const moviesCrew = useSelector(selectPersonMovieCrew);
  const genreList = useSelector(selectGenreList);

  useEffect(() => {
    dispatch(fetchPeopleDetails(personId));
  }, [dispatch, personId]);

  return (
    <StyledMain>
      {fetchDataStatus === "loading" && <LoadingPage />}
      {fetchDataStatus === "error" && <ErrorPage />}
      {fetchDataStatus === "success" && (
        <>
          <ActorProfile
            poster={`https://image.tmdb.org/t/p/h632/${personDetails.profile_path}`}
            name={personDetails.name}
            birthDate={formatDate(personDetails.birthday)}
            birthPlace={personDetails.place_of_birth}
            biography={personDetails.biography}
          />
          <MoviesList
            header={`Movies - cast`}
            moviesList={moviesCast}
            genreList={genreList}
          />
          <MoviesList
            header={`Movies - crew`}
            moviesList={moviesCrew}
            genreList={genreList}
          />
        </>
      )}
    </StyledMain>
  );
};
