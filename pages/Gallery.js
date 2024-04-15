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
export default function Gallery() {
    // Example blog posts data

    return (
        <Layout className="">
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                <SectionContainer className="page-banner--container py-16">
                    <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                        <MotionBTTContainer
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <div className="text-center">
                                <PageTitle
                                    className="text-center mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% .. inline-block text-transparent bg-clip-text"
                                    type="heavy"
                                >
                                    Welcome to ecoGenie Biotech
                                </PageTitle>
                            </div>
                        </MotionBTTContainer>
                        {/* Appear Third */}
                        <MotionBTTContainer
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Content
                                className="text-left text-lg"
                                alignment="center"
                            >
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
                                                    Awarded ELEVATE 2023 grants
                                                    from startup karnataka
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
