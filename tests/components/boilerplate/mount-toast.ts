import App from './App.svelte';
import type { Mount, ToastProps } from './types';

/** Helper function to mount a toast component with a given set of props. */
export const mountToast = async ({
	mount,
	toastProps
}: {
	mount: Mount;
	/** A tuple of props to pass to the `toast()` function. */
	toastProps: ToastProps;
}) => {
	const component = await mount(App, { props: { toastProps: toastProps } });
	return component;
};
