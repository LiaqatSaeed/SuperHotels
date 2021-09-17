import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
