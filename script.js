const getStocksToWatch = async () => {
  const response = await fetch(
    "https://www.business-standard.com/topic/stocks-to-watch"
  );

  if (response.ok) {
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const aTag = doc.querySelector(
      'a.smallcard-title[href*="stocks-to-watch"]'
    );

    if (aTag) {
      console.log(aTag.outerHTML);
    } else {
      console.log("Anchor tag not found.");
    }
  } else {
    console.error("Failed to fetch data");
  }
};

getStocksToWatch();
