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
    const h2Tag = document.querySelector("#root h2"); // Target the <h2> tag in your HTML

    if (aTag) {
      // remove the word stocks to watch from the anchor tag
      h2Tag.textContent = aTag.textContent.replace("Stocks to Watch:", "");
    } else {
      h2Tag.textContent = "Anchor tag not found."; // Update <h2> if the anchor tag is not found
    }
  } else {
    console.error("Failed to fetch data");
  }
};

getStocksToWatch();
