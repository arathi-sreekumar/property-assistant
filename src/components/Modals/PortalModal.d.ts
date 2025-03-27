import React from "react";
interface Props {
    children: React.ReactNode;
    wrapperId: string;
}
declare const PortalModal: ({ children, wrapperId }: Props) => React.ReactPortal | null;
export default PortalModal;
