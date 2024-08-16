import { UserInfoResponse, InsueItem } from './account.d';

// 회원 탈퇴
import { useStore } from '@stores/useStore';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';

export async function deleteAccount() {
  const { accessToken } = useStore.getState();
  const response = await axiosInstance.delete('/account', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log('회원 탈퇴');
  return response.data;
}

// 회원 정보 GET
async function getAccountInfo() {
  const { accessToken } = useStore.getState();
  const response = await axiosInstance.get<APIResponse<UserInfoResponse>>('/account', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.data;
}

export const useAccountInfoQuery = () => {
  // const queryClient = useQueryClient();
  const query = useQuery<UserInfoResponse>({
    queryKey: ['account', 'info'],
    queryFn: () => getAccountInfo(),
    // staleTime: 10 * 1000, // 10초
    // gcTime: 30 * 1000, // 30초
    // enabled: false,
    //   initialData: () => {
    //     const cachedHealth = queryClient.getQueryData<HealthTestResponse>(['health']);

    //     return cachedHealth;
    //   },
  });

  return { accountQuery: query };
};

// 내가 가입한 보험 정보 GET
async function getInsueList() {
  const { accessToken } = useStore.getState();
  const response = await axiosInstance.get<APIResponse<InsueItem[]>>('/account/insurances', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.data;
}

export const useInsueListQuery = () => {
  // const queryClient = useQueryClient();
  const query = useQuery<InsueItem[]>({
    queryKey: ['account', 'insurances'],
    queryFn: () => getInsueList(),
    // staleTime: 10 * 1000, // 10초
    // gcTime: 30 * 1000, // 30초
    // enabled: false,
    //   initialData: () => {
    //     const cachedHealth = queryClient.getQueryData<HealthTestResponse>(['health']);

    //     return cachedHealth;
    //   },
  });

  return { insurancesQuery: query };
};
