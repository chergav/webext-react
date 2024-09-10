import { useEffect } from 'react';
import { getURL, getI18nMessage, openOptionsPage } from '~/shared/browser';

function App() {
	useEffect(() => {
		document.title = getI18nMessage('appName') || '';
	}, []);

	return (
		<main
			className="
				flex
				flex-col
				items-center
				text-neutral-900
				dark:text-neutral-100
			"
		>
			<div className="flex w-full flex-col items-center gap-5 p-5">
				<div className="flex flex-col items-center">
					<img alt="ext logo" className="h-16" src={getURL('/src/icons/128.png')} />
					<p className="text-lg">{getI18nMessage('appName')}</p>
				</div>
				<p>Popup page</p>
				<button
					className="
						w-fit
						rounded-full
						bg-neutral-200
						px-4
						py-2
						transition-colors
						hover:bg-neutral-300
						dark:bg-neutral-700
						dark:hover:bg-neutral-600
					"
					type="button"
					onClick={openOptionsPage}
				>
					Open options page
				</button>
			</div>
		</main>
	);
}

export default App;
