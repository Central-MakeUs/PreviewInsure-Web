import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import { HealthRequest, HealthResponse, HealthTestResponse } from './health.d';
import { healthKeys } from './health.keys';

/*
  API를 엔드포인트를 기준으로 관심사 분리.
  여기서 사용되는 Type들은 types폴더에 (파일명)+Type.ts에서 관리.
*/

/*
  *캐싱 작성법*
  기본 작동 순서 : inactive > fetching > fresh > stale
  staleTime : 갱신 지연 시간. fresh에 존재하는 시간을 설정. 기본 0.
  gcTime : 가비지 타임. 메모리에 존재하는 시간. 기본 5분. 시간이 끝나면 캐시가 사라짐.
  
  - staleTime보다 gcTime이 길어여 한다.
  - queryKey를 기준으로 캐싱을 관리한다.
*/

/*
  *Query의 refetch

  refetchOnMount : 기본 true. 기본적으로 컴포넌트가 Mount되면 요청이 실행된다. //true, false, 'always'
    'always': staleTime과 상관없이 상항 refetch

  정기적으로 데이터를 polling. (실시간 동기화)
  refetchInterval : 기본 false. 2000 > 2초마다 fetching

  클릭시 데이터 가져오기
  enabled : 서버상태를 최신화할 조건. 기본 true. > false로 바꿈.
  onClick =  ()=>query.refetch() 
*/

/* 헬스 체크 (GET)
  테스트 api
  useQuery는 GET함수에서만 사용된다.
 */
async function getHealthData() {
  const response = await axiosInstance.get<APIResponse<HealthTestResponse>>('/health');
  return response.data.data;
}

export const useGetHealthQuery = () => {
  const queryClient = useQueryClient();
  const query = useQuery<HealthTestResponse>({
    queryKey: healthKeys.info(),
    queryFn: getHealthData,
    staleTime: 10 * 1000, // 10초
    gcTime: 30 * 1000, // 30초
    // enabled: false,
    initialData: () => {
      const cachedHealth = queryClient.getQueryData<HealthTestResponse>(['health']);

      return cachedHealth;
    },
  });

  return { healthQuery: query };
};

/* 헬스체크 (POST)
  테스트 api
  useMutation은 POST, PUT, PATCH, DELETE에서 사용된다.
 */
async function postHealthData(data: HealthRequest): Promise<HealthResponse> {
  const response = await axiosInstance.post<APIResponse<HealthResponse>>('/health', data);
  return response.data.data;
}

export function useHealthMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    // mutation에는 querykey를 작성하지 않는다.
    mutationFn: (data: HealthRequest) => postHealthData(data),
    onSuccess: (newData) => {
      // ['health', 'detail']인 캐시 업데이트
      queryClient.setQueryData(healthKeys.detail(), newData);

      // 연관된 GET요청을 update
      // GET요청을 다시 보내면 POST요청 후에 GET요청이 무조건 발생. 따라서 불필요한 GET 대신 메모리상의 쿼리에 데이터를 업데이트.
      queryClient.setQueryData(healthKeys.all, () => {
        isHealthCheck: false;
      });
    },
    onError: () => {},
  });

  return { healthMutation: mutation };
}
