import styled from "styled-components";
import { colors, metrics, fonts } from "~/styles";

export const Container = styled.button`
  padding: 12px 45px;
  background-color: ${colors.primary};
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 30px 0 rgba(199, 65, 65, 0.3);
  cursor: pointer;

  -webkit-box-shadow: 0 5px 30px 0 rgba(199, 65, 65, 0.3);
  -webkit-border-radius: 5px 5px 5px 5px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  &:active {
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
`;

export const Text = styled.span`
  color: ${colors.white};
`;
