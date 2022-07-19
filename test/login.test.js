import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Login from '../pages/index'
import '@testing-library/jest-dom'

describe('Login Component', () => {
    test('Login button works', () => {
        render(<Login/>)
        const loginInput = screen.getByPlaceholderText('Username');
        fireEvent.change(loginInput, {target: {value: 'Sincere@april.biz'}})
        const okButton = screen.getByRole('button');
        userEvent.click(okButton);
        expect(okButton).not.toBeInTheDocument();
    })

    // test('Login button does not allow unauthorized Users', () => {
    //     render(<Login/>);
    //     const loginInput = screen.getByPlaceholderText('Username');
    //     fireEvent.change(loginInput, {target: {value: 'test@april.biz'}});
    //     const okButton = screen.getByRole('button');
    //     userEvent.click(okButton);
    //     const alertNotAuth = screen.getByText('Not Authorized, please contact the Administrator')
    //     expect(alertNotAuth).toBeInTheDocument()
    // });
});