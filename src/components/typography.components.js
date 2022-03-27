import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Brand = styled(Text)`
  font-family: ${(props) => props.theme.fonts.brand};
  font-size: ${(props) => props.theme.fontSizes.h2};
  margin: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.ui[2]};
`;

export const SpeciesTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.ui[1]};
`;

export const Info = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
  margin: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.ui[3]};
`;
