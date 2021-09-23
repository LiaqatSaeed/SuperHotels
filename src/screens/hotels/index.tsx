import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import { withAPI } from "../../components/base.hoc";
import { GModel } from "../../components/gmodel";
import HotelCard, { IHotelProps } from "../../components/hotel.card";
import { useAuth } from "../../context/auth.context";
import {
  create,
  get,
  getList,
  removeSelected,
  update,
} from "../../state/hotels/Epic";
import { selectItem, selectList } from "../../state/hotels/Selectors";
import HotelForm from "./form/body";
import { initialValues } from "./form/initial.values";
import schema from "./form/schema.yup";
import { useParams } from "react-router";


export interface IHotelListProps {
  list?: [IHotelProps];
  item?: {};
  onSubmitItem?: any;
  getIndex?: any;
  getItem?: any;
}

const Hotels = ({
  getIndex,
  getItem,
  item,
  list,
  onSubmitItem,
}: IHotelListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  const params = useParams();
  console.log(params, "asfasf");

  useEffect(() => {
    getIndex();
    // eslint-disable-next-line
  }, []);

  const handleEdit = (_id: any) => {
    setActiveId(_id);
    getItem(_id).then(() => {
      setIsOpen(true);
    });
  };

  const { isLoggedIn } = useAuth();
  return (
    <div className="mt-5">
      <h2 className="text-start">
        Most Popular Hotels
        {isLoggedIn && (
          <Button
            size="sm"
            className="float-end"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Add Hotel
          </Button>
        )}
      </h2>
      <Row>
        {map(
          list,
          ({
            _id,
            name,
            location,
            image,
            updatedAt,
            createdBy,
          }: IHotelProps) => (
            <Col md={4} lg={3}>
              <HotelCard
                _id={_id}
                name={name}
                createdBy={createdBy}
                location={location}
                image={image}
                updatedAt={updatedAt}
                onEdit={() => handleEdit(_id)}
              />
            </Col>
          )
        )}
      </Row>
      <GModel
        backdrop="static"
        title={`${isEmpty(activeId) ? "Create" : "Update"} Your Hotel`}
        isOpen={isOpen}
        toggle={() => {
          setActiveId("")
          setIsOpen(false)

        }}
      >
        <HotelForm
          initialValues={isEmpty(activeId) ? initialValues : item}
          onSubmit={(values: any) => {
            onSubmitItem(values).then(({ error }: any) => {
              if (isEmpty(error)) {
                setIsOpen(false);
              }
            });
          }}
          validationSchema={schema}
        />
      </GModel>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(withAPI(Hotels));
