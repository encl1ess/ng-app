import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  imports: [],
  templateUrl: './thumbnail.html',
  styleUrl: './thumbnail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Thumbnail {
  src = input<string>();
  alt = input<string>();
}
