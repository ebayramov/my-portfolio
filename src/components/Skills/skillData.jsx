import {
  BootstrapIcon,
  CssIcon,
  NodejsIcon,
  CanvaIcon,
  HtmlIcon,
  BulmaIcon,
  GithubIcon,
  JavascriptIcon,
  JqueryIcon,
  PhpIcon,
  SocketioIcon,
  NextjsIcon,
  ReactIcon,
  DockerIcon,
  PhotoshopIcon,
  MysqlIcon,
  DigitalOceanIcon,
} from "../../assets";

export const skillData = {
  bootstrap: {
    name: "Bootstrap",
    icon: <BootstrapIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["design", "front-end"],
  },
  css: {
    name: "Css",
    icon: <CssIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["design", "front-end"],
  },
  nodejs: {
    name: "Nodejs",
    icon: <NodejsIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["back-end"],
  },
  mysql: {
    name: "MySQL",
    icon: <MysqlIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["back-end"],
  },
  canva: {
    name: "Canva",
    icon: <CanvaIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["design"],
  },
  html: {
    name: "Html",
    icon: <HtmlIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["design", "front-end"],
  },
  java: {
    name: "Bulma",
    icon: <BulmaIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["design", "front-end"],
  },
  javascript: {
    name: "Javascript",
    icon: <JavascriptIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["front-end", "back-end"],
  },
  jquery: {
    name: "jQuery",
    icon: <JqueryIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["front-end"],
  },
  php: {
    name: "PHP",
    icon: <PhpIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["back-end"],
  },
  socketio: {
    name: "Socket.io",
    icon: <SocketioIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["back-end"],
  },
  nextjs: {
    name: "Next.js",
    icon: <NextjsIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["front-end", "back-end"],
  },
  react: {
    name: "React",
    icon: <ReactIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["front-end"],
  },
  docker: {
    name: "Docker",
    icon: <DockerIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["back-end"],
  },
  github: {
    name: "Github",
    icon: <GithubIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["front-end", "back-end"],
  },
  digitalocean: {
    name: "DigitalOcean",
    icon: <DigitalOceanIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["back-end"],
  },
  photoshop: {
    name: "Photoshop",
    icon: <PhotoshopIcon style={{ width: "min(max(3rem, 4vw), 4rem)" }} />,
    type: ["design"],
  },
}