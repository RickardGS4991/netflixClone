import { useMemo } from 'react';
import authContainer from '../di/authServices.container';
import type { IAuthViewModel } from '../../viewModel/base/auth.viewmodel';

export const useAuthViewModel = (): IAuthViewModel => {
  return useMemo(() => authContainer.get<IAuthViewModel>('IAuthViewModel'), []);
};