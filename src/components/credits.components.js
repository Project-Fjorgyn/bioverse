import styled from 'styled-components/native';
import { View, Text } from 'react-native';

export const CreditsContainer = styled(View)`
  flex-direction: row;
  position: absolute;
  background-color: ${(props) => props.theme.colors.ui[4]};
  bottom: 0%;
  width: 100%;
`;

export const Credits = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.ui[1]};
`;
