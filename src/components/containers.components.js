import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.ui[2]};
`;

export const SpeciesTitleContainer = styled(View)`
  flex-direction: row;
  position: relative;
  background-color: ${(props) => props.theme.colors.ui[4]};
  top: 0%;
  width: 100%;
  z-index: 100;
`;

export const MapInfoContainer = styled(View)`
  flex-direction: row;
  position: absolute;
  background-color: ${(props) => props.theme.colors.ui[1]};
  top: 20%;
  width: 50%;
  right: 25%;
  z-index: 100;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
