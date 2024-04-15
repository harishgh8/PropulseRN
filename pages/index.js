import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import { accordionData, faqData } from "@components/Accordion/accordionData";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import ScrollToTopBtn from "@components/ScrollToTopBtn";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="ecogenie biotech"
                description="Innovating greener tomorrow."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Why choose us */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <PageTitle
                                className="text-center mx-auto lg:text-green-800"
                                type="default"
                            >
                                Why Chitosan?{" "}
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Chitosan, a natural biopolymer derived from
                                    chitin, has emerged as a promising material
                                    for sustainable agriculture and healthcare
                                    applications.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Testimonials */}
                    {/* <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                This is what our successful achievers say about
                                us
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer> */}
                    {/* Accordions */}
                    {/* <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some burning questions about Next Gen NCLEX?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion data={faqData} />
                        </SectionContainer>
                    </MotionBTTContainer> */}
                </SectionContainer>
                {/* <ScrollToTopBtn /> */}
            </div>
        </Layout>
    );
}
