/** @jsx jsx */

import { jsx } from '@emotion/react';
import { useState } from 'react';
import { token } from '@atlaskit/tokens';

import TopNavBar from './navigation/TopNavigation';

import './App.css';
import '@atlaskit/css-reset';

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

import MonacoEditor  from '@monaco-editor/react';
import SplitPane from 'react-split-pane';
const BasicGrid = () => {
  const [code, setCode] = useState<string>('console.log("Hello, world!");');

 
  return (
    <PageLayout>
    <TopNavBar />
    <Content>
      <Main>
        <SplitPane
          split="vertical"
          defaultSize={300}
          css={{
            height: '400px',
            '.Resizer': {
              backgroundColor: token('color.background.default', '#FFFFFF'),
              width: '5px',
              cursor: 'col-resize',
            },
            '.Pane': {
              backgroundColor: token('color.background.default', '#FFFFFF'),
              overflow: 'auto',
            },
          }}
        >
          <div>
            <LeftSidebar>
              <div css={{ padding: '16px' }}>
                <SlotWrapper>
                  <SlotLabel>Left Pane</SlotLabel>
                </SlotWrapper>
                <p>Content for the left pane goes here.</p>
              </div>
            </LeftSidebar>
          </div>
          <div>
            <RightPanel>
              <div
                css={{
                  backgroundColor: token('color.background.default', '#FFFFFF'),
                  padding: '16px',
                  height: '100%',
                }}
              >
                <SlotWrapper>
                  <SlotLabel>Right Pane</SlotLabel>
                </SlotWrapper>
                <div
                  css={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    height: '100%',
                  }}
                >
                  <MonacoEditor
                    height="100%"
                    language="javascript"
                    theme="vs-dark"
                    value={code}
                    onChange={(value) => setCode(value || '')}
                  />
                </div>
              </div>
            </RightPanel>
          </div>
        </SplitPane>
      </Main>
    </Content>
  </PageLayout>
  );
};

export default BasicGrid;
