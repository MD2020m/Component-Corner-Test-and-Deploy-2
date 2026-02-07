import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
};
global.localStorage = localStorageMock;

const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('App localStorage Integration', () => {
    beforeEach(() => {
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear();
        localStorageMock.removeItem.mockClear();
        localStorageMock.clear.mockClear();
    });

    test('loads cart items from localStorage on component mount', () => {
        const cartItems = JSON.stringify([
            { id: 1, name: 'Cart item', price: 200}
        ]);
        localStorageMock.getItem.mockReturnValue(cartItems);

        render(<App />);

        expect(localStorageMock.getItem).toHaveBeenCalledWith('cartItems')
    });

    test('saves products to localStorage when cart changes', async () => {
        localStorageMock.getItem.mockReturnValue('[]');

        render(<App />);

        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith('cartItems', '[]');
        });
    });

    test('persists cartItems across component remounts', async() => {
        localStorageMock.getItem.mockReturnValue('[]');

        const { unmount } = render(<App />);

        const testCartItem = [{ id: 1, name: 'test product', price: 200}];

        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith('cartItems', '[]');
        });

        unmount();

        localStorageMock.getItem.mockReturnValue(JSON.stringify(testCartItem));

        render(<App />);

        expect(localStorageMock.getItem).toHaveBeenCalledWith('cartItems');
    });
});

describe('App Cart State Management', () => {
    const defaultProps = {
        name: "test cart item",
        price: 200
    };

    test('adds item to cart when add to cart button is clicked', () => {
        render(<App />);

        const productsButton = screen.getByText('Products');

        fireEvent.click(productsButton);

        const addToCartButtons = screen.getAllByRole('button', '/Add to cart/i');
        
        fireEvent.click(addToCartButtons[0]);

        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.queryByText('0')).not.toBeInTheDocument();
    });
});

