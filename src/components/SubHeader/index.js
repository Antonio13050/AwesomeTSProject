import React from 'react';

import { Container, LabelMeta, Input, ViewMeta, ViewCompleto, LabelCompleto } from './styles';

export default function SubHeader() {
    return (
        <Container>
            <ViewMeta>
                <LabelMeta>Meta diária</LabelMeta>
                <Input />
            </ViewMeta>
            <ViewCompleto>
                <LabelCompleto>Completado</LabelCompleto>
                <LabelCompleto>1200ml</LabelCompleto>
            </ViewCompleto>
        </ Container>
    );
}