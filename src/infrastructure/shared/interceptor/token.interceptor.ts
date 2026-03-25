import { HttpInterceptorFn } from '@angular/common/http';
import { AUTH_ACCESS_TOKEN } from '@core/auth/application/constant/auth-tokens.constant';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(AUTH_ACCESS_TOKEN);
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  } else {
    return next(req);
  }
}