import { token } from '@atlaskit/tokens';
import TopNavBar from './navigation/TopNavigation';

import { useState } from 'react';
import {
    AtlassianNavigation,
    PrimaryButton,
    PrimaryDropdownButton,
    ProductHome,
  } from '@atlaskit/atlassian-navigation';
  import  ThemeProvider  from '@atlaskit/theme';
import MonacoEditor from '@monaco-editor/react';
import '@atlaskit/css-reset';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css'
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
import Button from '@atlaskit/button/standard-button';

import {
    AtlaskitThemeProvider,
    gridSize,
    ThemeModes,
    typography,
  } from '@atlaskit/theme';
import {
    SlotLabel,
    SlotWrapper,
} from './design-system/page-layout/examples/common';
import Toolbar from './Toolbar';


const LIGHT = 'light';
const DARK = 'dark';
const BasicGrid = () => {
    const [themeMode, setThemeMode] = useState<ThemeModes>(DARK);
    const toggleMode = () => {
      setThemeMode(themeMode === LIGHT ? DARK : LIGHT);
    };
    const [code, setCode] = useState<string>('console.log("Hello, world!");');
    const [sizesV, setSizesV] = useState([
        100,
        '30%',
        'auto',
    ]);
    const [sizesH, setSizesH] = useState([
        10000,
        '90%',
    ]);
    const layoutCSS = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <PageLayout>
            {
                <TopNavigation
                    testId="topNavigation"
                    id="product-navigation"
                    skipLinkTitle="Product Navigation"
                    isFixed={false}
                >
                    <TopNavBar />
                </TopNavigation>
            }
            {
                <Content testId="content">
                    <SplitPane
                        split='vertical'
                        sizes={sizesV}
                        onChange={setSizesV}
                    >
                        <Pane minSize={50} maxSize='50%'>
                            <div style={{ ...layoutCSS, background: 'color.background.accent.blue.subtlest' }}>
                                {

                                }
                            </div>
                        </Pane>
                        <div style={{ background: '#d5d7d9' }}>

                            <SplitPane
                                split="horizontal"
                                sizes={sizesH}
                                onChange={setSizesH}
                            >
                                <div style={{ display:'block', background: '#ddd' }}>
                                    {
                                        <Main testId="main" id="main" skipLinkTitle="Main Content">

                                            <SlotWrapper
                                                minHeight={600}
                                            >
                                               <Button testId="themeSwitch" onClick={toggleMode}>
          Toggle theme
        </Button>
                                                <MonacoEditor
                                                    height="100%"
                                                    language="javascript"
                                                    theme="vs-dark"
                                                    value={code}
                                                    options={{mouseWheelZoom:true, fontSize:16}}
                                                    onChange={(value) => setCode(value || '')}
                                                />
                                            </SlotWrapper>
                                        </Main>
                                    }
                                </div>
                                <Pane minSize={50} >
                                <div style={{ ...layoutCSS, background: '#ddd' }}>

                                    {
                                        <h2>Code output and Testcases</h2>
                                    }
                                </div>
                                </Pane>

                            </SplitPane>
                        </div>
                    </SplitPane>


                </Content>
            }

        </PageLayout>
    );
};

export default BasicGrid;