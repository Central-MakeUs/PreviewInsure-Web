export const ageKeys = {
  all: ['age'] as const,
  info: () => [...ageKeys.all, 'info'] as const,
  detail: () => [...ageKeys.all, 'detail'] as const,
  list: (page: number) => [...ageKeys.all, 'list', page] as const,
};

export const boardKeys = {
  all: ['board'] as const,
  info: () => [...boardKeys.all, 'info'] as const,
  detail: () => [...boardKeys.all, 'detail'] as const,
  list: (page: number) => [...boardKeys.all, 'list', page] as const,
};
