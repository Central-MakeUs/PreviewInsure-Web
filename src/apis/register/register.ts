import { NickNameData, patchNickNameData } from './register.d';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import { registKeys, patchNicknameKeys } from './register.keys';
import { useStore } from '@stores/useStore';

/* 닉네임 요청 (GET)
  회원가입에서 사용.
  연속해서 요청할 수 있으므로 캐싱 하면 안됨.
 */
export async function getRandomNickname() {
  const response = await axiosInstance.get<APIResponse<NickNameData>>('/register/nickname');
  return response.data.data;
}

export function useGetRandomNicknameQuery() {
  const query = useQuery<NickNameData>({
    queryKey: registKeys.nickname(),
    queryFn: getRandomNickname,
  });
  return { nickNameQuery: query };
}

// patch nickname

export async function patchNickname(data: patchNickNameData) {
  const { temporaryToken } = useStore.getState();
  const response = await axiosInstance.patch('/register/nickname', data, {
    headers: {
      Authorization: `Bearer ${temporaryToken}`,
    },
  });
  console.log(response);
  return response.data.data;
}

export function useNicknameMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: patchNickNameData) => patchNickname(data),
    onSuccess: (newData) => {
      // ['board', 'detail']인 캐시 업데이트
      queryClient.setQueryData(patchNicknameKeys.nickname(), newData);
    },
    onError: (e: any) => {
      console.error('useNicknameMutation 에러 발생');
      console.log(e);
    },
  });

  return { nicknameMutation: mutation };
}
