import { useInfiniteQuery } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import { questionRequest, questionResponse } from './question.d';
import { useStore } from '@stores/useStore';

/*
    QNA 게시판 질문 리스트 (GET)
    필터링 : 카테고리 ( 1개만 선택 가능 )
*/
async function getQuestionList({ pageParam = 1 }: { pageParam?: number }, data: questionRequest) {
  const { accessToken } = useStore.getState();
  const response = await axiosInstance.get<APIResponse<questionResponse>>('/questions', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      ...data,
      page: pageParam,
    },
  });
  return response.data.data;
}

export const useQuestionInfiniteQuery = (data: questionRequest) => {
  const query = useInfiniteQuery({
    queryKey: ['qna', data],
    queryFn: ({ pageParam = 0 }) => getQuestionList({ pageParam }, data),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.last) {
        return lastPage.number + 1; // 다음 페이지
      }
      return undefined; // 마지막 페이지
    },
  });

  return { questionQuery: query };
};
