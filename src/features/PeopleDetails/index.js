import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchPeopleDetails,
  selectFetchDataStatus,
} from "./peopleDetailsSlice";
import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";
import { StyledMain, StyledHeader } from "../styled";

export const PeopleDetails = () => {
  const dispatch = useDispatch();
  const personId = useParams();
  const fetchDataStatus = useSelector(selectFetchDataStatus);

  useEffect(() => {
    dispatch(fetchPeopleDetails(personId));
  }, [dispatch, personId]);

  return (
    <StyledMain>
      {fetchDataStatus === "loading" && <LoadingPage />}
      {fetchDataStatus === "error" && <ErrorPage />}
      {fetchDataStatus === "success" && (
        <>
          <StyledHeader>Szczegóły o aktorze</StyledHeader>
        </>
      )}
    </StyledMain>
  );
};
