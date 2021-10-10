
import React from 'react';
import { Playground, Redactor } from '..';
import { GlobalStyle } from './App.styled';

export const App = () => {
    return (
        <body>
            <GlobalStyle />
            <Redactor />
            <Playground />
        </body>
    )
}
