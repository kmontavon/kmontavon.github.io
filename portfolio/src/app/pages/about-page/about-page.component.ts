import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'km-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styles: [
    `
      .page {
        width: min(1200px, 100% - 4rem);
        margin-inline: auto;
        height: calc(100vh - var(--nav-height) - 4rem);

        &__grid {
          display: grid;
          place-items: center;
          grid-template-columns: 1fr 2fr;
          grid-template-rows: 1fr;
          height: 100%;

          &__item {
            padding-inline: var(--space-xl);
          }
        }

        @media (max-width: 768px) {
          &__grid {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {}
