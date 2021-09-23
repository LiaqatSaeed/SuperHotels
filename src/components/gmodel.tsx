import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalProps } from 'reactstrap';

export interface IGModelProps {
    title: string;
    isOpen: boolean,
    children: React.ReactNode,
    testId?: string,
    toggle: (item: any) => void
}

export function GModel({ isOpen, title, testId, children, toggle, backdrop }: IGModelProps & ModalProps) {
    return (
        <Modal data-testid={testId} backdrop={backdrop} isOpen={isOpen} toggle={toggle} >
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
        </Modal>
    );
}
