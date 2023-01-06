import React from 'react';
import MDXHead from '@theme/MDXComponents/Head';
import MDXCode from '@theme/MDXComponents/Code';
import MDXA from '@theme/MDXComponents/A';
import MDXPre from '@theme/MDXComponents/Pre';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXHeading from '@theme/MDXComponents/Heading';
import MDXUl from '@theme/MDXComponents/Ul';
import MDXImg from '@theme/MDXComponents/Img';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';
// add extra compoments
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PartialServop from '@site/docs/api/_partial/_servop.md';
import DocCardList from '@theme/DocCardList';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
const MDXComponents = {
  head: MDXHead,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  details: MDXDetails,
  ul: MDXUl,
  img: MDXImg,
  h1: (props) => <MDXHeading as="h1" {...props} />,
  h2: (props) => <MDXHeading as="h2" {...props} />,
  h3: (props) => <MDXHeading as="h3" {...props} />,
  h4: (props) => <MDXHeading as="h4" {...props} />,
  h5: (props) => <MDXHeading as="h5" {...props} />,
  h6: (props) => <MDXHeading as="h6" {...props} />,
  admonition: Admonition,
  mermaid: Mermaid,
  BrowserWindow: BrowserWindow,
  Tabs: Tabs,
  TabItem: TabItem,
  PartialServop: PartialServop,
  DocCardList: DocCardList,
  LiteYouTubeEmbed: LiteYouTubeEmbed,
  table: ({ children, ...props }) => {
    const tableHeadings = children[0].props.children.props.children;
    const hasTheadValue = !Array.isArray(tableHeadings) || tableHeadings.every(({ props }) => props.children);
    return (
      <div className="table-wrapper">
        <table {...props} children={hasTheadValue ? children : children.slice(1)} />
      </div>
    );
  },
};
export default MDXComponents;
