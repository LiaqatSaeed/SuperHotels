import * as React from 'react';
import Body from './body';
import { initialValues } from './initial.values';
import schema from './schema.yup';

export interface IHotelFormProps {
}

export function HotelForm(props: IHotelFormProps) {
  return (
    <Body initialValues={initialValues} onSubmit={(values: any) => {

    }} validationSchema={schema} />
  );
}
