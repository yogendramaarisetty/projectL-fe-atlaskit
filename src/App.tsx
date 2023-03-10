import { token } from '@atlaskit/tokens';
import TopNavBar from './navigation/TopNavigation';

import { useState } from 'react';

import MonacoEditor  from '@monaco-editor/react';
import './App.css';
import '@atlaskit/css-reset';

import {
  Banner,
  Content,
  LeftSidebar,
  LeftSidebarWithoutResize,
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
    const [code, setCode] = useState<string>('console.log("Hello, world!");');
  return (
    <PageLayout>
      {
        <TopNavigation
          testId="topNavigation"
          id="product-navigation"
          skipLinkTitle="Product Navigation"
          height={60}
          isFixed={false}
        >
          <SlotWrapper >
          <TopNavBar />
          </SlotWrapper>
        </TopNavigation>
      }
      <Content testId="content">
        {
          <LeftSidebar
            testId="leftSidebar"
            id="space-navigation"
            skipLinkTitle="Space Navigation"
            isFixed={false}
            width={125}
          >
            <SlotWrapper
              
              hasExtraPadding
            >
              <SlotLabel isSmall>Space Navigation</SlotLabel>
            </SlotWrapper>
          </LeftSidebar>
        }
        {
          <Main testId="main" id="main" skipLinkTitle="Main Content">
            <SlotWrapper
              minHeight={400}
            >
              <SlotLabel isSmall>Main Content</SlotLabel>
              <MonacoEditor
                    height="80vh"
                    language="javascript"
                    theme="vs-dark"
                    value={code}
                    
                    onChange={(value) => setCode(value || '')}
                  />
            </SlotWrapper>
          </Main>
        }
      </Content>
    </PageLayout>
  );
};

export default BasicGrid;