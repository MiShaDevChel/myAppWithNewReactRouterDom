export const handleError = (error: unknown, textError: string = 'Ошибка') =>
  error instanceof Error ? error.message : typeof error === 'string' ? error : textError
