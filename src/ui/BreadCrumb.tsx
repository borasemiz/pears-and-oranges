import { Fragment } from 'react';
import Link from 'next/link';
import { Flex, Text } from '@radix-ui/themes';

interface Props {
  currentPageTitle: string;
  locationHistory: Array<{
    title: string;
    link: string;
  }>;
}

function BreadCrumb({ currentPageTitle, locationHistory }: Props) {
  return (
    <Flex align="center" gap="2">
      {locationHistory.map(
        ({ link, title }) => (
          <Fragment key={link}>
            <Link href={link}>{title}</Link>
            <Text>&gt;</Text>
          </Fragment>
        )
      )}

      <Text>{currentPageTitle}</Text>
    </Flex>
  )
}

export default BreadCrumb;