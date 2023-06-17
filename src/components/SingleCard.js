import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';

import CopyToClipboardButton from './CopyToClipboardButton';

const SingleCard = ({ formattedNumber, googleSearch, index, copiedIndex, setCopiedIndex }) => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
      setFadeIn(false);
      const timer = setTimeout(() => {
        setFadeIn(true);
      }, 300 + index * 100); // incrementally delay the fadeIn

      // Clean up function to clear the timeout in case the component unmounts
      return () => clearTimeout(timer);
    }, [formattedNumber, googleSearch, index, copiedIndex]); // dependency on props

    return (
        <Fade in={fadeIn}>
            <Card key={index} className="mb-3">
                <Card.Header>
                    {formattedNumber}
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={10}>
                            <Card.Link href={googleSearch}>
                                {googleSearch}
                            </Card.Link>
                        </Col>
                        <Col md={2}>
                            <CopyToClipboardButton
                                text={googleSearch}
                                index={index}
                                copiedIndex={copiedIndex}
                                setCopiedIndex={setCopiedIndex}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Fade>
    );
};

export default SingleCard;
