import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  column-gap: 20px;
  margin-top: 50px;
  align-items: center;
  justify-items: center;
  flex: 1;
`;
