import { useState } from 'react';
import { getURL, getI18nMessage } from '~/shared/browser';

function App() {
	const [isShow, setIsShow] = useState(true);

	function close() {
		setIsShow(false);
	}

	return (
		<div
			className="
				fixed
				bottom-0
				right-0
				z-50
				m-5
				flex
				items-center
				text-neutral-900
				dark:text-neutral-100
			"
		>
			{isShow
			&& (
				<div
					className="
						flex
						flex-col
						items-center
						gap-4
						rounded-xl
						border
						border-neutral-300
						bg-white
						p-4
						shadow-xl
						dark:border-neutral-700
						dark:bg-neutral-900
					"
				>
					<div className="flex flex-col items-center">
						<img alt="ext logo" className="h-16" src={getURL('/src/icons/128.png')} />
						<p className="text-lg">{getI18nMessage('appName')}</p>
					</div>
					<p>Content script</p>
					<button
						className="
							rounded-full
							bg-neutral-200
							px-4
							py-2
							transition-colors
							hover:bg-neutral-300
							dark:bg-neutral-700
							dark:hover:bg-neutral-600
						"
						title="Close"
						type="button"
						onClick={close}
					>
						Close
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
