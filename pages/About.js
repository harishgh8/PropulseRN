import { Layout } from "@components/Layout";
import { SectionContainer } from "@components/Section";
import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";

import Link from "next/link";
import Image from "next/image";
import { MotionBTTContainer } from "@components/Motion";
import { PageTitle } from "@components/Title";
import { Content } from "@components/Content";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
export default function About() {
    // Example blog posts data

    return (
        <Layout className="">
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                <SectionContainer className="page-banner--container py-16">
                    <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                        <MotionBTTContainer
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <PageTitle
                                className="text-center mx-auto"
                                type="heavy"
                            >
                                Welcome to ecoGenie Biotech
                            </PageTitle>
                        </MotionBTTContainer>
                        {/* Appear Third */}
                        <MotionBTTContainer
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Content
                                className="text-left text-lg"
                                alignment="center"
                            >
                                <p>
                                    Welcome to ecoGenie Biotech, where
                                    innovation meets sustainability in the field
                                    of biotechnology for agriculture and
                                    post-harvest crop management. Based in the
                                    vibrant city of Bengaluru, India, we are
                                    dedicated to revolutionizing the way we
                                    interact with the environment through our
                                    eco-friendly solutions.
                                </p>
                                <p>
                                    At ecoGenie Biotech, our mission is clear:
                                    to pave the way for a better future for our
                                    planet by offering products that minimize
                                    harm to the environment. Our motto,
                                    "Innovating greener tomorrow," encapsulates
                                    our dedication to sustainability and the
                                    collaborative effort required to achieve it.
                                </p>
                                <p>
                                    We understand that sustainability is a
                                    collective responsibility, shared by
                                    individuals and organizations alike. That's
                                    why we're committed to working hand in hand
                                    with our customers and partners to foster
                                    positive change.
                                </p>
                                <p>
                                    Central to our ethos is the belief that
                                    every choice we make matters. From the
                                    materials we source to our manufacturing
                                    processes, we prioritize sustainability
                                    every step of the way. Our products are
                                    thoughtfully designed to be reusable,
                                    recyclable, and compostable, ensuring they
                                    leave a minimal footprint on the planet.
                                </p>
                                <p>
                                    By harnessing the power of biotechnology, we
                                    aim to create innovative solutions that not
                                    only enhance agricultural productivity but
                                    also protect our natural resources for
                                    future generations. Together, let's embark
                                    on a journey towards a greener, more
                                    sustainable future. Join us at ecoGenie
                                    Biotech, where we're turning vision into
                                    reality, one eco-friendly solution at a
                                    time.
                                </p>
                                <SectionContainer className="feature-tabs">
                                    <PageTitle
                                        className="text-center mx-auto !text-4xl"
                                        type="heavy"
                                    >
                                        Awards and Recognitions
                                    </PageTitle>
                                    <CardGroup className="grid  gap-8 grid-cols-1 max-w-2xl mx-auto mt-12 md:grid-cols-2">
                                        <Card className="col-span-1 text-primary-900">
                                            <CardBody className="w-full  p-2">
                                                <CardImage
                                                    src="/startupindia.svg"
                                                    alt="Customizable Layouts image used."
                                                />
                                                {/* <CardHeader className="!text-black !text-lg !font-bold">
                                                    Startup India
                                                </CardHeader> */}
                                                <p className="text-sm">
                                                    Recognized from startup
                                                    india
                                                </p>
                                            </CardBody>
                                        </Card>
                                        <Card className="col-span-1 text-primary-900">
                                            <CardBody className="w-full  p-2">
                                                <CardImage
                                                    src="/startupkar.svg"
                                                    alt="Customizable Layouts image used."
                                                />
                                                {/* <CardHeader className="!text-black !text-lg !font-bold">
                                                    Startup India
                                                </CardHeader> */}
                                                <p className="text-sm">
                                                    Recognized from startup
                                                    Karnataka
                                                </p>
                                            </CardBody>
                                        </Card>
                                        <Card className="col-span-1 text-primary-900">
                                            <CardBody className="w-full  p-2">
                                                <CardImage
                                                    src="/wadwani.svg"
                                                    alt="Customizable Layouts image used."
                                                />
                                                {/* <CardHeader className="!text-black !text-lg !font-bold">
                                                    Startup India
                                                </CardHeader> */}
                                                <p className="text-sm">
                                                    Mentorship from Wadhwani
                                                    Foundation
                                                </p>
                                            </CardBody>
                                        </Card>
                                        <Card className="col-span-1 text-primary-900">
                                            <CardBody className="w-full  p-2">
                                                <CardImage
                                                    src="/elevate.svg"
                                                    alt="Customizable Layouts image used."
                                                />
                                                {/* <CardHeader className="!text-black !text-lg !font-bold">
                                                    Startup India
                                                </CardHeader> */}
                                                <p className="text-sm">
                                                    Mentorship from Wadhwani
                                                    Foundation
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </CardGroup>
                                </SectionContainer>
                            </Content>
                        </MotionBTTContainer>
                    </SectionContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
