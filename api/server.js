import { createServer } from "http";
import handler from "../api/index.js";

const hostname = "127.0.0.1";
const port = 3000;

createServer(handler).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
