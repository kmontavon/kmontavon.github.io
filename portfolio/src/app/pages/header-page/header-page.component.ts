import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'km-header-page',
  standalone: true,
  templateUrl: './header-page.component.html',
  styles: [
    `
      .page {
        width: min(1200px, 100% - 4rem);
        margin-inline: auto;
        height: calc(100vh - var(--nav-height) - 4rem);

        &__grid {
          display: grid;
          place-items: center;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          height: 100%;

          &__item {
            padding-inline: var(--space-xl);

            &.page__grid__right img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 50%;
            }
          }
        }

        @media (max-width: 768px) {
          &__grid {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
          }
        }
      }

      .primary-cta {
        margin-top: var(--space-xl);
      }

      .accent__text {
        color: var(--primary-clr);
      }

      .spacer {
        height: var(--space-xl);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPageComponent {}
