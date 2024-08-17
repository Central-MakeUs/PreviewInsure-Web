import { useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import { recommendRequest, recommendResponse } from './insuemap.d';
import { useStore } from '@stores/useStore';

/* 인슈 맵 디테일 (GET)
  보험 종류에 따른 현재 사용자의 관심보험, 등록보험 정보, 추천보험 리스트
 */
async function getInsueDetail(data: recommendRequest) {
  const { accessToken } = useStore.getState();
  const response = await axiosInstance.get<APIResponse<recommendResponse>>('/recommend', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: data,
  });
  return response.data.data;
}

export const useInsueDetailQuery = (data: recommendRequest) => {
  // const queryClient = useQueryClient();
  const query = useQuery<recommendResponse>({
    queryKey: ['insueMapDetail', data],
    queryFn: () => getInsueDetail(data),
    // staleTime: 10 * 1000, // 10초
    // gcTime: 30 * 1000, // 30초
    // enabled: false,
    //   initialData: () => {
    //     const cachedHealth = queryClient.getQueryData<HealthTestResponse>(['health']);

    //     return cachedHealth;
    //   },
  });

  return { detailQuery: query };
};
