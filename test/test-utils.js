import { render } from "@testing-library/react";
import AuthContextProvider from "../store/AuthContextProvider";
import '@testing-library/jest-dom';
import 'mutationobserver-shim';

const renderer = ({children}) => {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}

const customRender = (ui, options) => 
    render(ui, {
        wrapper: renderer,
        ...options
    })

export * from '@testing-library/react';
export {customRender as render};
