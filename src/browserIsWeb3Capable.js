import Bowser from "bowser";

// Validates user's browser is web3 capable
export default function browserIsWeb3Capable() {
  // User Agent
  const browser = bowser.getParser(window.navigator.userAgent);
  const userAgent = browser.parse().parsedResult;

  const validBrowser = browser.satisfies({
    desktop: {
      chrome: ">49",
      firefox: ">52",
      opera: ">36"
    }
  })
    ? true
    : false;

  this.setState({
    userAgent,
    validBrowser
  });

  return validBrowser;
}
