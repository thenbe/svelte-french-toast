import { expect, test } from '@playwright/experimental-ct-svelte';
import { mountToast } from './boilerplate/mount-toast';

test.use({ viewport: { width: 500, height: 500 } });

test('should render', async ({ mount }) => {
	const component = await mountToast({ mount, toastProps: ['Hello world!'] });
	await expect(component.getByText('Hello world!')).toBeVisible();
});
