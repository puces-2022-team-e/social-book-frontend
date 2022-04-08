import Header from './Header'
import React from 'react';
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";

describe('Header', () => {
    it('should render home and login buttons', ()=>{
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByText('Social Book')).toBeInTheDocument();
    })
})