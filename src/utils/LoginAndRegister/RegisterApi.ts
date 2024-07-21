import axiosInstance from '@utils/axios';

export async function getRandomNickname() {
  return await axiosInstance.get('/register/nickname').then((res) => res.data);
}
