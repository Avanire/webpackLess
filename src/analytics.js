import * as $ from 'jquery';

function createAnalytics() {
    let counter = 0;
    let destroyed = false;

    const listiner = () => counter++;

    $(document).on('click', listiner)

    return {
        destroy() {
            $(document).off('click', listiner);
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