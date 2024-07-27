/*
  query key
  현재 도메인에서 사용될 query key를 관리한다.
  query key의 중복을 피하고, 확장을 위하여 계층적으로 생성.
  key는 string으로 해쉬되어 관리된다. undefined값이 들어가면 없는것으로 간주되니, 같은 해쉬가 생성되지 않도록 유의.
*/

export const healthKeys = {
  all: ['health'] as const,
  info: () => [...healthKeys.all, 'info'] as const,
  detail: () => [...healthKeys.all, 'detail'] as const,
  list: (page: number) => [...healthKeys.all, 'list', page] as const,
};
