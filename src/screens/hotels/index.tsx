import React, { useState, useEffect } from "react";
import HotelCard, { IHotelProps } from "../../components/hotel.card";
import { Row, Col, Button } from "reactstrap";
import map from "lodash/map";
import { useAuth } from "../../context/auth.context";
import { withAPI } from "../../components/base.hoc";
import { GModel } from "../../components/gmodel";
import HotelForm from "./form/body";
import { initialValues } from './form/initial.values';
import schema from './form/schema.yup';
import isEmpty from 'lodash/isEmpty';

import { connect } from 'react-redux';
import {
  get,
  getList,
  create,
  update,
  removeSelected,
} from "../../state/hotels/Epic";

import {
  selectItem,
  selectList
} from "../../state/hotels/Selectors";

export interface IHotelListProps {
  list?: [IHotelProps];
  item?: {}
  onSubmitItem?: any
  getIndex?: any
  getItem?: any
}


const Hotels = ({ getIndex, getItem, item, list, onSubmitItem }: IHotelListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    getIndex()
  }, [])

  const handleEdit = (_id: any) => {
    debugger
    getItem(_id).then(() => {
      setIsOpen(true)
    })
  }


  const { isLoggedIn } = useAuth()
  return (
    <div className="mt-5">
      <h2 className="text-start">Most Popular Hotels {isLoggedIn && <Button size="sm" className="float-end" onClick={() => setIsOpen(true)}>Add Hotel</Button>} </h2>
      <Row>
        {map(list, ({ _id, name, location }: IHotelProps) => (
          <Col md={4} lg={3}>
            <HotelCard _id={_id} onEdit={() => handleEdit(_id)} name={name} location={location} />
          </Col>
        ))}
      </Row>
      <GModel backdrop="static" title={`${isEmpty(item) ? "Create" : "Update"} Your Hotel`} isOpen={isOpen} toggle={() => setIsOpen(false)}>
        <HotelForm initialValues={{ ...initialValues, ...item }} onSubmit={(values: any) => {
          onSubmitItem(values).then(({ error }: any) => {
            debugger;
            if (isEmpty(error)) {
              setIsOpen(false)
            }

          })
        }} validationSchema={schema} />
      </GModel>
    </div>
  );
}


const mapStateToProps = (state: any) => {
  return {
    item: selectItem(state),
    list: selectList(state),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  get: (params: any) => dispatch(get(params)),
  getList: (params: any) => dispatch(getList(params)),
  create: (params: any) => dispatch(create(params)),
  update: (id: any, params: any) => dispatch(update(id, params)),
  remove: (id: any) => dispatch(removeSelected(id)),
});

export default connect(mapStateToProps,
  mapDispatchToProps)(withAPI(Hotels));
