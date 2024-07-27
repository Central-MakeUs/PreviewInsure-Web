export const registKeys = {
  all: ['regist'] as const,
  nickname: () => [...registKeys.all, 'nickname'] as const,
};
