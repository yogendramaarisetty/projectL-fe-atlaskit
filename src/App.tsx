import { token } from '@atlaskit/tokens';
import TopNavBar from './navigation/TopNavigation';

import { useState } from 'react';

import MonacoEditor from '@monaco-editor/react';
import './App.css';
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
import {
    SlotLabel,
    SlotWrapper,
} from './design-system/page-layout/examples/common';
import { fontSize } from '@atlaskit/atlassian-navigation/dist/types/common/constants';


const BasicGrid = () => {
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
                    <SlotWrapper >
                        <TopNavBar />
                    </SlotWrapper>
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
                            <div style={{ ...layoutCSS, background: '#ddd' }}>
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
                                                <SlotLabel isSmall>Main Content</SlotLabel>
                                                <MonacoEditor
                                                    height="100%"
                                                    language="javascript"
                                                    theme="vs-dark"
                                                    value={code}
                                                    options={{mouseWheelZoom:true}}
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