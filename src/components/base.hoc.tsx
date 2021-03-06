
import React, { useState } from 'react';
import isEmpty from "lodash/isEmpty"
import Toaster from "./toaster"
import isNull from "lodash/isNull"
import { withRouter } from 'react-router';
// First we need to add a type to let us extend the incoming component.


export function withAPI<P>(WrappedComponent: React.FC<P>) {
    const FormikBase = ({ get, getList, onSubmit, create, update, match: { path }, history, ...rest }: any) => {
        const [isLoading, setIsLoading] = useState(false);
        const [isSubmitting, setIsSubmitting] = useState(false)


        const turnOnLoading = (params?: any) => {
            setIsLoading(true);
        };

        const turnOffLoading = (params?: any) => {
            setIsLoading(false);
        };
        const navigateTo = (path: any) => {
            history.replace(path);
        };

        const turnOnSubmitting = () => {
            setIsSubmitting(true);
        };

        const turnOffSubmitting = () => {
            setIsSubmitting(false);
        };


        const getItem = async (id: any) => {
            turnOnLoading();
            let res = await get(id);
            turnOffLoading();
            return res;
        };

        const getIndex = (params = {}) => {
            turnOnLoading();

            getList(params).then((res: any) => {
                turnOffLoading();
            });
        };

        const onEditItem = (item: any, activeTab = 0) => {
            const {
                item: { _id },
            } = item;
            turnOnLoading();
            get(_id).then(() => {
                turnOffLoading({ isHidePaging: false });
                navigateTo({
                    pathname: `${path}/${_id}`,
                });
            });
        };

        const handleResponse = ({ res, isSinglePage }: any) => {
            const { data = {}, meta = {} } = res;
            let { message = "" } = meta;
            let { error = "" } = data;

            if (!isEmpty(error)) {
                Toaster(error, "error");
                turnOffSubmitting();
            } else {
                Toaster(message, "success");
                turnOffSubmitting();
            }
            return {
                error, data
            }
        };

        const onSubmitItem = async (params: any) => {
            const { _id, ...rest } = params;
            debugger
            turnOnSubmitting();
            if (!isEmpty(_id) && !isNull(_id)) {
                let res = await update(_id, params);
                debugger
                return handleResponse({ res });
            } else {
                let res = await create(rest);
                debugger
                return handleResponse({ res });
            }
        };



        return (
            <WrappedComponent {...rest} isLoading={isLoading}
                isSubmitting={isSubmitting}
                navigateTo={navigateTo}
                getIndex={getIndex}
                getItem={getItem}
                onEditItem={onEditItem}
                onSubmitItem={onSubmitItem}
                turnOnLoading={turnOnLoading}
                turnOffLoading={turnOffLoading} />
        );
    };
    return withRouter(FormikBase);
}
