import React, { useState } from 'react';
import styled from 'styled-components';
import InsuePlannerQuestion from '@components/InsuePlanner/InsuePlannerQuestion';
import InsuePlannerLoading from '@components/InsuePlanner/InsuePlannerLoading';

function InsuePlannerScreen() {
  const titleSize = '4.5rem';
  const SubtitleSize = '2.5rem';
  const paragraphSize = '2rem';

  const [loading, setLoading] = useState<boolean>(false);
  return (
    <Container>
      {loading ? (
        <InsuePlannerLoading SubtitleSize={SubtitleSize} />
      ) : (
        <InsuePlannerQuestion
          titleSize={titleSize}
          SubtitleSize={SubtitleSize}
          paragraphSize={paragraphSize}
          setLoading={setLoading}
        />
      )}
    </Container>
  );
}

export default InsuePlannerScreen;

const Container = styled.div`
  padding: 10rem 36rem;
  display: flex;
  flex-direction: column;
`;
