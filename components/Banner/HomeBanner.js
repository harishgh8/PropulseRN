import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <div className="text-center">
                        <PageTitle
                            className="mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% .. inline-block text-transparent bg-clip-text"
                            type="heavy"
                        >
                            Pioneering Sustainable Agriculture with Chitosan
                            Innovations
                        </PageTitle>
                    </div>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            At ecogenie biotech, located in the vibrant city of
                            Bengaluru, India, we are at the forefront of the
                            biotechnology revolution, offering solutions for
                            sustainable agriculture, soil management, and
                            post-harvest crop care. With a focus on
                            chitosan-based formulations, we are committed to
                            driving positive change in the agricultural industry
                            and promoting environmental stewardship.
                        </p>
                    </Content>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image pt-5">
                        <Image
                            src="/chitosan-banner.png"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto"
                        />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
