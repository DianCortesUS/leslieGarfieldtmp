import React from 'react';
import {useMediaQuery} from '@material-ui/core';
import Image from 'next/image';
import {INTERNATIONAL_PROPERTY_KEY} from 'constants/properties';

import {ROUTES} from 'constants/routes';

import {Link} from './link';
import {
  MANHATTAN_OFFICE_LINK,
  BROOKLYN_OFFICE_LINK,
  MEDIA_LINKS,
  NEIGHBORHOOD_LINKS,
} from './constants';
import {Container} from './styled-components';
import { MobileFooter } from './mobile-footer';

function Footer() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Container component="footer" bgcolor="#1B4028">
      {isMobile ? (
        <MobileFooter />
      ) : (
        <>
          <div className="footer-up">
            <div className="footer-icons">
              <div className="footer-icon1">
                <Image
                  src="/assets/GIcon.png"
                  height={139}
                  width={147}
                  alt="G footer icon"
                />
              </div>
              <div className="footer-icon2">
                <span className="affiliate">EXCLUSIVE AFFILIATE</span>
                <Image
                  src="/assets/Ficon.png"
                  height={49}
                  width={202}
                  alt="2nd footer icon"
                />
              </div>
            </div>
            <div className="lists">
              <div>
                <p className="title">NEW YORK</p>
                {NEIGHBORHOOD_LINKS.map((neighborhood, index) => (
                  <Link
                    key={index}
                    href={neighborhood.link}
                    className="list-item"
                  >
                    {neighborhood.label}
                  </Link>
                ))}

                <Link
                  className="title"
                  href={`${ROUTES.LISTINGS}/${INTERNATIONAL_PROPERTY_KEY}`}
                >
                  <p>INTERNATIONAL</p>
                </Link>
              </div>
              <div>
                <p className="title">SERVICES</p>
                <Link href={ROUTES.NEW_YORK_SALES} className="list-item">
                  Buy
                </Link>
                <Link href={ROUTES.NEW_YORK_SALES} className="list-item">
                  Sell
                </Link>
                <Link href={ROUTES.NEW_YORK_RENTALS} className="list-item">
                  Rent
                </Link>
                <Link href={ROUTES.REPORTS} className="list-item">
                  Market Data
                </Link>
                <Link href={ROUTES.SERVICES} className="list-item">
                  Directory
                </Link>
              </div>
              <div>
                <p className="title">ABOUT</p>
                <Link href={ROUTES.AGENTS} className="list-item">
                  Advisors
                </Link>
                <Link href={ROUTES.COMPANY} className="list-item">
                  Company
                </Link>
                <Link href={ROUTES.BLOG} className="list-item">
                  Journal
                </Link>
                <Link href={ROUTES.NEIGHBORHOODS} className="list-item">
                  Neighborhoods
                </Link>
                <Link href={ROUTES.CAREERS} className="list-item">
                  Careers
                </Link>
                <Link href={ROUTES.FAQ} className="list-item">
                  FAQ's
                </Link>
              </div>
              <div>
                <p className="title">FOLLOW</p>
                {MEDIA_LINKS.map(({href, name}) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '40px',
                      textAlign: 'center',
                    }}
                    className="list-item"
                  >
                    {name}
                  </Link>
                ))}
              </div>
              <div>
                <p className="title">CONTACT</p>
                <Link
                  href={MANHATTAN_OFFICE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-item"
                >
                  <span>Manhattan Office</span>
                  <div>505 Park Avenue</div>
                  <div>Suite 303</div>
                  <div>New York, NY 10022</div>
                </Link>
                <Link href="tel:212.371.8200" className="list-item">
                  212.371.8200
                </Link>
                <br />
                <Link
                  href={BROOKLYN_OFFICE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-item"
                >
                  <span>Brooklyn Office</span>
                  <div>122 Montague Street</div>
                  <div>2nd Floor</div>
                  <div>Brooklyn, NY 11201</div>
                </Link>
                <Link href="tel:212.371.8200" className="list-item">
                  212.371.8200
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-low">
            <div>
              <span className="2023-text">
                © 2023 Leslie J. Garfield & Co., Inc. All Rights Reserved.
              </span>
            </div>
            <div className="footer-low-list">
              <Link href={ROUTES.DISCLAIMER} className="footer-low-item">
                Privacy Policy
              </Link>
              <Link href={ROUTES.DISCLAIMER} className="footer-low-item">
                Disclaimer
              </Link>
              <Link href={ROUTES.SOP} className="footer-low-item">
                Standard Operating Procedure
              </Link>
              <Link href={ROUTES.CLOSING_COSTS} className="footer-low-item">
                Closing Costs
              </Link>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

export {Footer};
