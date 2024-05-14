import * as Icons from './lib';

const iconNames = Object.keys(Icons) as Array<keyof typeof Icons>;
export function App() {
	return (
		<div style={{ background: '#C0C0C0' }}>
			{iconNames.map(iconName => {
				const IconComponent = Icons[iconName];
				return IconComponent ? <IconComponent key={`icons-component-${iconName}`} /> : null;
			})}
		</div>
	);
}
