import React from "react";
import { Redirect } from "react-router-dom";

const MYHome = React.lazy((_) => import("@/pages/home"));
const MYMY = React.lazy((_) => import("@/pages/my"));
const MYFriend = React.lazy((_) => import("@/pages/friend"));
const MYDownload = React.lazy((_) => import("@/pages/download"));
const Recommend = React.lazy((_) => import("@/pages/home/c-pages/recommend"));
const TopList = React.lazy((_) => import("@/pages/home/c-pages/toplist"));
const PlayList = React.lazy((_) => import("@/pages/home/c-pages/playlist"));
const Djradio = React.lazy((_) => import("@/pages/home/c-pages/djradio"));
const Artist = React.lazy((_) => import("@/pages/home/c-pages/artist"));
const Album = React.lazy((_) => import("@/pages/home/c-pages/album"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: MYHome,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path: "/discover/toplist",
        component: TopList,
      },
      {
        path: "/discover/playlist",
        component: PlayList,
      },
      {
        path: "/discover/djradio",
        component: Djradio,
      },
      {
        path: "/discover/artist",
        component: Artist,
      },
      {
        path: "/discover/album",
        component: Album,
      },
    ],
  },
  {
    path: "/my",
    component: MYMY,
  },
  {
    path: "/friend",
    component: MYFriend,
  },
  {
    path: "/download",
    component: MYDownload,
  },
];

export default routes;
