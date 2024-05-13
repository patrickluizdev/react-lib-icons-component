import { FC, SVGAttributes } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DefaultSVG } from '../../default-svg/DefaultSVG';

export const Star: FC = ({
	fill = '#000000',
	viewBox = '-0.04 0 31.793 31.793',
	id,
	height = `${240}px`,
	width = `${240}px`,
}: Partial<SVGAttributes<any>>) => {
	const randomId = id || uuidv4();
	return (
		<DefaultSVG
			viewBox={viewBox}
			height={height}
			width={width}
			fill={fill}>
			<g
				id={`${randomId}_bgCarrier`}
				strokeWidth='0'
			/>
			<g
				id={`${randomId}_bgCarrier`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<g id={randomId}>
				{' '}
				<g transform='translate(-609.503 -130.759)'>
					{' '}
					<path d='M622.914,132.759a11.41,11.41,0,1,1-11.411,11.41,11.424,11.424,0,0,1,11.411-11.41m0-2a13.41,13.41,0,1,0,13.41,13.41,13.41,13.41,0,0,0-13.41-13.41Z' />{' '}
					<path d='M640.208,162.552a1,1,0,0,1-.707-.292L631.64,154.4a1,1,0,1,1,1.414-1.414l7.861,7.86a1,1,0,0,1-.707,1.707Z' />{' '}
				</g>{' '}
			</g>
		</DefaultSVG>
	);
};
