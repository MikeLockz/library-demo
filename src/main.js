import Bowser from "bowser";

// Validates user's browser is web3 capable
const funcs = {
  browserIsWeb3Capable() {
    // User Agent
    const browser = Bowser.getParser(window.navigator.userAgent);
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

    return validBrowser;
  }
};

export default funcs;
