import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Expert Support",
        content:
            "Our team of immigration specialists and registered nurses understand the unique challenges faced by international nurses.",
        align: "right",
        image: "/features1.jpg"
    },
    {
        id: uuid(),
        title: "Streamlined Process",
        content:
            "We guide you step-by-step, ensuring a smooth and efficient journey towards your Canadian RN career.",
        align: "left",
        image: "/features2.jpg"
    },
    {
        id: uuid(),
        title: "Personalized Mentorship",
        content:
            "We understand each of us are different, hence we tailor our services to your individual needs and aspirations.",
        align: "right",
        image: "/features3.jpg"
    },
    {
        id: uuid(),
        title: "Success-Oriented",
        content:
            "Our goal is to see you work as Canadian RN! We provide ongoing support and guidance throughout your transition.",
        align: "left",
        image: "/features4.jpg"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
