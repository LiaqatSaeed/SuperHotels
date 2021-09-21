import * as React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { useAuth } from "../context/auth.context";
import colors from "../theme/colors.json";


export interface IHotelProps {
    _id: string,
    name: string;
    createdBy: string;
    image: string;
    updatedAt: string
    location: string;
    onEdit?: () => any;
    onDelete?: () => any
}

const HotelCard = ({ name, _id: cardId, createdBy, location, image, onEdit, onDelete }: IHotelProps) => {
    const { isLoggedIn, context } = useAuth();

    const renderAction = () => {

        let permitActionTo = context && ((context._id === createdBy) || context.role === "admin")
        return permitActionTo && (
            <>
                <span className="icon-container cursor-pointer" onClick={onEdit}>
                    <svg
                        viewBox="0 0 512.001 512.001"
                        fill="#0d6efd"
                    >
                        <g>
                            <path d="M496.063,62.299l-46.396-46.4c-21.2-21.199-55.69-21.198-76.888,0l-18.16,18.161l123.284,123.294l18.16-18.161    C517.311,117.944,517.314,83.55,496.063,62.299z" />
                        </g>
                        <g>
                            <path d="M22.012,376.747L0.251,494.268c-0.899,4.857,0.649,9.846,4.142,13.339c3.497,3.497,8.487,5.042,13.338,4.143    l117.512-21.763L22.012,376.747z" />
                        </g>
                        <g>
                            <polygon points="333.407,55.274 38.198,350.506 161.482,473.799 456.691,178.568   " />
                        </g>
                    </svg>
                </span>
                <span className="icon-container icon-right cursor-pointer" onClick={onDelete}>
                    <svg
                        viewBox="0 0 512 512"
                        fill={colors.errorRed}
                    >
                        <g>
                            <path d="m442.154 145c10.585 0 17.924-10.701 13.955-20.514-14.093-34.841-48.275-59.486-88.109-59.486h-18.414c-6.867-36.273-38.67-65-77.586-65h-32c-38.891 0-70.715 28.708-77.586 65h-18.414c-39.834 0-74.016 24.645-88.109 59.486-3.969 9.813 3.37 20.514 13.955 20.514zm-202.154-115h32c21.9 0 40.49 14.734 46.748 35h-125.496c6.258-20.266 24.848-35 46.748-35z" />
                            <path d="m111.053 470.196c1.669 23.442 21.386 41.804 44.886 41.804h200.121c23.5 0 43.217-18.362 44.886-41.804l21.023-295.196h-331.938zm185.966-214.945c.414-8.274 7.469-14.655 15.73-14.232 8.274.414 14.646 7.457 14.232 15.73l-8 160c-.401 8.019-7.029 14.251-14.969 14.251-8.637 0-15.42-7.223-14.994-15.749zm-97.768-14.232c8.263-.415 15.317 5.959 15.73 14.232l8 160c.426 8.53-6.362 15.749-14.994 15.749-7.94 0-14.568-6.232-14.969-14.251l-8-160c-.413-8.273 5.959-15.316 14.233-15.73z" />
                        </g>
                    </svg>
                </span>
            </>
        )

    }

    return (
        <Card key={cardId} className="mb-5">
            <CardImg
                top
                className="img-thumbnail h-210"
                width="100%"
                src={image || "https://th.bing.com/th/id/R.ff3d52e5a99620e0ff91217a39149a42?rik=bw4icBHGHVH%2fyg&pid=ImgRaw&r=0"}
                loading="lazy"
                alt={name}
            />
            <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardText>{location}</CardText>
                <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
            </CardBody>
            {
                isLoggedIn && renderAction()
            }

        </Card>
    );
};

export default HotelCard;
