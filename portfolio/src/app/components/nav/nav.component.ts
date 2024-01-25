import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'km-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styles: [
    `
      .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-inline: var(--space-xl);
        height: var(--nav-height);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

        &__left {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--space-xl);
        }

        &__links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--space-s);
        }

        &__link {
          color: var(--text-clr);
          text-decoration: none;

          &:hover {
            color: var(--light-primary-clr);
          }

          &--active {
            color: var(--primary-clr);
          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {}
