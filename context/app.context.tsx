import {createContext, ReactNode} from "react";

export interface IAppContext {
    link?: string
}

export const Context = createContext<IAppContext>({});

export const AppContextProvider = ({link, children}: IAppContext & {children: ReactNode}) => {
    return <Context.Provider value={{link}}>
        {children}
    </Context.Provider>;
};