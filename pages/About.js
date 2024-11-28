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
                            <div className="text-center">
                                <PageTitle
                                    className="text-center mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% .. inline-block text-transparent bg-clip-text"
                                    type="heavy"
                                >
                                    About us
                                </PageTitle>
                            </div>
                        </MotionBTTContainer>
                        {/* Appear Third */}
                        <MotionBTTContainer
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Content
                                className="text-left !text-lg"
                                alignment="center"
                            >
                                <p>
                                    Ecogenie Biotech is a Bengaluru based
                                    company dedicated to transforming silkworm
                                    pupae waste into valuable, sustainable
                                    biomaterials. With a focus on chitosan,
                                    pupal oil, and pupal protein hydrolysates,
                                    we harness the potential of waste silkworm
                                    pupae to produce high-quality, eco-friendly
                                    products.
                                </p>
                                <p>
                                    Our company is committed to supporting
                                    farmers with innovative technologies that
                                    promote sustainability and contribute to the
                                    circular economy.
                                </p>
                                <p>
                                    We understand that sustainability is a
                                    collective responsibility, shared by
                                    individuals and organizations alike.
                                    That&apos;s why we&apos;re committed to
                                    working hand in hand with our customers and
                                    partners to foster positive change.
                                </p>
                                <p>
                                    Our product line features a wide range of
                                    chitosan-based applications across various
                                    industries, including healthcare, food
                                    preservation, agriculture, and cosmetics. We
                                    specialize in developing wound care
                                    dressings and related healthcare products
                                    that utilize the unique properties of
                                    chitosan for enhanced healing and skin
                                    protection.
                                </p>
                                <p>
                                    By combining cutting-edge technology with a
                                    deep commitment to sustainability, Ecogenie
                                    Biotech is positioning itself as a leader in
                                    the chitosan market, with a mission to
                                    create a positive environmental impact while
                                    delivering high-quality, innovative products
                                    for diverse industries.
                                </p>
                            </Content>
                        </MotionBTTContainer>
                    </SectionContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
