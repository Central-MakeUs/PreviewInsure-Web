export const insuePlannerKeys = {
  all: ['insuePlannerKeys'] as const,
  info: () => [...insuePlannerKeys.all, 'info'] as const,
  detail: () => [...insuePlannerKeys.all, 'detail'] as const,
  list: (page: number) => [...insuePlannerKeys.all, 'list', page] as const,
};

//get

export const questionTitleKeys = {
  all: ['questionTitle'] as const,
  detail: () => [...questionTitleKeys.all, 'detail'] as const,
};

// 질문 디테일 -> 캐싱 하면 안됨
export const questionDetailKeys = {
  all: ['questionDetail'] as const,
  detail: (qnaBoardId: number) => [...questionDetailKeys.all, 'detail', qnaBoardId] as const,
};
