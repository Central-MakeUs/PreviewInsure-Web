// 회원 탈퇴
import { useStore } from '@stores/useStore';
import axiosInstance from '@utils/axios';

export async function deleteAccount() {
  const { accessToken } = useStore();
  const response = await axiosInstance.delete('/account', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log('회원 탈퇴');
  return response.data;
}
