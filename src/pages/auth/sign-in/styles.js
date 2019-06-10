import styled from "styled-components";
import { colors, fonts, metrics } from "~/styles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.greyLight};
`;

export const Title = styled.h1`
  margin-bottom: ${metrics.margin.regular};
`;
