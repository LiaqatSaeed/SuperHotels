import * as React from 'react';
import {
    Card, CardBody, CardImg, CardText, CardTitle
} from 'reactstrap';

export interface IHotelProps {
    name: string,
    location: string
}

const HotelCard = ({ name, location }: IHotelProps) => {
    return (
        <Card className="mb-5">
            <CardImg top className="img-thumbnail" width="100%" src="https://th.bing.com/th/id/R.ff3d52e5a99620e0ff91217a39149a42?rik=bw4icBHGHVH%2fyg&pid=ImgRaw&r=0" loading="lazy" alt={name} />
            <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardText>{location}</CardText>
                <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default HotelCard;
