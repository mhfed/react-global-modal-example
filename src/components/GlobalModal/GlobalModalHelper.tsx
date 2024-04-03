import React from "react";
import { useGlobalModalContext } from "./GlobalModal";
import { ModalParams } from "./GlobalModal";

type ComponentTypes = React.ComponentClass<any> | React.FunctionComponent<any>;

type InferProps<Component extends ComponentTypes> =
  Component extends React.ComponentClass<infer Props>
    ? Props
    : Component extends React.FunctionComponent<infer Props>
      ? Props
      : never;

const GlobalModalComponent = React.forwardRef((_, ref) => {
  //useState
  const { showModal } = useGlobalModalContext();

  //effect
  React.useImperativeHandle(ref, () => {
    return {
      showModal: (params: ModalParams) => {
        showModal(params);
      },
      hideModal: () => {
        console.log("hideModal");
      },
    };
  });
  return null;
});
type ModalType = {
  showModal: <T>(params: T) => void;
  hideModal: () => void;
};

const modalRef = React.createRef<ModalType>();

export const GlobalModalHelper = React.memo(() => (
  <GlobalModalComponent ref={modalRef} />
));

export function showModal<T extends ComponentTypes>(params: {
  component: T;
  modalProps?: InferProps<T>;
}) {
  if (modalRef.current) {
    modalRef.current.showModal(params);
  }
}

export function hideModal() {
  if (modalRef.current) {
    modalRef.current.hideModal();
  }
}
