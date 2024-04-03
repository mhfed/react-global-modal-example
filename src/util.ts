import { ComponentProps } from "react";
import { CreateModal } from "./components";
import { showModal } from "./components/GlobalModal/GlobalModalHelper";

export function handleSomeThingAndShowModal() {
  showModal({
    component: CreateModal,
    modalProps: {
      title: "Create instance form",
      confirmBtn: "Save",
    },
  });
}
