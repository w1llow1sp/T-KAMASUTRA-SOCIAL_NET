import React from "react";
import { storeType} from "./types/types";
import store from "./redux/store";



const StoreContext = React.createContext({}as storeType)


export type ProviderProps = {
    store: storeType;
    children: React.ReactNode;
};

export const Provider: React.FC<ProviderProps> = ({
                                                      store,
                                                      children,
                                                  }) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContext;
