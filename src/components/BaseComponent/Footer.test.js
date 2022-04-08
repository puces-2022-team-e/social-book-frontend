import Footer from './Footer'
import React from 'react';
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";

describe('Footer', () => {
    it('should render about us buttons', ()=>{
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(screen.getByText('Sobre nós')).toBeInTheDocument();
    })
})