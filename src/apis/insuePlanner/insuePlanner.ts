import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import { plannerPOSTRequest, plannerPOSTResponse } from './insuePlanner.d';
import { insuePlannerKeys } from './insuePlanner.keys';

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
      queryClient.setQueryData(insuePlannerKeys.detail(), newData);
      //   console.log('post insuePlanner question success', newData);
    },
    onError: (e: any) => {
      console.log(e);
    },
  });

  return { insuePlannerMutation: mutation };
}
