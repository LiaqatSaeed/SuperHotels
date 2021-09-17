import * as React from 'react';
import { FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap';

export interface IAppProps {
    name: string,
    label?: string,

}

export function App(props: IAppProps) {
    return (
        <FormGroup>
            <Label for="exampleEmail">Input without validation</Label>
            <Input />
            <FormFeedback>You will not be able to see this</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
    );
}
