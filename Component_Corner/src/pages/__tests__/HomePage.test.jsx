import { render, screen } from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';

vi.mock('../../components/Hero', () => {
    return {
        default: ({ title, subtitle, callToAction }) => (
            <div data-testid="hero">
                <span>{title}</span>
                <span>{subtitle}</span>
                <span>{callToAction}</span>
            </div>
        )
    };
});

const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
}

describe('HomePage', () => {
    test('renders without crashing', () => {
        renderWithRouter(<HomePage />);
    });

    test('display main headings', () => {
        renderWithRouter(
            <HomePage />
        );

        expect(screen.getByText(`Why spend your time writing code that thousands of talented developers have written before? Here at Component Corner you can find .jsx files on provided by talented developers ready to implement in your next React application. Need a new product card for the storefront you're working on? A post card for your revolutionary new social media app? A polished media player for your video streaming site? Simply find them all right here, download the files, and implement them. You'll have the perfect components with thorough documentation in minutes instead of hours, and the freedom to put your own spin on them with custom styling and functionality!`)).toBeInTheDocument();
    })
});

