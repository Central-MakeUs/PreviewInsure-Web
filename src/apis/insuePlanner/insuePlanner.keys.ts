export const insuePlannerKeys = {
  all: ['insuePlannerKeys'] as const,
  info: () => [...insuePlannerKeys.all, 'info'] as const,
  detail: () => [...insuePlannerKeys.all, 'detail'] as const,
  list: (page: number) => [...insuePlannerKeys.all, 'list', page] as const,
};
