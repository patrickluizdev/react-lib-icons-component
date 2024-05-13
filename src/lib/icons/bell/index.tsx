import { FC, SVGAttributes } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DefaultSVG } from '../../default-svg/DefaultSVG';

export const Bell: FC = ({
	fill = '#000000',
	viewBox = '0 0 24 24',
	stroke = '#000000',
	height = `${240}px`,
	width = `${240}px`,
	id,
}: Partial<SVGAttributes<any>>) => {
	const randomId = id || uuidv4();
	return (
		<DefaultSVG
			viewBox={viewBox}
			fill={fill}
			height={height}
			width={width}>
			<g
				id={`${randomId}_bgCarrier`}
				strokeWidth='0'
			/>
			<g
				id={`${randomId}_tracerCarrier`}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<g id={randomId}>
				{' '}
				<path
					d='M15.0002 19C15.0002 20.6569 13.6571 22 12.0002 22C10.3434 22 9.00025 20.6569 9.00025 19M13.7968 6.23856C14.2322 5.78864 14.5002 5.17562 14.5002 4.5C14.5002 3.11929 13.381 2 12.0002 2C10.6195 2 9.50025 3.11929 9.50025 4.5C9.50025 5.17562 9.76825 5.78864 10.2037 6.23856M2.54707 8.32296C2.53272 6.87161 3.3152 5.51631 4.57928 4.80306M21.4534 8.32296C21.4678 6.87161 20.6853 5.51631 19.4212 4.80306M18.0002 11.2C18.0002 9.82087 17.3681 8.49823 16.2429 7.52304C15.1177 6.54786 13.5915 6 12.0002 6C10.4089 6 8.88283 6.54786 7.75761 7.52304C6.63239 8.49823 6.00025 9.82087 6.00025 11.2C6.00025 13.4818 5.43438 15.1506 4.72831 16.3447C3.92359 17.7056 3.52122 18.3861 3.53711 18.5486C3.55529 18.7346 3.58876 18.7933 3.73959 18.9036C3.87142 19 4.53376 19 5.85844 19H18.1421C19.4667 19 20.1291 19 20.2609 18.9036C20.4117 18.7933 20.4452 18.7346 20.4634 18.5486C20.4793 18.3861 20.0769 17.7056 19.2722 16.3447C18.5661 15.1506 18.0002 13.4818 18.0002 11.2Z'
					stroke={stroke}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>{' '}
			</g>
		</DefaultSVG>
	);
};
