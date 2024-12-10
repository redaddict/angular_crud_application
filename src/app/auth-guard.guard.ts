import { CanActivateChildFn, CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateChildFn = (route, state) => {
  return true;
};
