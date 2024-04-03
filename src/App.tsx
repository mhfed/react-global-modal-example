import "@patternfly/react-core/dist/styles/base.css";
import "./fonts.css";
import { GlobalModal } from "./components/GlobalModal";
import { GlobalModalHelper } from "./components/GlobalModal/GlobalModalHelper.tsx";
import { AppLayout } from "./AppLayout";

export default function App() {
  return (
    <GlobalModal>
      <AppLayout />
      <GlobalModalHelper />
    </GlobalModal>
  );
}
