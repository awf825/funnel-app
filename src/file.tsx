import React, { Dispatch, SetStateAction } from 'react';
// for later
// import { IPtoFunnelAppContext } from './interfaces/IListDetailUpdates';

export interface IFormInput {
    label: string,
    type: string,
    key: number,
    name: string
}

interface IFunnelForm {
    title: string,
    price: number,
    pages: {
        inputs: IFormInput[]
    }[]
}

const PtoFunnelAppContext = React.createContext({
    isPurchase: false,
    email: "",
    firstName: "",
    lastName: "",
    forms: new Map<number, IFunnelForm>()
 });

export const PtoFunnelAppProvider = PtoFunnelAppContext.Provider;
export default PtoFunnelAppContext;