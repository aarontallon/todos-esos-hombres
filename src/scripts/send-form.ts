/**
 * Envía un formulario a Netlify Forms (POST a "/") sin recargar la página
 * y muestra el resultado en el elemento `.form-status` del propio formulario.
 */
export async function sendForm(form: HTMLFormElement, okKey: string) {
    const t = (key: string) => (window as any).TEH_i18n?.t(key) ?? '';
    const status = form.querySelector<HTMLElement>('.form-status');
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');

    if (button) button.disabled = true;
    if (status) status.textContent = '';

    try {
        const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body,
        });
        if (!response.ok) throw new Error(String(response.status));
        form.reset();
        if (status) status.textContent = t(okKey);
    } catch {
        if (status) status.textContent = t('form.error');
    } finally {
        if (button) button.disabled = false;
    }
}
