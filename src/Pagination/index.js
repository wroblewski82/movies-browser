import {
  Button,
  ButtonText,
  NextArrowIcon,
  PageCounter,
  PageNumbers,
  PrevArrowIcon,
  Wrapper,
} from "./style";
import { usePageButton } from "./usePageButton";

export const Pagination = () => {
  const {
    actualPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    setFirstPage,
    setLastPage,
  } = usePageButton();
  const isFirstPage = actualPage === 1;
  const isLastPage = actualPage === totalPages;
  return (
    <Wrapper>
      <Button onClick={setFirstPage} disabled={isFirstPage}>
        <PrevArrowIcon />
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={setPreviousPage} disabled={isFirstPage}>
        <PrevArrowIcon />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page <PageNumbers>{actualPage}</PageNumbers> of{" "}
        <PageNumbers>{totalPages}</PageNumbers>
      </PageCounter>
      <Button onClick={setNextPage} disabled={isLastPage}>
        <ButtonText>Next</ButtonText>
        <NextArrowIcon />
      </Button>
      <Button onClick={setLastPage} disabled={isLastPage}>
        <ButtonText>Last</ButtonText>
        <NextArrowIcon />
      </Button>
    </Wrapper>
  );
};
