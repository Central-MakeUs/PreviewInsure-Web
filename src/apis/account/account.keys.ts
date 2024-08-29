export const accountKeys = {
  all: ['account'] as const,
  info: () => [...accountKeys.all, 'info'] as const,
  favorit: () => [...accountKeys.all, 'favorit'] as const,
  insurance: () => [...accountKeys.all, 'insurance'] as const,
};
