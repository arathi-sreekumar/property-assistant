interface Props {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}
declare const Modal: ({ children, isOpen, onClose, title }: Props) => import("react/jsx-runtime").JSX.Element;
export default Modal;
