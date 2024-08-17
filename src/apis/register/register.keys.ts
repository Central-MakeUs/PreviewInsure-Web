export const registKeys = {
  all: ['regist'] as const,
  nickname: () => [...registKeys.all, 'nickname'] as const,
};

export const patchNicknameKeys = {
  all: ['patch'] as const,
  nickname: () => [...registKeys.all, 'nickname'] as const,
};
