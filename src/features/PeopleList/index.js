import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeopleList,
  selectFetchDataStatus,
  selectPeopleList,
} from "./peopleSlice";
import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";
import { PersonTile } from "../../common/PersonTile";
import { StyledMain, StyledHeader, StyledList, StyledLink } from "../styled";

export const PeopleList = () => {
  const dispatch = useDispatch();
  const fetchDataStatus = useSelector(selectFetchDataStatus);
  const peopleList = useSelector(selectPeopleList);

  useEffect(() => {
    dispatch(fetchPeopleList());
  }, [dispatch]);

  return (
    <StyledMain>
      {fetchDataStatus === "loading" && <LoadingPage />}
      {fetchDataStatus === "error" && <ErrorPage />}
      {fetchDataStatus === "success" && (
        <>
          <StyledHeader>Popular people</StyledHeader>
          <StyledList $people>
            {peopleList.map((people) => (
              <li key={nanoid()}>
                <StyledLink to={`/people/${people.id}`}>
                  <PersonTile
                    poster={`https://image.tmdb.org/t/p/w185/${people.profile_path}`}
                    personName={people.name}
                  />
                </StyledLink>
              </li>
            ))}
          </StyledList>
        </>
      )}
    </StyledMain>
  );
};
