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
                title="Propulse Next Gen Learning: Launch Your RN Career in Canada.🚀"
                description="Propelling aspiring nurses to success through comprehensive and accelerated NCLEX preparation."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Our Services</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                What We Offer:{" "}
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    We offer a complete RN to RN transition
                                    package. We'll guide you through the entire
                                    process, from navigating immigration
                                    applications and paperwork to ensuring your
                                    application reaches the appropriate
                                    regulatory bodies in Canada. We'll also
                                    provide mentorship to help you ace the
                                    NCLEX-RN exam and connect you with top
                                    healthcare employers seeking qualified
                                    nurses. Let us take the stress out of your
                                    Canadian RN journey!
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/liveLesson.jpg"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Regulatory Body Applications
                                        </CardHeader>
                                        <p>
                                            We guide you through the application
                                            process for various regulatory
                                            bodies across Canada, such as the
                                            Canadian Nurses Association (CNA)
                                            and the National Nursing Assessment
                                            Service (NNAS).
                                        </p>
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Immigration Guidance
                                        </CardHeader>
                                        <p>
                                            We simplify the immigration process,
                                            assisting with applications,
                                            paperwork, and navigating visa
                                            requirements, including those for
                                            Express Entry and Provincial Nominee
                                            Programs.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features4.jpg"
                                            alt="Progress Tracking image used."
                                        />

                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Exam Mentorship
                                        </CardHeader>
                                        <p>
                                            Our experienced team provides
                                            personalized mentorship and
                                            resources to help you excel on the
                                            NCLEX-RN exam.
                                        </p>
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Job Placement Support
                                        </CardHeader>
                                        <p>
                                            We leverage our extensive network to
                                            connect you with top healthcare
                                            employers seeking qualified nurses.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Why choose us */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Our Services</BadgeMessage>
                            </BadgeGroup>

                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Why Choose us?{" "}
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Our commitment : Indian RN to Canadian RN.
                                    We're your one-stop shop for a successful RN
                                    career in Canada. Our team of immigration
                                    specialists and registered nurses provides
                                    expert guidance, streamlining the entire
                                    process. Our goal is your success, and we'll
                                    be there every step of the way to propel
                                    your nursing career forward.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Testimonials */}
                    <MotionBTTContainer
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
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
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
                    </MotionBTTContainer>
                </SectionContainer>
                {/* <ScrollToTopBtn /> */}
            </div>
        </Layout>
    );
}
