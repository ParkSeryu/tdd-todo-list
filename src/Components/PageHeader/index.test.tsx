import React from 'react';

import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render, screen} from '@testing-library/react';
import 'jest-styled-components';

import {PageHeader} from './index';

describe('<PageHeader />', () => {
    it('renders component correctly', () => {
        const history = createMemoryHistory();
        history.push('/');


        render(
            <Router history={history}>
                <PageHeader/>
            </Router>
        );

        const label = screen.getByText('할 일 목록');
        expect(label).toBeInTheDocument();
    })
})