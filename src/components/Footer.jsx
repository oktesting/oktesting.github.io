import { useState } from 'react';

const Footer = () => {
  const [creditOpen, setCreditOpen] = useState(false);

  return (
    <div className="container flex justify-between text-base border-opacity-75 border-t h-10 leading-10 mb-7">
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
  );
};

export default Footer;
