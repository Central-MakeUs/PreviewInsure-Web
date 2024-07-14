import React from 'react';
import ReactLoading from 'react-loading';
import type { LoadingProps } from '@/types/commonComponents';

function Loading({ type, color, width, height }: LoadingProps) {
  return <ReactLoading type={type} color={color} height={height} width={width} />;
}

export default Loading;
