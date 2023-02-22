/** @jsx jsx */

import { jsx } from '@emotion/react';

import { token } from '@atlaskit/tokens';

import TopNavBar from './navigation/TopNavigation';

import './App.css';

import {
  Banner,
  Content,
  LeftSidebar,
  Main,
  PageLayout,
  RightPanel,
  TopNavigation,
} from '@atlaskit/page-layout';
import {
  SlotLabel,
  SlotWrapper,
} from './design-system/page-layout/examples/common';

const BasicGrid = () => {
  return <TopNavBar />;
};

export default BasicGrid;
