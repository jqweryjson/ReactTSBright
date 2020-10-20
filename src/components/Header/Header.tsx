import * as React from 'react';
import { PageHeader } from 'antd';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <PageHeader
      className="header"
      backIcon="false"
      title={title}
    />
  )
}

export { Header };