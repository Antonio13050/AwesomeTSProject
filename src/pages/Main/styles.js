import styled from 'styled-components/native';
import { getStatusBarHeight } from'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#6FC1D9', '#ACD1CC'],
    start: { x: 0, y: 0},
    end: { x: 1, y: 1},
})`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
`;
