import React from "react";
import { Link } from "react-router-dom";
import hero from "./hero.png";

interface Props {}

const HomePageComponent = (props: Props) => {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row">
                <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52">
                    <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                        VideoCollab
                    </h1>
                    <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
                        Проведи время со своими друзьями
                    </p>
                    <div className="mx-auto lg:mx-0">
                        <Link
                            to="/register"
                            className="py-5 px-10 text-2xl font-bold text-white bg-lightGreen rounded lg:py-4 hover:opacity-70"
                        >
                            Поехали!
                        </Link>
                    </div>
                </div>
                <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
                    <img src={hero} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HomePageComponent;
