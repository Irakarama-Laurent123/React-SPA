import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import React from "react";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Laurent", text: "\"It ain't bragging if it's true\" " },
  { id: "q2", author: "Zest", text: '"Work, Live, and Create"' },
];

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path } exact>
      <div className="centered">
        <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
      </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
