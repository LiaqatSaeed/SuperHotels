import * as React from "react";
import HotelCard, { IHotelProps } from "../../components/hotel.card";
import { Row, Col, Button } from "reactstrap";
import map from "lodash/map";

export interface IHotelListProps {
  list?: [IHotelProps];
}
const data = [
  {
    name: "ASFASF",
    location: "asfasfaf",
  },
  {
    name: "ASFASF",
    location: "asfasfaf",
  },
  {
    name: "ASFASF",
    location: "asfasfaf",
  },
  {
    name: "ASFASF",
    location: "asfasfaf",
  },
  {
    name: "ASFASF",
    location: "asfasfaf",
  },
  {
    name: "ASFASF",
    location: "asfasfaf",
  },
];

export function Hotels(props: IHotelListProps) {
  return (
    <div className="mt-5">
      <h2 className="text-start">Most Popular Hotels <Button size="sm" className="float-end">Add Hotel</Button></h2>
      <Row>
        {map(data, ({ name, location }: IHotelProps) => (
          <Col md={4} lg={3}>
            <HotelCard name={name} location={location} />
          </Col>
        ))}
      </Row>
    </div >
  );
}
