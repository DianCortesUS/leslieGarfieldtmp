import React from 'react';
import Image from 'next/image';
import {INTERNATIONAL_PROPERTY_KEY} from 'constants/properties';

import {ROUTES} from '../../../constants/routes';

import {Link} from '../link';
import {
  MANHATTAN_OFFICE_LINK,
  BROOKLYN_OFFICE_LINK,
  MEDIA_LINKS,
  NEIGHBORHOOD_LINKS,
  MEDIA_ICONS,
} from '../constants';
import {Container} from './styled-components';

function MobileFooter() {
  return (
    <Container component="footer" bgcolor="#1B4028">
      <div className="footer-up-mobile">
        <div className="footer-left">
          <div className="footer-icon1">
            <Image
              src="/assets/GIcon.png"
              height={68}
              width={72}
              alt="G footer icon"
            />
          </div>
          <div className="lists-mobile">
            <div className="list-block">
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
            <div className="list-block">
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
                Neighborhood
              </Link>
              <Link href={ROUTES.CAREERS} className="list-item">
                Careers
              </Link>
              <Link href={ROUTES.FAQ} className="list-item">
                FAQ's
              </Link>
            </div>
            <div className="list-block">
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
        <div className="footer-right">
          <div className="footer-icon2">
            <span className="affiliate">EXCLUSIVE AFFILIATE</span>
            <Image
              src="/assets/Ficon.png"
              height={30}
              width={125}
              alt="2nd footer icon"
            />
          </div>
          <div className="lists2">
            <div className="list-block">
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
            <div className="list-block2">
              <p className="title">FOLLOW</p>
              {MEDIA_ICONS.map(({href, icon: Icon}) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    textAlign: 'center',
                    display: 'inline-block',
                  }}
                  className="list-item2"
                >
                  <Icon style={{fontSize: 14}} className="media-icons" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-low-mobile">
        <div className="footer-lmc">
          <div className='footer-lmc2'>
            <div className="footer-low-list-mobile">
              <Link href={ROUTES.DISCLAIMER} className="footer-low-item-mobile">
                Privacy Policy
              </Link>
              <Link href={ROUTES.DISCLAIMER} className="footer-low-item-mobile">
                Disclaimer
              </Link>
              <Link href={ROUTES.DISCLAIMER} className="footer-low-item-mobile">
                Standard Operating Procedure
              </Link>
              <Link
                href={ROUTES.CLOSING_COSTS}
                className="footer-low-item-mobile"
              >
                Closing Costs
              </Link>
            </div>
            <div>
              <span className="2023-text-mobile">
                © 2023 Leslie J. Garfield & Co., Inc. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export {MobileFooter};