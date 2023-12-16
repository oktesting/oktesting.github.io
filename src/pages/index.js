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
        <h2 className="text-4xl text-primary mb-2">about me...</h2>
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
        {/* TODO: */}
        {/* https://floating-ui.com/ */}
        {/* https://codepen.io/carloscdev/pen/mdBLmwP */}
        {/* <div>
          note: pardon me, this page is kind of my lame presentation to look
          as professional and as fun at the same time (these things dont mix well, at
          least in here). 
          this unordered and messy creation is combined from my half-baked effort and assisted also by my limited
          creativity and skills.
          oh, a bit harsh on myself, isn't it. anyway i'm proud of this and there's always for improvement though. my head really like bouncing between writing the code and writting something bout me, very distracting
        </div> */}
      </div>

      <div className="container grid grid-cols-2  mt-14 gap-x-10">
        <div className="col-span-full xl:col-span-1">
          <div className="grid gap-x-6 gap-y-7 grid-cols-[minmax(110px,_25%)_1fr]">
            <h2 className="section-title col-span-full">Familiar Technologies</h2>
            <div className="col-span-1 section-sub-title">Languages</div>
            <div className="col-span-1">
              <h3 className="section-content">JavaScript / TypeScript</h3>
              <span className="section-content-description">
                And HTML + CSS if u consider them as programming languages.
                <br />A bit of Go is alright
                {/* <br /> Also some Java but i don't use it for a very long time since graduate. */}
              </span>
            </div>
            <div className="col-span-1 section-sub-title">Web Development</div>
            <div className="col-span-1">
              <h3 className="section-content">
                NodeJS, ExpressJS, ReactJS, NextJS, NestJS
              </h3>
              <span className="section-content-description">
                yes, all js related!{/* how original and cliché (i know) */}
                <br />
                been doing some Angular lately and 😑, however, its employee's RXJS really
                grows on me 🤫(from my initial aversion)
                <br /> fine with NestJS though 🙄 mixed feelings
              </span>
            </div>
            <div className="col-span-1 section-sub-title">Databases</div>
            <div className="col-span-1">
              <h3 className="section-content">MongoDB and Postgres</h3>
              <ul className="list-inside list-disc section-content-description">
                <li>
                  MongoDB: Understand the basic of setting up, managing cluster, sharding,
                  replicas and the use of aggregation query framework
                </li>
                <li>
                  Postgres: The current work requires me to go back to my forgotten
                  knowledge of SELECT, WHERE, GROUP BY, HAVING, JOIN 😭
                </li>
              </ul>
            </div>
            <div className="col-span-1 section-sub-title">Deployment</div>
            <div className="col-span-1">
              <h3 className="section-content">Docker, Kubernetes</h3>
              <span className="section-content-description">
                To be honest, i just dived into these technologies and still improving my
                knowledge
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-full xl:col-span-1">
          <div className="grid gap-x-6 gap-y-7 grid-cols-[minmax(110px,_25%)_1fr]">
            <h2 className="section-title col-span-full">Experiences</h2>
            <div className="col-span-1 section-sub-title">2022 ~ Now</div>
            <div className="col-span-1 hover:cursor-pointer hover:underline">
              <h3 className="section-content">VNPT IT</h3>
              {/* <span className="section-content-description">Software Developer (still)</span> */}
            </div>
            <div className="col-span-1 section-sub-title">2020 ~ 2022</div>
            <Link href={'/posts/misc/efa6e6bb-4762-43a5-95e7-644ee2c43004'}>
              <div className="col-span-1 hover:cursor-pointer">
                <h3 className="section-content hover:underline">
                  FPT Telecom International
                </h3>
                <span className="section-content-description">Software Developer</span>
              </div>
            </Link>
            <div className="col-span-1 section-sub-title">2018 ~ 2019</div>
            <div className="col-span-1">
              <h3 className="section-content">FPT Software</h3>
              <span className="section-content-description">Internship</span>
            </div>
            <h2 className="section-title col-span-full">Education</h2>
            <div className="col-span-1 section-sub-title">2016 ~ 2020</div>
            <div className="col-span-1">
              <h3 className="section-content">FPT University</h3>
              <span className="section-content-description">
                Bachelor of Software Engineering. 8.1/10
              </span>
            </div>
            <div className="col-span-1 section-sub-title">Prior to 2016</div>
            <div className="col-span-1">
              <h3 className="section-content">Compulsory education</h3>
              <span className="section-content-description">
                Average at its finest...
                {/* ..., both academic and social. lot of wasted effort in
                this period just to guide myself into some kind of right direction failed
                miserably. some events really shaped me into a "keep your head down" or
                "sit in the corner" type of person */}
              </span>
            </div>
          </div>
        </div>
        {false && (
          <div className="col-span-full xl:col-span-1 xl:col-start-2">
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
        )}
      </div>
    </>
  );
}

function Lightrope({ theme, lightropeRef }) {
  return (
    <div className="container -mt-10 flex">
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
