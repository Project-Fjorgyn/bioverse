import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

export const TitleBackground = styled(ImageBackground).attrs({
  source: require('../../assets/background.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
