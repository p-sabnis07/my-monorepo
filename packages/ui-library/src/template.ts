import { VNode } from 'snabbdom';

export type TemplateFunction = (state: any, props: any) => VNode;

export const createTemplate = (template: TemplateFunction) => template;
