import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { BreadCrumbItem } from '../interfaces/bread-brumb-item.interface';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private router = inject(Router)
  private breadcrumbsSubject = new BehaviorSubject<BreadCrumbItem[]>([]);
  public breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const breadcrumbs = this.buildBreadcrumbs(this.router.routerState.snapshot.root);
      this.breadcrumbsSubject.next(breadcrumbs);
    });
  }

  private buildBreadcrumbs(
    route: ActivatedRouteSnapshot,
    url = '',
    breadcrumbs: BreadCrumbItem[] = []
  ): BreadCrumbItem[] {

    // Construir la URL correctamente
    const routePath = route.url.map(segment => segment.path).join('/');
    if (routePath) {
      url += (url ? '/' : '') + routePath;
    }

    if (route.data?.['breadcrumb']) {
      const label = route.data['breadcrumb'];

      const last = breadcrumbs[breadcrumbs.length - 1];
      if (!last || last.label !== label) {
        breadcrumbs.push({
          label,
          url: url || '/dashboard'
        });
      }
    }

    if (route.firstChild) {
      return this.buildBreadcrumbs(route.firstChild, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  getCurrentBreadcrumbs(): BreadCrumbItem[] {
    return this.breadcrumbsSubject.value;
  }
}