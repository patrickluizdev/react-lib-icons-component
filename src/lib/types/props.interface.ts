import { HTMLAttributes, HtmlHTMLAttributes } from 'react';

export type ColorsAsHex = `#${string}`;
export type PixelSizes = `${number}px`;

export interface IElementMeasures {
	height: PixelSizes;
	width: PixelSizes;
}

export type ComponentChildren = {
	children: React.ReactNode;
} & HTMLAttributes<SVGElement>;

export interface IconDefaultProps extends HTMLAttributes<SVGElement> {}
