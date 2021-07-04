// Creator: k6 Browser Recorder 0.6.1

import { sleep, group } from "k6";
import http from "k6/http";

export const options = {
  vus:5,
  discardResponseBodies: true,
  stages:[
    { duration: "30s", target: 500 }, //ramp up from 5 to 50 during 3min
    { duration: "10s", target: 500 }, //stay flat in 50 VU for 10sec
  ]
};

export default function main() {
  let response;

  group("page_1 - http://localhost:30001/#/purchase-history", function () {
    response = http.get("http://localhost:30001/", {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "max-age=0",
        connection: "keep-alive",
        host: "localhost:30001",
        "if-none-match": 'W/"220-rgBaHP52x1lEnJsgYVvveuvAn38"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        "sec-ch-ua":
          '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "sec-ch-ua-mobile": "?0",
      },
    });
    response = http.get("http://localhost:30001/main.js", {
      headers: {
        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        connection: "keep-alive",
        host: "localhost:30001",
        referer: "http://localhost:30001/",
        "sec-fetch-dest": "script",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-origin",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        "sec-ch-ua":
          '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "sec-ch-ua-mobile": "?0",
      },
    });
    response = http.get("http://localhost:30002/remoteEntry.js", {
      headers: {
        referer: "http://localhost:30001/",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        "sec-ch-ua":
          '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "sec-ch-ua-mobile": "?0",
      },
    });
    response = http.get("http://localhost:30004/remoteEntry.js", {
      headers: {
        referer: "http://localhost:30001/",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        "sec-ch-ua":
          '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "sec-ch-ua-mobile": "?0",
      },
    });
    response = http.get("http://localhost:30002/src_Navbar_Navbar_tsx.js", {
      headers: {
        referer: "http://localhost:30001/",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        "sec-ch-ua":
          '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "sec-ch-ua-mobile": "?0",
      },
    });
    response = http.get(
      "http://localhost:30004/vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-f3389d.js",
      {
        headers: {
          referer: "http://localhost:30001/",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "sec-ch-ua-mobile": "?0",
        },
      }
    );
    response = http.get(
      "http://localhost:30004/src_Components_PurchaseHistoryTable_tsx.js",
      {
        headers: {
          referer: "http://localhost:30001/",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "sec-ch-ua-mobile": "?0",
        },
      }
    );
    response = http.get(
      "http://localhost:30001/sockjs-node/info?t=1624313097144",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7",
          connection: "keep-alive",
          host: "localhost:30001",
          referer: "http://localhost:30001/",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "sec-ch-ua-mobile": "?0",
        },
      }
    );
    response = http.get("http://localhost:30007/api/purchases", {
      headers: {
        referer: "http://localhost:30001/",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36",
        "sec-ch-ua":
          '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "sec-ch-ua-mobile": "?0",
      },
    });
  });

  // Automatically added sleep
  sleep(1);
}
