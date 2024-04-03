import React from "react";
import { Button, ButtonVariant } from "@patternfly/react-core";
import { useGlobalModalContext } from "./components/GlobalModal";
import { CreateModal } from "./components/CreateModal";
import { DeleteModal } from "./components/DeleteModal";
import { showModal } from "./components/GlobalModal/GlobalModalHelper.tsx";
import { handleSomeThingAndShowModal } from "./util";

export const AppLayout = () => {
  const createModal = () => {
    handleSomeThingAndShowModal();
  };

  const deleteModal = () => {
    showModal({ component: DeleteModal });
  };

  // const updateModal = () => {
  //   showModal(MODAL_TYPES.UPDATE_MODAL);
  // };

  return (
    <>
      <Button variant={ButtonVariant.primary} onClick={createModal}>
        Create Modal
      </Button>
      <br />
      <br />
      <Button variant={ButtonVariant.primary} onClick={deleteModal}>
        Delete Modal
      </Button>
      <br />
      <br />
      {/* <Button variant={ButtonVariant.primary} onClick={updateModal}>
        Update Modal
      </Button> */}
    </>
  );
};
