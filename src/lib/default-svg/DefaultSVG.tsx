import { SVGProps } from '../types';

export const DefaultSVG = ({ children, ...rest }: SVGProps) => {
	return <svg {...rest}>{children}</svg>;
};
