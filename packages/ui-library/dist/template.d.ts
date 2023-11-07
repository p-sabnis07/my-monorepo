import { VNode } from 'snabbdom';
export type TemplateFunction = (state: any, props: any) => VNode;
export declare const createTemplate: (template: TemplateFunction) => TemplateFunction;
