import React, { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mount function to start up the app
const mount = (el) => {
    const root = createRoot(el);

    root.render(
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    );
}

// If we are in development and in isolation,
// call mount immediately
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#root');
    console.log(el)
    if (el) {
        mount(el)
    }
}

// We are runnin through container
// and we should export the mount function
export { mount }