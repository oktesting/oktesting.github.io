/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import style from '../styles/homepage.module.scss';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

const BASE_PLAYLIST_URL =
  'https://open.spotify.com/embed/playlist/7dI5P0psZVQYmD9VHJIoSR';

export default function Home() {
  const { resolvedTheme: theme } = useTheme();
  const playlistURL = useMemo(
    () => (theme === 'dark' ? BASE_PLAYLIST_URL + '?theme=0' : BASE_PLAYLIST_URL),
    [theme]
  );

  // once loaded, force lightrope and spotify elements to dark theme property since its initial states don't include them
  const lightrope = useRef();
  const spotify = useRef();
  useEffect(() => {
    if (theme === 'dark') {
      lightrope.current.classList?.add(style.on);
      spotify.current.src = playlistURL;
    }
  }, []);

  return (
    <>
      <Head>
        <title>résumé</title>
        <meta name="description" content="DucCM's résumé" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <meta httpEquiv="Content-Type" content="text/html" charset="utf-8" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container -mt-14 flex">
        <img
          src="https://www.svgrepo.com/show/184602/christmas-sock-christmas.svg"
          alt=""
          className="h-14 w-14"
        />
        <ul
          className={`${style.lightrope} ${theme === 'dark' ? style.on : ''}`}
          ref={lightrope}
        >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <img
          src="https://www.svgrepo.com/show/184560/bauble-christmas.svg"
          alt=""
          className="h-12 w-12"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>
      <div className="container">
        <h2 className="text-4xl text-primary">about me...</h2>
        <p className="text-lg">
          Hi, i'm Đức and currently working as a software developer. i graduated from FPT
          University in 2020. i mostly work with JavaScript and stack of technology built
          around it.
          <br />
          My hobbies include learning new things from the Internet, "consuming" some
          books, gaming, musics and movies (some of the most basic stuffs could be listed,
          ¯\_(ツ)_/¯)
          <br />
          Btw, i do{' '}
          {/* <a
            className="text-primary"
            href="https://duccm4.notion.site/Movies-Reviews-5960a207bc234158a450173d8a2372ff"
            target="_blank"
            rel="noreferrer"
          >
            write
          </a> */}
          <span className="text-primary">
            <Link href={'/posts'}>write</Link>
          </span>{' '}
          sometimes
        </p>
      </div>

      <div className="flex container mt-14">
        <div className="w-1/2 mr-5">
          <h2 className="section-title">Familiar Technologies</h2>
          <div className="flex">
            <span className="w-3/12 mr-3 section-sub-title">Languages</span>
            <div className="w-9/12 ml-3">
              <h3 className="section-content">JavaScript</h3>
              <span className="section-content-description">
                And HTML+CSS if u consider them as programming languages. Also some Java
                but i don't use it for a very long time since graduate.
              </span>
            </div>
          </div>
          <div className="flex my-7">
            <span className="w-3/12 mr-3 section-sub-title">Web Development</span>
            <div className="w-9/12 ml-3">
              <h3 className="section-content">
                NodeJS, ExpressJS, ReactJS, NextJS, Redux, AntD...
              </h3>
              <span className="section-content-description">
                all js related, how original and cliché (i know)
              </span>
            </div>
          </div>
          <div className="flex my-7">
            <span className="w-3/12 mr-3 section-sub-title">Database</span>
            <div className="w-9/12 ml-3">
              <h3 className="section-content">MongoDB</h3>
              <span className="section-content-description">
                Understand the basic of setting up, managing cluster, sharding, replicas
                and the use of aggregation query framework
              </span>
            </div>
          </div>
          <div className="flex my-7">
            <span className="w-3/12 mr-3 section-sub-title">Deployment</span>
            <div className="w-9/12 ml-3">
              <h3 className="section-content">Docker, Kubernetes</h3>
              <span className="section-content-description">
                To be honest, i just dived into these technologies and still improving my
                knowledge
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-5">
          <h2 className="section-title">Experiences</h2>
          <div className="flex my-7">
            <span className="w-3/12 mr-3 section-sub-title">Jun 2020 to Mar 2022</span>
            <div className="w-9/12 ml-3">
              <h3 className="section-content">FPT Telecom International</h3>
              <span className="section-content-description">Software Developer</span>
            </div>
          </div>
          <div className="flex my-7">
            <span className="w-3/12 mr-3 section-sub-title">Dec 2018 to Jun 2019</span>
            <div className="w-9/12 ml-3">
              <h3 className="section-content">FPT Software</h3>
              <span className="section-content-description">Internship</span>
            </div>
          </div>

          <h2 className="section-title">Education</h2>
          <div className="flex my-7">
            <span className="w-3/12 mr-3 section-sub-title">2016 - 2020</span>
            <div className="w-9/12 ml-3">
              <h3 className="section-content">FPT University</h3>
              <span className="section-content-description">
                Bachelor of Software Engineering. 8.1/10
              </span>
            </div>
          </div>
          <h2 className="section-title">Vibing (‾◡◝)♪ </h2>
          <div className="">
            <iframe
              ref={spotify}
              id="spotify"
              src={playlistURL}
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
