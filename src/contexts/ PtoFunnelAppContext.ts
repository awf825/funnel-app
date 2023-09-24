import React, { Dispatch, SetStateAction } from 'react';
// for later
// import { IPtoFunnelAppContext } from './interfaces/IListDetailUpdates';

interface IFormInput {
    label: string,
    type: string,
    key: number,
    name: string
}

interface IFunnelForm {
    title: string,
    price: number,
    formPages: {
        formInputs: IFormInput[]
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