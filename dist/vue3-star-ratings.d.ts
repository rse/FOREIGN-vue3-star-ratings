import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';

declare const _default: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (v: number) => any;
}, string, PublicProps, Readonly<Props> & Readonly<{
"onUpdate:modelValue"?: ((v: number) => any) | undefined;
}>, {
modelValue: number;
numberOfStars: number;
starColor: string;
inactiveColor: string;
starSize: number;
customSvg: typeof _default_2;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
starsContainer: HTMLDivElement;
}, HTMLDivElement>;
export default _default;

declare const _default_2: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, SVGSVGElement>;

declare interface Props {
    modelValue?: number;
    numberOfStars?: number;
    starColor?: string;
    inactiveColor?: string;
    starSize?: number;
    disableClick?: boolean;
    customSvg?: typeof _default_2;
}

export { }
