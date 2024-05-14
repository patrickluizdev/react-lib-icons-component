import { HTMLAttributes } from 'react';

export type ColorsAsHex = `#${string}`;
export type PixelSizes = `${number}px`;

export type ElementMeasures = {
	height: PixelSizes;
	width: PixelSizes;
};

export type SVGProps = {
	fill?: ColorsAsHex;
	stroke?: ColorsAsHex;
	id?: string;
	viewBox: string;
	children: React.ReactNode;
} & ElementMeasures;

export type ComponentChildren = {
	children: React.ReactNode;
} & HTMLAttributes<SVGElement>;
