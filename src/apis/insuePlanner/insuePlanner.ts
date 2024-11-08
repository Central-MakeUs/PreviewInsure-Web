import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import {
  plannerPOSTRequest,
  plannerPOSTResponse,
  QuestionTitleData,
  QuestionDetailData,
  plannerPATCHRequest,
} from './insuePlanner.d';
import { insuePlannerKeys, questionTitleKeys, questionDetailKeys } from './insuePlanner.keys';
import { useStore } from '@stores/useStore';

// POST question
async function postInsuePlannerQuestion(data: plannerPOSTRequest): Promise<plannerPOSTResponse> {
  const { accessToken } = useStore.getState();
  // console.log(accessToken);
  const response = await axiosInstance.post<APIResponse<plannerPOSTResponse>>('/quesion', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.data;
}

export function useInsuePlannerMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: plannerPOSTRequest) => postInsuePlannerQuestion(data),
    onSuccess: (newData) => {
      // queryClient.setQueryData(insuePlannerKeys.detail(), newData);
      //   console.log('post insuePlanner question success', newData);
      // 연관된 GET요청을 update
      queryClient.invalidateQueries({ queryKey: questionTitleKeys.detail() });
    },
    onError: (e: any) => {
      console.log(e);
    },
  });

  return { insuePlannerMutation: mutation };
}

// PATCH question

async function patchInsuePlannerQuestion(data: plannerPATCHRequest): Promise<plannerPOSTResponse> {
  const { accessToken } = useStore.getState();
  const response = await axiosInstance.patch<APIResponse<plannerPOSTResponse>>('/question', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.data;
}

export function useInsuePlannerPatchMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: plannerPATCHRequest) => patchInsuePlannerQuestion(data),
    onSuccess: (newData) => {
      queryClient.setQueryData(insuePlannerKeys.detail(), newData);
      // 연관된 GET요청을 update
      // queryClient.invalidateQueries({ queryKey: questionTitleKeys.detail() });
    },
    onError: (e: any) => {
      console.log(e);
    },
  });

  return { insuePlannerPatchMutation: mutation };
}

// GET QuestionTitle

async function getQuestionTitle() {
  const { accessToken } = useStore.getState();
  const response = await axiosInstance.get<APIResponse<QuestionTitleData>>('/quesion', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.data;
}

export function useGetQuestionTitleQuery() {
  const query = useQuery<QuestionTitleData>({
    queryKey: questionTitleKeys.detail(),
    queryFn: getQuestionTitle,
  });
  return { questionTitleQuery: query };
}

// GET QuestionDetail
export async function getQuestionDetail(qnaBoardId: number) {
  const { accessToken } = useStore.getState();
  const response = await axiosInstance.get<APIResponse<QuestionDetailData>>(
    `/question/detail?qnaBoardId=${qnaBoardId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return response.data.data;
}

export function useGetQuestionDetailQuery(qnaBoardId: number) {
  const query = useQuery<QuestionDetailData>({
    queryKey: questionDetailKeys.detail(qnaBoardId),
    queryFn: () => getQuestionDetail(qnaBoardId),
  });
  return { questionDetailQuery: query };
}
