import { Button, PageCounter, Wrapper } from "./style";

export const Pagination = () => {
  const isFirstPage = 1;
  const isLastPage = 5;
  return (
    <Wrapper>
      <Button>First</Button>
      <Button>Previous</Button>
      <PageCounter>Page</PageCounter>
      <Button>Next</Button>
      <Button>Last</Button>
    </Wrapper>
  );
};
