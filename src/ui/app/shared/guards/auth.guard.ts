// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { catchError, map, of } from 'rxjs';
// import { UserService } from '../services/user.service';

// export const AuthGuard: CanActivateFn = () => {
//   const userService = inject(UserService)
//   const router = inject(Router)
//   return userService.isAuthObserve()
//     .pipe(
//       map((res) => res.status === 200 || router.createUrlTree(['/auth'])),
//       catchError(() => of(router.createUrlTree(['/auth'])))
//     )
// }