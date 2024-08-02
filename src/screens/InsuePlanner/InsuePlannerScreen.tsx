import React, { useState } from 'react';
import styled from 'styled-components';
import InsuePlannerQuestion from '@components/InsuePlanner/InsuePlannerQuestion';
import InsuePlannerLoading from '@components/InsuePlanner/InsuePlannerLoading';

function InsuePlannerScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  return <Container> {loading ? <InsuePlannerLoading /> : <InsuePlannerQuestion setLoading={setLoading} />}</Container>;
}

export default InsuePlannerScreen;

const Container = styled.div`
  padding: 10rem 36rem;
  display: flex;
  flex-direction: column;
`;
