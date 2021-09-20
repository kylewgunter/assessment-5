const fetchQuoteByID = (quoteID) => {
  return fetch(`http://localhost:8000/quotes/${quoteID}`)
    .then((response) => response.json())
}

const fetchQuotes = () => {
  return fetch(`http://localhost:8000/quotes/`)
    .then((response) => response.json())
}

const quoteExport = {
  fetchQuoteByID,
  fetchQuotes
}

export default quoteExport