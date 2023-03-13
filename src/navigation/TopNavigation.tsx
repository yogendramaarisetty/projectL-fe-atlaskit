import React from 'react';

import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';

import {
  AtlassianNavigation,
  PrimaryButton,
  PrimaryDropdownButton,
  ProductHome,
} from '@atlaskit/atlassian-navigation';
import { THEME_MODES } from '@atlaskit/theme';

const AtlassianProductHome = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
);

const DefaultExample = () => (
  <AtlassianNavigation
    label="site"
    primaryItems={[
      <PrimaryButton>Problems</PrimaryButton>,
      <PrimaryDropdownButton>Contact</PrimaryDropdownButton>,
      <PrimaryDropdownButton>About Us</PrimaryDropdownButton>,
      <PrimaryButton>Repositories</PrimaryButton>,
      
    ]}
    renderProductHome={AtlassianProductHome}
  />
);

export default DefaultExample;
