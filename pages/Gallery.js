import { Layout } from "@components/Layout";
import { SectionContainer } from "@components/Section";
import { MotionBTTContainer } from "@components/Motion";
import { PageTitle } from "@components/Title";
import { useState } from "react";

export default function Gallery() {
    // Array of image paths
    const images = [
        "/galleryData/G1.jpeg",
        "/galleryData/G2.jpeg",
        "/galleryData/G3.jpeg",
        "/galleryData/G4.jpeg",
        "/galleryData/G5.jpeg"
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    // Function to close the modal
    const closeModal = () => setSelectedImage(null);

    return (
        <Layout>
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20">
                <SectionContainer className="page-banner--container py-16">
                    <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                        <MotionBTTContainer
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <div className="text-center">
                                <PageTitle
                                    className="text-center mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% inline-block text-transparent bg-clip-text"
                                    type="heavy"
                                >
                                    Awards and Recognitions
                                </PageTitle>
                            </div>
                        </MotionBTTContainer>

                        <MotionBTTContainer
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <SectionContainer className="feature-tabs">
                                {/* Gallery Grid */}
                                <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-12 max-w-4xl mx-auto">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="cursor-pointer relative"
                                            onClick={() =>
                                                setSelectedImage(image)
                                            }
                                        >
                                            <img
                                                src={image}
                                                alt={`Gallery image ${
                                                    index + 1
                                                }`}
                                                className="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </SectionContainer>
                        </MotionBTTContainer>
                    </SectionContainer>
                </SectionContainer>

                {/* Image Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                        onClick={closeModal}
                    >
                        <div className="relative">
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="max-w-full max-h-screen rounded-lg"
                            />
                            <button
                                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 focus:outline-none"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
