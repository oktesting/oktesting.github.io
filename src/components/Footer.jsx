import { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const [creditOpen, setCreditOpen] = useState(false);
  const dividerRef = useRef(null);
  const footerRef = useRef(null);
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  /* useEffect(() => {
    console.log({
      windowInnerHeight: window.innerHeight,
      documentClientHeight: document.body.clientHeight,
      footerRef: footerRef.current.clientHeight,
      canBeScrolled:
        document.body.clientHeight - window.innerHeight - footerRef.current.clientHeight
    });
  }); */

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setScrollTopVisible(
        // show btn once the divider is scrolled into the viewport (the page need scrolling to get to footer)
        entry.isIntersecting &&
          /** except for the case that the footer is already in the viewport (the page is fit and no need for scrolling) */
          /** number of pixels can be scrolled (not including the footer height itself) */
          document.body.clientHeight -
            window.innerHeight -
            footerRef.current.clientHeight >
            0
      );
    }, options);
    if (dividerRef.current) observer.observe(dividerRef.current);

    return () => {
      if (dividerRef.current) observer.unobserve(dividerRef.current);
    };
  }, [dividerRef]);

  return (
    <>
      <div
        className={`
        ${scrollTopVisible ? '' : 'invisible'}
        fixed bottom-6 right-6 rounded-full items-center flex justify-center h-8 w-8 bg-text-primary cursor-pointer`}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        ☝️
      </div>
      <div ref={footerRef} className="container flex flex-col justify-items-start h-16">
        {/* once this divider is scroll passed then the scrollTop btn is shown */}
        <div className="border-t border-opacity-75 pb-2" ref={dividerRef} />
        <div className="container flex justify-between text-base flex-grow leading-10">
          <div className="group">
            <span
              className="underline cursor-pointer"
              onClick={() => {
                setCreditOpen(!creditOpen);
              }}
              id="credit-btn"
            >
              Credits
            </span>
            <ul
              className={` list-disc list-inside ${creditOpen ? '' : 'hidden'}`}
              id="credits"
            >
              <li>
                Icons by{' '}
                <a href="https://simpleicons.org/" target="_blank" rel="noreferrer">
                  Simple Icons
                </a>
              </li>
              <li>
                Some inspirations from{' '}
                <a href="https://thesquareplanet.com/" target="_blank" rel="noreferrer">
                  thesquareplanet
                </a>
              </li>
              <li>
                Super cool{' '}
                <a
                  href="https://codepen.io/tobyj/pen/QjvEex"
                  target="_blank"
                  rel="noreferrer"
                >
                  Christmas Lights
                </a>{' '}
                decoration by Toby
              </li>
              <li>
                Open source SVG graphics from{' '}
                <a
                  href="https://www.svgrepo.com/vectors/christmas/multicolor"
                  target="_blank"
                  rel="noreferrer"
                >
                  SVGRepo
                </a>
              </li>
            </ul>
          </div>
          <a
            href="https://github.com/oktesting/oktesting.github.io/commits/dev"
            target="_blank"
            rel="noreferrer"
          >
            Development log
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
