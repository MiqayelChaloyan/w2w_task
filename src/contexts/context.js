import { createContext, useState } from 'react';

export const GlobalDataContext = createContext(undefined);

function GlobalData({ children }) {
    const [isChangeStatusBar, setChangeStatusBar] = useState(true);
    const [data, setData] = useState({
        gender: '',
        height: '',
        image: '',
    });

    return (
        <GlobalDataContext.Provider
            value={{
                data, setData, isChangeStatusBar, setChangeStatusBar
            }}>
            {typeof children === 'function' ? children() : children}
        </GlobalDataContext.Provider>
    );
}

export default GlobalData;