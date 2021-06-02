function createAnalytics() {
    let counter = 0;
    let destroyed = false;

    const listiner = () => counter++;

    document.addEventListener('click', listiner)

    return {
        destroy() {
            document.removeEventListener('click', listiner);
            isDestroyed = true;
        },

        getClicks() {
            if (destroyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter;
        }
    }
}

window.analytics = createAnalytics();