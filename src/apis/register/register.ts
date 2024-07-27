import { NickNameData } from './register.d';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@utils/axios';
import { registKeys } from './register.keys';

/* 닉네임 요청 (GET)
  회원가입에서 사용.
  연속해서 요청할 수 있으므로 캐싱 하면 안됨.
 */
async function getRandomNickname() {
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
