import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import { plannerPOSTRequest, plannerPOSTResponse, QuestionTitleData, QuestionDetailData } from './insuePlanner.d';
import { insuePlannerKeys, questionTitleKeys, questionDetailKeys } from './insuePlanner.keys';

// POST question
async function postInsuePlannerQuestion(data: plannerPOSTRequest): Promise<plannerPOSTResponse> {
  const response = await axiosInstance.post<APIResponse<plannerPOSTResponse>>('/quesion', data);
  //   console.log(response);
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

// GET QuestionTitle

async function getQuestionTitle() {
  const response = await axiosInstance.get<APIResponse<QuestionTitleData>>('/quesion');
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
  const response = await axiosInstance.get<APIResponse<QuestionDetailData>>(
    `/question/detail?qnaBoardId=${qnaBoardId}`,
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
