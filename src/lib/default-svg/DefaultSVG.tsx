import React, { SVGAttributes } from 'react';

export const DefaultSVG = ({ children, ...rest }: SVGAttributes<any>) => {
	return <svg {...rest}>{children}</svg>;
};
