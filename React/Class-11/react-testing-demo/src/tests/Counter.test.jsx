import { screen, render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe('Counter tests', () => {
    test('Default Counter Test', () => {
        // We are rendering the component using js dom etc.
        render(<Counter dummyProp='Test Prop'/>);
        
        // Assertions
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    });

    test('Test increment from 0 to 1', () => {
        render(<Counter dummyProp='Test Prop' />);
        
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
        expect(screen.getByText('Prop: Test Prop')).toBeInTheDocument();

        const incrementBtn = screen.getByText('increment');
        // triggering a click event on increment button.
        fireEvent.click(incrementBtn);

        expect(screen.getByText('Count: 1')).toBeInTheDocument();
    });

    test('Decrement from 0 to -2', () => {
        render(<Counter dummyProp="Max" />);

        const decrementBtn = screen.getByText('decrement');

        fireEvent.click(decrementBtn);
        fireEvent.click(decrementBtn);

        expect(screen.getByText('Count: -2')).toBeInTheDocument()
    });
});