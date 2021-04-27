import { Story, Meta } from '@storybook/angular';
import { CardOriginComponent } from './card-origin/card-origin.component';

export default {
  title: 'karaage/card-origin',
  component: CardOriginComponent,
  props: CardOriginComponent
} as Meta;

export const Normal:Story<CardOriginComponent> = (args:CardOriginComponent) => ({});
export const InnerText:Story<CardOriginComponent> = (args:CardOriginComponent) => ({
  template: "<card-origin>content</card-origin>",
});
