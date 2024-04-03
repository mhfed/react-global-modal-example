import React, { useState, createContext, useContext } from "react";
import { CreateModal, DeleteModal, UpdateModal } from "../../components";

export type ModalParams = {
  component: React.ReactNode;
  modalProps?: any;
};

type ContextType = {
  showModal: (params: ModalParams) => void;
  hideModal: () => void;
  store: any;
};

const initalState: ContextType = {
  showModal: () => {},
  hideModal: () => {},
  store: {},
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal: React.FC<{}> = ({ children }) => {
  debugger;
  const [store, setStore] = useState<any>();
  const { component, modalProps } = store || {};

  const showModal = ({ component, modalProps = {} }: ModalParams) => {
    setStore({
      ...store,
      component,
      modalProps,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      component: null,
      modalProps: {},
    });
  };

  const renderComponent = () => {
    const Component = component;
    if (!Component) {
      return null;
    }
    return <Component id="global-modal" {...modalProps} />;
  };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};
