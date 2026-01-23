import { screen, render } from "@testing-library/react";
import Product from "../components/Product";
import { vi } from "vitest";

describe('Product test', () => {

     beforeEach(() => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        id: 1,
                        title: 'Test Product'
                    })
            })
        )
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    test('Default product', () => {
        render(<Product />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('Checking for title', async() => {
        render(<Product />);

        const title = await screen.findByText('Test Product')
        
        expect(title).toBeInTheDocument();
    });
})