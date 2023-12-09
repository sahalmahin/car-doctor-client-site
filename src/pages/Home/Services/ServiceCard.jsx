import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl font-semibold text-orange-500'>{price}</p>
                <div className="card-actions">
                    <Link to={`/bookService/${_id}`}>
                        <button className="btn btn-primary font-bold">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;