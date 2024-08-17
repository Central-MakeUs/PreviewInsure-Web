import { QueryCache, QueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

const queryClient = new QueryClient({
  // 기본 옵션 설정
  defaultOptions: {
    queries: {
      // GET 요청
      retry: 0, // 실패 시 재시도 횟수. 기본으로 3번 요청을 보냄.
      refetchOnWindowFocus: false, // 창이 포커스될 때 리패치하지 않음
    },
    mutations: {
      // POST, PUT, PATH, DELETE
      onError: (error: any) => {
        // 뮤테이션에서 에러 발생 시 처리할 로직
        console.error('Mutation Error:', error);
      },
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.error(console.log('ApiError: ', error));
    },
  }),
});

export default queryClient;
