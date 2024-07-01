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
import { ActorTile } from "../../common/ActorTile";
import {
  StyledMain,
  StyledHeader,
  StyledList,
  StyledItem,
  StyledLink,
} from "../styled";

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
          <StyledList $people>
            {peopleList.map((people) => (
              <StyledItem key={nanoid()}>
                <StyledLink to={`/people/${people.id}`}>
                  <ActorTile
                    poster={`https://image.tmdb.org/t/p/w185/${people.profile_path}`}
                    actorName={people.name}
                  />
                </StyledLink>
              </StyledItem>
            ))}
          </StyledList>
        </>
      )}
    </StyledMain>
  );
};
