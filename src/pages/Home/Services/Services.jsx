import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { SlCalender } from "react-icons/sl";
import { IoCallSharp, IoLocation } from "react-icons/io5";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-20">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl font-medium mb-5">Our Services Area</h2>
                <p className="font-semibold text-slate-600 ">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>











            <button className="btn btn-outline btn-secondary px-6 mt-10 block mx-auto">More Services</button>

            <footer className="footer footer-center flex justify-center gap-x-12 mx-auto my-32 py-28  bg-black text-primary-content rounded-xl">
                <div className="flex">
                    <div className="mr-3 text-6xl text-orange-600">
                        <SlCalender />
                    </div>
                    <div className="text-left">
                        <p className="text-lg font-semibold">We are open monday-friday</p>
                        <p className="text-3xl font-bold">7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-3 text-6xl text-orange-600">
                    <IoCallSharp />
                    </div>
                    <div className="text-left">
                        <p className="text-lg font-semibold">Have a question?</p>
                        <p className="text-3xl font-bold">+2546 251 2658</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-3 text-6xl text-orange-600">
                    <IoLocation />
                    </div>
                    <div className="text-left">
                        <p className="text-lg font-semibold">Need a repair? our address</p>
                        <p className="text-3xl font-bold">Liza Street, New York</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Services;