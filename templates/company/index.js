import React from 'react';
import {Grid} from '@material-ui/core';
import {Logo} from '@perchwell/components';

import {usePageContent, useAgents} from 'api';
import {Head} from 'components/head';
import {ROUTES} from 'constants/routes';
import {CompanyBanner} from 'components/banner/companyBanner';
import {PageSpinner} from 'components/page-spinner';

import { BlockWrapperBeliefs, DirectorsWrapper, BlockWrapperAuthority, BlockWrapperWorth} from './styled-components';
import { Button } from 'components/buttons/button';
import {DirectorsCards} from '../agents/cards/directors';

function CompanyTemplate() {
  const {isLoading, data = {}} = usePageContent('company');
  const {isLoading: isEmployeeLoading, data: employees = []} = useAgents();

  const {components} = data;
  const whyGarfieldList =
    components?.why_garfield?.item_lists?.values?.content ?? [];
  const charityLogos = components?.charities?.item_lists?.values?.content ?? [];

  return (
    <>
      <Head
        title="Our Company | Leslie Garfield"
        description="New York City's premier broker for townhouses and small building real estate, since 1972. You can expect honest advice and an experienced perspective."
      />
      <PageSpinner visible={isLoading}>
        <CompanyBanner
          type={components?.header?.media?.background_image?.type}
          contentURL={components?.header?.media?.background_image?.content_url}
          title={'Our Company'}
          titleProps={{color: 'textSecondary'}}
          subtitleProps={{color: 'textSecondary'}}
        />
        <BlockWrapperBeliefs bgcolor="background.cream" textAlign="center">
          <div className="company-beliefs">
            <p className="company-beliefs-text">
              At Leslie Garfield, we celebrate the rich history and enduring
              value of New York City townhouses. So much so, we’ve dedicated 50
              years to advising clients on all aspects of buying, selling and
              making the most out of this timeless asset class. Guided by the
              principle that truth builds trust, we offer only the most relevant
              insights, a customized approach to cater to each client’s unique
              needs, and an expansive network of experts to elevate how clients’
              live their daily lives. That’s why we are New York City’s leading
              townhouse advisors.
            </p>
          </div>
        </BlockWrapperBeliefs>
        <DirectorsWrapper>
          <h4 className='directors-title'>DIRECTORS</h4>
          <DirectorsCards employees={employees} />
        </DirectorsWrapper>
        <BlockWrapperAuthority bgcolor="background.header">
          <div className='company-authority'>
            <h6 className='authority-title-text'><strong>An Authority on New York Townhouses</strong></h6>
            <p className='company-authority-text'>
              As New York City’s premier experts in townhouse real estate for nearly 50 years, we’ve amassed a wealth of experience, knowledge and relationships designed to ensure our clients make the best decisions possible about these unique properties that are woven into the fabric of the city.
            </p>
            
            <p className='company-authority-text'>
              It was our founder Leslie J. Garfield (1934-2022), who first understood the significance of New York City townhouses value beyond other real estate thanks to intangible qualities that value them differently, and often at a premium, compared to other types of real estate in New York City.
            </p>
            
            <p className='company-authority-text'>
              As our brokerage has developed, our growing team of sales and marketing talent has been recognized by institutional clients, individuals and the industry overall for providing outstanding service and insight, plus record-breaking sales.
            </p>
          </div>
        </BlockWrapperAuthority>
        {components?.our_partner && (
          <BlockWrapperAuthority bgcolor="background.cream">
            <div className='company-authority' style={{ marginTop: '-70px' }}>
            <h6 className='authority-title-text'>GIVING BACK TO THE COMMUNITY</h6>
            <p className='company-authority-text'>
              At our core, we believe in the power of community and the importance of giving back. That's why we're proud to support a diverse range of organizations that positively impact the communities where we operate.
            </p>
          </div>
          </BlockWrapperAuthority>
        )}
        <BlockWrapperAuthority bgcolor="background.cream">
          <div className='company-authority' style={{ marginTop: '-70px' }}>
            <h6 className='authority-title-text'>GIVING BACK TO THE COMMUNITY</h6>
            <p className='company-authority-text'>
              At our core, we believe in the power of community and the importance of giving back. That's why we're proud to support a diverse range of organizations that positively impact the communities where we operate.
            </p>
          </div>
          {charityLogos.length > 0 && (
            <Grid container>
              {charityLogos.map((logo, index) => (
                <Grid
                  key={index}
                  container
                  item
                  xs={6}
                  md={3}
                  alignItems="center"
                  justify="center"
                >
                  <Logo src={logo} alt="charity" width="80%" p={2} />
                </Grid>
              ))}
            </Grid>
          )}
        </BlockWrapperAuthority>
        <BlockWrapperWorth>
          <div className='townhouse-worth-title'>
            <h2 className='townhouse-worth-text'>What is my Townhouse worth?</h2>
            <Button to={ROUTES.SELL}>
              GET A VALUATION
            </Button>
          </div>
        </BlockWrapperWorth>
      </PageSpinner>
    </>
  );
}

export {CompanyTemplate as default};
