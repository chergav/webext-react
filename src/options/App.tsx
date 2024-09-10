import { useEffect } from 'react';
import { getURL, getI18nMessage } from '~/shared/browser';

function App() {
	useEffect(() => {
		document.title = getI18nMessage('appName') || '';
	}, []);

	return (
		<main className="text-neutral-900 dark:text-neutral-100">
			<div className="flex w-full flex-col items-center gap-5 p-5">
				<div className="flex flex-col items-center">
					<img alt="ext logo" className="h-16" src={getURL('/src/icons/128.png')} />
					<p className="text-lg">{getI18nMessage('appName')}</p>
				</div>
				<p>Options page</p>
			</div>
		</main>
	);
}

export default App;
