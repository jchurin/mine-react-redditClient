import React from 'react';
import { RCFooter } from '@rc-shared';

import Container from '@material-ui/core/Container';
import { RCHeader } from '../../shared';
import HomePage from '../home-page';

const ContainerPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <RCHeader title="Re-edit (a client for Reddit)" />
        <HomePage />
      </Container>
      <RCFooter
        title="The End :("
        description="Hope you enjoyed the re-edit client!"
      />
    </>
  );
};

export default ContainerPage;
