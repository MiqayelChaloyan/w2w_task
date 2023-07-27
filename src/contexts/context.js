import { createContext, useState } from 'react';

export const GlobalDataContext = createContext(undefined);

function GlobalData({ children }) {
    const [data, setData] = useState({
        gender: '',
        height: '',
    });

    return (
        <GlobalDataContext.Provider value={{ data, setData }}>
            {typeof children === 'function' ? children() : children}
        </GlobalDataContext.Provider>
    );
}

export default GlobalData;