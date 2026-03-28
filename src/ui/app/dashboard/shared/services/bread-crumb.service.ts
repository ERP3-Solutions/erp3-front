import { effect, inject, Injectable, signal } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BreadCrumbItem } from '../interfaces/bread-brumb-item.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private router = inject(Router)
  public routerEvents = toSignal(this.router.events);
  public breadCrumbs = signal<BreadCrumbItem[]>([]);

  constructor() {
    effect(() => {
      const event = this.routerEvents();
      if (event && event instanceof NavigationEnd) {
        const routes = this.buildBreadcrumbs(this.router.routerState.snapshot.root);
        this.breadCrumbs.set(routes);
      }
    })
  }

  private buildBreadcrumbs(
    route: ActivatedRouteSnapshot,
    url = '',
    breadcrumbs: BreadCrumbItem[] = []
  ): BreadCrumbItem[] {
    const routePath = route.url.map(segment => segment.path).join('/');
    if (routePath) {
      url += '/' + routePath;
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
}