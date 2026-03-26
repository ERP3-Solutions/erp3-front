import { HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { AUTH_ACCESS_TOKEN } from '@core/shared/application/constant/auth-tokens.constant';
import { catchError, throwError } from 'rxjs';
import { SessionErrors } from '@core/shared/application/errors/session.errors';
import { SESSION_STORAGE_REPOSITORY_TOKEN } from '@data/shared/token/out/session-storage-repository.token';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const storage = inject(SESSION_STORAGE_REPOSITORY_TOKEN);
  const token = storage.get(AUTH_ACCESS_TOKEN);
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError(() => SessionErrors.SESSION_EXPIRED);
        }

        return throwError(() => error);
      })

    );
  } else {
    return next(req);
  }
}