import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'c-dashboard-sidebar-group',
  templateUrl: './sidebar-group.component.html',
  imports: [
    CommonModule,
  ],
})
export class CDashboardSidebarGroup {
  titulo = input.required<string>();
  open = input<boolean>(true);

  tituloInicial = computed(() => this.titulo().charAt(0));
}
