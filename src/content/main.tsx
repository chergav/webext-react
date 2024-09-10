import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
// @ts-expect-error ...
import css from '~/content/index.css?inline';

const customElement = document.createElement(__NAME__);
const shadowRoot = document.createElement('div');
const shadowStyle = document.createElement('style');
const shadowDOM = customElement.attachShadow({ mode: 'open' }) || customElement;
shadowStyle.textContent = css;
shadowDOM.appendChild(shadowStyle);
shadowDOM.appendChild(shadowRoot);
document.body.appendChild(customElement);

createRoot(shadowRoot).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
