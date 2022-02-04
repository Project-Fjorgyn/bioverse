import styled from 'styled-components/native';
import { Image } from 'react-native';

export const LargeIcon = styled(Image).attrs({
  resizeMode: 'contain',
})`
  height: 128px;
  width: 128px;
`;

export const SmallIcon = styled(Image).attrs({
  resizeMode: 'contain',
})`
  height: 96px;
  width: 96px;
`;
