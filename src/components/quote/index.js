import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { QuoteContainer, QuoteMsg, Author } from './QuoteElements'

const Quote = () => {
	return (
		<QuoteContainer>
			<QuoteMsg>
                <FaQuoteLeft className="quoteIcon" />Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go.
            </QuoteMsg>
            <Author>
                ~ Anthony Bourdain
            </Author>
		</QuoteContainer>
	);
};

export default Quote;
