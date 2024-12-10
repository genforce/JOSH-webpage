import { WebViewer } from "@rerun-io/web-viewer";

const rrdUrl = "https://raw.githubusercontent.com/genforce/JOSH-webpage/main/recordings/demo_3.rrd";
const parentElement = document.getElementById("demo3");

const viewer = new WebViewer();
await viewer.start(rrdUrl, parentElement, {render_backend: "webgl", hide_welcome_screen: true, panel_state_overrides: {top: "Hidden", blueprint: "Hidden"}});