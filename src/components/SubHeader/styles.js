import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    backgroundColor: #FFF;
    justifyContent: space-between;
`;

export const ViewMeta = styled.View`
    padding-left: 20;
`;

export const ViewCompleto = styled.View`
    padding-right: 20;
`;

export const LabelMeta = styled.Text`
    font-size: 20;
    color: #2f80ed;
`;

export const Input = styled.TextInput.attrs({
    placeholder: "ex: 2,5l",
    keyboardType: "number-pad",
})`
    font-size: 20;
`;

export const LabelCompleto = styled.Text`
    font-size: 20;
    color: #2f80ed;
`;


