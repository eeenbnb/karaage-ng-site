import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { CardOriginArtricComponent } from './card-origin-artric/card-origin-artric.component';
import { CardOriginModule } from '../card-origin/card-origin.module'


export default {
  title: 'karaage/card-origin-artric',
  component: CardOriginArtricComponent,
  props: CardOriginArtricComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        RouterTestingModule,
        CardOriginModule
      ],
    }),
  ],
} as Meta;

export const Normal:Story<CardOriginArtricComponent> = (args:CardOriginArtricComponent) => ({});
Normal.args = {
  title: "Normal texts"
}
