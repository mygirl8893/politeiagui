import React from "react";
import * as modalTypes from "./modalTypes";
import ConfirmAction from "./contents/ConfirmAction";
import ConfirmActionWithReason from "./contents/ConfirmActionWithReason";
import Login from "./contents/Login";
import OnBoard from "./contents/OnBoard";
import PaywallModal from "./contents/PaywallModal";
import ProposalCreditsModal from "./contents/ProposalCreditsModal";
import { withRouter } from "react-router-dom";

const mapModalTypeToContent = {
  [modalTypes.CONFIRM_ACTION]: ({ modalData }) => <ConfirmAction me={modalData} />,
  [modalTypes.CONFIRM_ACTION_WITH_REASON]: ({ modalData }) => <ConfirmActionWithReason me={modalData} />,
  [modalTypes.LOGIN]: ({ location, modalData }) => <Login  me={modalData} pathname={location.pathname} />,
  [modalTypes.ONBOARD]: () => <OnBoard />,
  [modalTypes.PAYWALL_MODAL]: () => <PaywallModal />,
  [modalTypes.PROPOSAL_CREDITS_MODAL]: () => <ProposalCreditsModal />
};

const ModalContent = ({ modalData, location }) => {
  const mappedModal = mapModalTypeToContent[modalData.type];
  return mappedModal ? mappedModal({ modalData, location }) : console.log("modal not mapped");
};

export default withRouter(ModalContent);
