import styled from 'styled-components/native';

export const Container = styled.View`
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