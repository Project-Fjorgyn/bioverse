import styled from 'styled-components/native';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../theme';

export const ActionButton = styled(Button).attrs({
  mode: 'contained',
  color: theme.colors.ui[3],
})`
  margin-right: ${(props) => props.theme.spacing.md};
  margin-left: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

export const ResetContainer = styled(View)`
  flex-direction: row;
  position: absolute;
  right: 5%;
  top: 10%;
`;
