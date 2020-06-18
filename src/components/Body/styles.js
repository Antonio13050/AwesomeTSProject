import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const TextMeta = styled.Text`
    font-size: 20;
    color: #2f80ed;
`;

export const Input = styled.TextInput.attrs({
    placeholder: "ex: 2,5l",
    keyboardType: "number-pad",
})`
    font-size: 20;
`;

export const Image = styled.Image`
    width: 270;
    height: 300;
`;

export const TextQtd = styled.Text`
    font-size: 30;
    color: #2f80ed;
`;

export const Button = styled.TouchableOpacity`
    backgroundColor: #FFF;
    borderRadius: 35;
    width: 70;
    height: 70;
    justifyContent: center;

`;

export const TextButton = styled.Text`
    text-align: center;
    font-size: 38;
    color: #2f80ed;
`;


