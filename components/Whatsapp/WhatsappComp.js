import React from "react";
import dynamic from "next/dynamic";

const DynamicWhatsAppWidget = dynamic(
    () => import("react-whatsapp-chat-widget"),
    {
        ssr: false // Disable SSR for this component
    }
);
import "react-whatsapp-chat-widget/index.css";

export const WhatsappComp = () => {
    return (
        <DynamicWhatsAppWidget
            phoneNo="+917676733634"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            //   autoOpen={true}
            //   autoOpenTimer={2000}
            iconSize="60"
            iconColor="white"
            iconBgColor="#25D366"
            headerIcon="/ecogenie-logo.svg"
            // headerIconColor="pink"

            headerTxtColor="black"
            headerBgColor="#bbb"
            headerIconBgColor="rgb(255 197 110 / var(--tw-bg-opacity))"
            headerTitle="ecogenie biotech"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={
                <>
                    Hi 🙏 <br />
                    <br /> We are here to help you.
                </>
            }
            footerBgColor="#bbb"
            placeholder="Type a message.."
            btnBgColor="#25D366"
            btnTxt="Start Chat"
            btnTxtColor="black"
        />
    );
};
