import React from 'react';

import { AtlassianIcon, AtlassianLogo, LogoProps } from '@atlaskit/logo';

import {
  AtlassianNavigation,
  PrimaryButton,
  PrimaryDropdownButton,
  ProductHome,
} from '@atlaskit/atlassian-navigation';


import CondingTestLogo from '../assets/CodingTest.svg';
const AtlassianProductHome = () => <img src={CondingTestLogo} />;

const TopNavBar = () => (
  <AtlassianNavigation
    label="site"
    primaryItems={[
      <PrimaryButton>Problems</PrimaryButton>,
      <PrimaryDropdownButton>Tests</PrimaryDropdownButton>,
      <PrimaryDropdownButton>Results</PrimaryDropdownButton>,
      <PrimaryButton>Candidates</PrimaryButton>,
    ]}
    renderProductHome={AtlassianProductHome}
  />
);

export default TopNavBar;
