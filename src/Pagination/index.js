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
    page,
    totalPages,
    setNextPage,
    setPreviousPage,
    setFirstPage,
    setLastPage,
  } = usePageButton();
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
  return (
    <Wrapper>
      <Button onClick={setFirstPage} disabled={isFirstPage}>
        <PrevArrowIcon disabled={isFirstPage} />
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={setPreviousPage} disabled={isFirstPage}>
        <PrevArrowIcon disabled={isFirstPage} />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page <PageNumbers>{page}</PageNumbers> of{" "}
        <PageNumbers>{totalPages}</PageNumbers>
      </PageCounter>
      <Button onClick={setNextPage} disabled={isLastPage}>
        <ButtonText>Next</ButtonText>
        <NextArrowIcon disabled={isLastPage} />
      </Button>
      <Button onClick={setLastPage} disabled={isLastPage}>
        <ButtonText>Last</ButtonText>
        <NextArrowIcon disabled={isLastPage} />
      </Button>
    </Wrapper>
  );
};
