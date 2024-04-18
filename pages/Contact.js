import { Layout } from "@components/Layout";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PageTitle } from "@components/Title";
import { SectionContainer } from "@components/Section";
import { motion } from "framer-motion";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
export default function Contact() {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [lastFormData, setLastFormData] = useState({});

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = {
            user_name: form.current.user_name.value,
            user_phoneNumber: form.current.user_phoneNumber.value,
            user_email: form.current.user_email.value,
            message: form.current.message.value
        };

        if (JSON.stringify(formData) === JSON.stringify(lastFormData)) {
            alert("Message has already been sent");
            return;
        }

        emailjs
            .sendForm(
                "service_x0p9nic",
                "template_ljbive4",
                form.current,
                "ZCbeEpQyku_3xUQEj"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setMessageSent(true);
                    setTimeout(() => {
                        setMessageSent(false);
                    }, 2000);
                    setLastFormData(formData);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <Layout className="">
            <div className="main-wrapper relative z-10 pb-20 pt-20 bg-[#F3F5F8]">
                <CardGroup className="grid  gap-8 grid-cols-1 max-w-6xl mx-auto mt-12 md:grid-cols-2">
                    <Card className="col-span-1 text-primary-900">
                        <CardBody className="w-full  p-2">
                            <div className="flex justify-center sm:justify-start sm:py-3">
                                <div className="flex flex-col">
                                    <p className="text-green-800 font-bold px-2 sm:text-left text-1xl  ">
                                        Registered office
                                    </p>
                                    <h6 className="sm:text-left text-primary-900 p-2">
                                        {" "}
                                        No. 3, Manjunatha complex,
                                        <br /> 1st floor, SSA Road, 4th Main
                                        Road, <br />
                                        Hebbal, Bengaluru - 560024
                                        <br /> Karnataka, India
                                    </h6>
                                </div>
                            </div>
                            <div className="flex justify-center sm:justify-start sm:py-3">
                                <div className="flex flex-col">
                                    <p className="text-green-800 font-bold px-2 sm:text-left text-1xl  ">
                                        Mail us
                                    </p>
                                    <h6 className="sm:text-left p-2 text-primary-900">
                                        {" "}
                                        info@ecogeniebiotech.com
                                    </h6>
                                </div>
                            </div>
                            <div className="flex justify-center sm:justify-start sm:py-3">
                                <div className="flex flex-col">
                                    <p className="text-green-800 font-bold px-2 sm:text-left text-1xl  ">
                                        For careers and internships, send us
                                        resume
                                    </p>
                                    <h6 className="sm:text-left p-2 text-primary-900">
                                        {" "}
                                        info@ecogeniebiotech.com
                                    </h6>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-green-800 font-bold px-2 sm:text-left text-1xl ">
                                    Call us
                                </p>
                                <h6 className="sm:text-left p-2 text-primary-900">
                                    {" "}
                                    +917676733634
                                </h6>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="col-span-1 text-primary-900">
                        <CardBody className="w-full  p-2">
                            <h1 className="text-2xl font-bold mb-4 sm:text-left text-green-800">
                                Send us message
                            </h1>
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="space-y-4"
                            >
                                <div className="border rounded-md">
                                    <input
                                        required
                                        name="user_name"
                                        className="p-3 flex w-full rounded-md text-black"
                                        type="text"
                                        placeholder="Enter your Name"
                                    />
                                </div>
                                <div className="border rounded-md">
                                    <input
                                        required
                                        name="user_phoneNumber"
                                        className="p-3 flex w-full rounded-md text-black"
                                        type="number"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className="border rounded-md">
                                    <input
                                        name="user_email"
                                        className="p-3 flex w-full rounded-md text-black"
                                        type="email"
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        required
                                        className="w-full border p-2 rounded-md text-black"
                                        rows="6"
                                        placeholder="Send us a message"
                                        name="message"
                                    ></textarea>
                                </div>
                                <div className="flex justify-center sm:justify-start">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.2
                                        }}
                                        onHoverStart={(e) => {}}
                                        onHoverEnd={(e) => {}}
                                        whileTap={{
                                            scale: 0.9
                                        }}
                                        className={`bg-green-900 text-white py-2 px-4 rounded-md font-medium ${
                                            messageSent ? "animate-pulse" : ""
                                        }`}
                                        type="submit"
                                        value="Send"
                                        disabled={messageSent}
                                    >
                                        {messageSent
                                            ? "Message Sent"
                                            : "Send Message"}
                                    </motion.button>
                                </div>
                            </form>
                            {messageSent && (
                                <div>
                                    <div className="bg-green-800 text-white font-bold rounded-md px-4 py-2">
                                        Thank you, we will get back to you soon.
                                    </div>
                                </div>
                            )}
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        </Layout>
    );
}
