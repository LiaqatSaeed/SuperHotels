import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export interface IGModelProps {
    title: string;
    isOpen: boolean,
    children: React.ReactNode,
    toggle: (item: any) => void
}

export function GModel({ isOpen, title, children, toggle }: IGModelProps) {
    return (
        <Modal isOpen={isOpen} toggle={toggle} >
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
        </Modal>
    );
}
