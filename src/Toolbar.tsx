/** @jsx jsx */

import type { ReactNode } from 'react';

import { css, jsx } from '@emotion/react';

type ToolBarProps = {
  children: ReactNode;
  isSmall?: boolean;
};

const toolBarStyles = css({
  textAlign: 'center',
  background: 'color.background.accent.blue.subtlest',
  display: 'inline',
  padding: '100px'
});

const ToolBar = ({ children, isSmall = false }: ToolBarProps) => {
  const Component = isSmall ? 'h4' : 'h3';
  return <Component css={toolBarStyles}>{children}</Component>;
};

export default ToolBar;
