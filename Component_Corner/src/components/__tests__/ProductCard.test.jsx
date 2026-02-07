import { render, screen } from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProductCard', () => {
    test('renders without crashing', () => {
        renderWithRouter(
            <ProductCard
                name='test product'
                price='100'
                image="https://placehold.co/600x400"
                description='a product that should render'
                handleAddToCart={() => {}}
            />
        );
    });

    test('renders props information correctly', () => {
        renderWithRouter(
            <ProductCard
                name='test product'
                price='100'
                image="https://placehold.co/600x400"
                description='a product that should render'
                handleAddToCart={() => {}}
            />
        );

        expect(screen.getByText('test product')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
        expect(screen.getByText('a product that should render')).toBeInTheDocument();
    });

    test('renders with Add to Cart button', () => {
        renderWithRouter(
            <ProductCard
                name='test product'
                price='100'
                image="https://placehold.co/600x400"
                description='a product that should render'
                handleAddToCart={() => {}}
            />
        );

        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});

