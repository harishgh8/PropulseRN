import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

// const ContentImageData = [
//     {
//         id: uuid(),
//         title: "Enhance plant growth and yield by 10-30% in various vegetable and medicinal crops.",
//         content:
//             " Chitosan does this by stimulating the production of plant growth hormones, such as auxins and cytokinins, which promote cell division and elongation, leading to improved plant development and productivity",
//         align: "right",
//         image: "/1.png"
//     },
//     {
//         id: uuid(),
//         title: "Improving Stress Tolerance",
//         content:
//             "Chitosan has been shown to enhance plant tolerance and resistance to both biotic (pests, diseases) and abiotic (drought, salinity) stresses. In a study on rice plants, chitosan treatment was found to reduce the incidence of fungal diseases by up to 40%, likely due to its antimicrobial properties and ability to activate the plant's defense mechanisms. Additionally, chitosan has been observed to improve drought tolerance in plants by enhancing water use efficiency and antioxidant activity, leading to reduced crop losses under water-limited conditions.",
//         align: "left",
//         image: "/3.png"
//     },
//     {
//         id: uuid(),
//         title: "Soil remediation",
//         content:
//             "Chitosan's remarkable ability to remove heavy metals and organic pollutants from contaminated soils is a significant aspect of its sustainable agriculture applications. Studies have shown that chitosan-based materials can effectively remediate polluted soils by adsorbing and immobilizing up to 90% of heavy metal contaminants and a wide range of organic pollutants. The cationic nature of chitosan allows it to form strong electrostatic interactions with these negatively charged compounds, effectively trapping them and preventing their further dispersal in the environment. By incorporating chitosan-based amendments or coatings into the soil, farmers and land managers can significantly reduce the bioavailability and mobility of these harmful contaminants, thereby protecting the health of the soil ecosystem and the crops grown in it.",
//         align: "right",
//         image: "/4.png"
//     },
//     {
//         id: uuid(),
//         title: "Promoting Beneficial Soil Microorganisms and Nutrient Uptake",
//         content:
//             "Chitosan has the ability to selectively promote the growth of beneficial soil microorganisms, such as plant growth-promoting rhizobacteria and mycorrhizal fungi. These microorganisms can help improve nutrient availability and uptake by the plants, leading to a reduction in the need for synthetic fertilizers by up to 25%. Chitosan's cationic nature also allows it to bind to and immobilize heavy metals and organic pollutants in the soil, helping to remediate contaminated areas.",
//         align: "left",
//         image: "/5.png"
//     },
//     {
//         id: uuid(),
//         title: "Extending Shelf-life of Harvested Produce",
//         content:
//             "Chitosan-based coatings and treatments have been found to extend the shelf-life of various harvested fruits and vegetables by up to 40%. This is achieved through the antimicrobial and film-forming properties of chitosan, which can create a protective barrier against microbial spoilage and reduce moisture loss, thereby delaying the onset of senescence and maintaining the quality of the produce for longer periods.",
//         align: "right",
//         image: "/2.png"
//     },
//     {
//         id: uuid(),
//         title: "Promote antimicrobial activity",
//         content:
//             " chitosan nanoparticles have demonstrated the ability to inhibit the growth of foodborne pathogens like E. coli and Salmonella by 70-90%. This potent antimicrobial activity is attributed to the unique cationic nature of chitosan, which allows it to disrupt the cell membrane and interfere with the metabolic processes of the microorganisms. The use of chitosan nanoparticles as antimicrobial agents holds great promise in various applications, such as food preservation and the development of antimicrobial coatings and surfaces.",
//         align: "left",
//         image: "/6.png"
//     },
//     {
//         id: uuid(),
//         title: "Water Purification",
//         content:
//             "Chitosan hydrogels and membranes have proven to be highly effective in removing up to 95% of pollutants, such as dyes, antibiotics, and heavy metals, from contaminated water. This remarkable performance is attributed to chitosan's unique properties, including its cationic nature and high adsorption capacity. By leveraging these characteristics, chitosan-based water treatment solutions can efficiently capture and immobilize a wide range of water pollutants, contributing to the development of sustainable and eco-friendly water purification systems.",
//         align: "right",
//         image: "/7.png"
//     },
//     {
//         id: uuid(),
//         title: "Wound Healing",
//         content:
//             "Chitosan-based wound dressings and scaffolds have demonstrated an 80-90% improvement in wound healing compared to conventional treatments. Chitosan's biocompatibility, antimicrobial properties, and ability to stimulate the production of collagen and other extracellular matrix components make it an ideal material for wound management. The use of chitosan-based wound care products can accelerate the healing process, reduce the risk of infection, and improve patient outcomes, making it a valuable tool in the healthcare sector.",
//         align: "left",
//         image: "/6.png"
//     }
// ];

const ContentImageData = [
    {
        id: uuid(),
        title: "Enhance plant growth and yield by 10-30% in various vegetable and medicinal crops.",
        content:
            " Chitosan does this by stimulating the production of plant growth hormones, such as auxins and cytokinins, which promote cell division and elongation, leading to improved plant development and productivity",
        align: "right",
        image: "/1.png"
    },
    {
        id: uuid(),
        title: "Improving Stress Tolerance",
        content:
            "Chitosan has been shown to enhance plant tolerance and resistance to both biotic (pests, diseases) and abiotic (drought, salinity) stresses. In a study on rice plants, chitosan treatment was found to reduce the incidence of fungal diseases by up to 40%, likely due to its antimicrobial properties and ability to activate the plant&apos;s defense mechanisms. Additionally, chitosan has been observed to improve drought tolerance in plants by enhancing water use efficiency and antioxidant activity, leading to reduced crop losses under water-limited conditions.",
        align: "left",
        image: "/3.png"
    },
    {
        id: uuid(),
        title: "Soil remediation",
        content:
            "Chitosan&apos;s remarkable ability to remove heavy metals and organic pollutants from contaminated soils is a significant aspect of its sustainable agriculture applications. Studies have shown that chitosan-based materials can effectively remediate polluted soils by adsorbing and immobilizing up to 90% of heavy metal contaminants and a wide range of organic pollutants. The cationic nature of chitosan allows it to form strong electrostatic interactions with these negatively charged compounds, effectively trapping them and preventing their further dispersal in the environment. By incorporating chitosan-based amendments or coatings into the soil, farmers and land managers can significantly reduce the bioavailability and mobility of these harmful contaminants, thereby protecting the health of the soil ecosystem and the crops grown in it.",
        align: "right",
        image: "/4.png"
    },
    {
        id: uuid(),
        title: "Promoting Beneficial Soil Microorganisms and Nutrient Uptake",
        content:
            "Chitosan has the ability to selectively promote the growth of beneficial soil microorganisms, such as plant growth-promoting rhizobacteria and mycorrhizal fungi. These microorganisms can help improve nutrient availability and uptake by the plants, leading to a reduction in the need for synthetic fertilizers by up to 25%. Chitosan&apos;s cationic nature also allows it to bind to and immobilize heavy metals and organic pollutants in the soil, helping to remediate contaminated areas.",
        align: "left",
        image: "/5.png"
    },
    {
        id: uuid(),
        title: "Extending Shelf-life of Harvested Produce",
        content:
            "Chitosan-based coatings and treatments have been found to extend the shelf-life of various harvested fruits and vegetables by up to 40%. This is achieved through the antimicrobial and film-forming properties of chitosan, which can create a protective barrier against microbial spoilage and reduce moisture loss, thereby delaying the onset of senescence and maintaining the quality of the produce for longer periods.",
        align: "right",
        image: "/2.png"
    },
    {
        id: uuid(),
        title: "Promote antimicrobial activity",
        content:
            " chitosan nanoparticles have demonstrated the ability to inhibit the growth of foodborne pathogens like E. coli and Salmonella by 70-90%. This potent antimicrobial activity is attributed to the unique cationic nature of chitosan, which allows it to disrupt the cell membrane and interfere with the metabolic processes of the microorganisms. The use of chitosan nanoparticles as antimicrobial agents holds great promise in various applications, such as food preservation and the development of antimicrobial coatings and surfaces.",
        align: "left",
        image: "/6.png"
    },
    {
        id: uuid(),
        title: "Water Purification",
        content:
            "Chitosan hydrogels and membranes have proven to be highly effective in removing up to 95% of pollutants, such as dyes, antibiotics, and heavy metals, from contaminated water. This remarkable performance is attributed to chitosan&apos;s unique properties, including its cationic nature and high adsorption capacity. By leveraging these characteristics, chitosan-based water treatment solutions can efficiently capture and immobilize a wide range of water pollutants, contributing to the development of sustainable and eco-friendly water purification systems.",
        align: "right",
        image: "/7.png"
    },
    {
        id: uuid(),
        title: "Wound Healing",
        content:
            "Chitosan-based wound dressings and scaffolds have demonstrated an 80-90% improvement in wound healing compared to conventional treatments. Chitosan&apos;s biocompatibility, antimicrobial properties, and ability to stimulate the production of collagen and other extracellular matrix components make it an ideal material for wound management. The use of chitosan-based wound care products can accelerate the healing process, reduce the risk of infection, and improve patient outcomes, making it a valuable tool in the healthcare sector.",
        align: "left",
        image: "/6.png"
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
                        <h3 className="mb-6 h4 md:h3 font-semibold text-green-800">
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
