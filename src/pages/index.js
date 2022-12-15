/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import style from '../styles/homepage.module.scss';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  isAfter,
  isBefore,
  setMonth,
  addWeeks,
  setDate,
  endOfYear,
  startOfDay,
  startOfYear
} from 'date-fns';

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
  const [isHolidaySeason, setHolidaySeason] = useState(false);

  useEffect(() => {
    const today = new Date();
    /**
     * holiday season decor often starts at december first "this year" and last to new year eve plus 1 week later "next year".
     * this "this year" + "last year" situation can be solve by:
     * spliting holiday season of one year into 2 range, beginning of the year range and ending of the year range
     */

    // beginning of the year range
    const decemberFirst = startOfDay(setDate(setMonth(today, 11), 1));
    const decemberLast = endOfYear(today);

    // ending of the year range
    const januaryFirst = startOfYear(today);
    const januaryFirstPlus1Week = addWeeks(januaryFirst, 1);

    setHolidaySeason(
      (isAfter(today, decemberFirst) && isBefore(today, decemberLast)) ||
        (isAfter(today, januaryFirst) && isBefore(today, januaryFirstPlus1Week))
    );

    if (!isHolidaySeason) return;
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
      {isHolidaySeason && <Lightrope lightropeRef={lightrope} theme={theme} />}

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
              <h3 className="section-content">JavaScript / TypeScript</h3>
              <span className="section-content-description">
                And HTML + CSS if u consider them as programming languages.
                <br />A bit of Go is alright
                {/* <br /> Also some Java but i don't use it for a very long time since graduate. */}
              </span>
            </div>
          </div>
          <div className="flex my-7">
            <span className="w-3/12 mr-3 section-sub-title">Web Development</span>
            <div className="w-9/12 ml-3">
              <h3 className="section-content">
                NodeJS, ExpressJS, ReactJS, NextJS, NestJS
              </h3>
              <span className="section-content-description">
                yes, all js related 😑 {/* how original and cliché (i know) */}
                <br />
                been doing some Angular lately and 😑
                <br /> fine with NestJS though 🙄
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
            <span className="w-3/12 mr-3 section-sub-title">Now</span>
            <div className="w-9/12 ml-3 hover:cursor-pointer hover:underline">
              <h3 className="section-content">VNPT IT</h3>
              {/* <span className="section-content-description">Software Developer (still)</span> */}
            </div>
          </div>
          <div className="flex my-7">
            <span className="w-3/12 mr-3 section-sub-title">Jun 2020 to Mar 2022</span>
            <Link href={'/posts/misc/efa6e6bb-4762-43a5-95e7-644ee2c43004'}>
              <div className="w-9/12 ml-3 hover:cursor-pointer hover:underline">
                <h3 className="section-content">FPT Telecom International</h3>
                <span className="section-content-description">Software Developer</span>
              </div>
            </Link>
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
              suppressHydrationWarning
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

function Lightrope({ theme, lightropeRef }) {
  return (
    <div className="container -mt-14 flex">
      <img
        src="https://www.svgrepo.com/show/184602/christmas-sock-christmas.svg"
        alt=""
        className="h-14 w-14"
      />
      <ul
        className={`${style.lightrope} ${theme === 'dark' ? style.on : ''}`}
        ref={lightropeRef}
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
  );
}
