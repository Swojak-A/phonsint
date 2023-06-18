import React from "react";
import Container from "react-bootstrap/Container";

import SingleCard from "./SingleCard";
import { generateFormats } from "../utils/phoneNumberUtils";
import { encodeGoogleSearchQuery } from "../utils/uriEncodingUtils";


function ResultCards({ phoneNumber, countryCode }) {
    const phoneNumberFormats = generateFormats(phoneNumber, countryCode);
    const [copiedIndex, setCopiedIndex] = React.useState(null);

    return (
        <Container className="my-5">
            {phoneNumberFormats.map((phoneNumber, index) => {
                const googleSearch = encodeGoogleSearchQuery(phoneNumber.phoneNumber);

                return (
                    <SingleCard
                        key={index}
                        formattedNumber={phoneNumber.phoneNumber}
                        meta={phoneNumber.meta}
                        googleSearch={googleSearch}
                        index={index}
                        copiedIndex={copiedIndex}
                        setCopiedIndex={setCopiedIndex}
                    />
                )
            })}
        </Container>
    );
}

export default ResultCards;
