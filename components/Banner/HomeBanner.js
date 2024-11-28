import { Content } from "@components/Content";
import { ImgSlider } from "@components/ImgSlider";
import { MotionBTTContainer } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";

export const HomeBanner = () => {
    const imageSet1 = [
        "/pitchImages/1.png",
        "/pitchImages/2.png",
        "/pitchImages/3.png",
        "/pitchImages/4.png",
        "/pitchImages/5.png",
        "/pitchImages/6.png"
    ];
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <div className="text-center">
                        <PageTitle
                            className="mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% .. inline-block text-transparent bg-clip-text"
                            type="heavy"
                        >
                            Chitosan from Silkworm Pupae
                        </PageTitle>
                    </div>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            At ecogenie biotech, located in the vibrant city of
                            Bengaluru, India, we produce high-quality chitosan
                            derived from silkworm pupae, along with valuable
                            byproducts such as pupal oil and protein
                            hydrolysates. Our chitosan is recognized for its
                            versatile applications in wound care, skincare,
                            bio-packaging, dietary supplements, food
                            preservation, and pharmaceuticals.
                        </p>
                    </Content>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image pt-5">
                        <ImgSlider images={imageSet1} />
                        {/* <Image
                            src="/comparision.png"
                            width={824}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto"
                        /> */}
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
