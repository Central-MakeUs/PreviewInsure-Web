import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import { AgeRequest, AgeResponse, BoardRequest, BoardResponse } from './insueboarding.d';
import { ageKeys, boardKeys } from './insueboarding.keys';
import { useStore } from '@stores/useStore';

// age patch

export async function patchAgeData(data: AgeRequest): Promise<AgeResponse> {
  const { accessToken } = useStore.getState();
  const response = await axiosInstance.patch<APIResponse<AgeResponse>>('/register/age', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  return response.data;
}

export function useAgeMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    // mutation에는 querykey를 작성하지 않는다.
    mutationFn: (data: AgeRequest) => patchAgeData(data),
    onSuccess: (newData) => {
      // ['age', 'detail']인 캐시 업데이트
      queryClient.setQueryData(ageKeys.detail(), newData);

      // 연관된 GET요청을 update
      // GET요청을 다시 보내면 POST요청 후에 GET요청이 무조건 발생. 따라서 불필요한 GET 대신 메모리상의 쿼리에 데이터를 업데이트.
      //   queryClient.setQueryData(ageKeys.all, () => {
      //     isAgeCheck: false;
      //   });
    },
    onError: () => {
      console.error('useAgeMutation 에러 발생');
    },
  });

  return { ageMutation: mutation };
}

// gender, insures patch

export async function patchBoardData(data: BoardRequest): Promise<BoardResponse> {
  const { accessToken } = useStore.getState();
  const response = await axiosInstance.patch<APIResponse<BoardResponse>>('/register/board', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log('board', response.data);
  return response.data;
}

export function useBoardMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    // mutation에는 querykey를 작성하지 않는다.
    mutationFn: (data: BoardRequest) => patchBoardData(data),
    onSuccess: (newData) => {
      // ['board', 'detail']인 캐시 업데이트
      queryClient.setQueryData(boardKeys.detail(), newData);

      // 연관된 GET요청을 update
      // GET요청을 다시 보내면 POST요청 후에 GET요청이 무조건 발생. 따라서 불필요한 GET 대신 메모리상의 쿼리에 데이터를 업데이트.
      //   queryClient.setQueryData(ageKeys.all, () => {
      //     isAgeCheck: false;
      //   });
    },
    onError: (e: any) => {
      console.error('useBoardMutation 에러 발생');
      console.log(e.response?.data.message);
    },
  });

  return { boardMutation: mutation };
}
