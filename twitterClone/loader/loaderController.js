import { buildLoader} from './loaderView.js'
export const loaderController = ($loader) => {
    const showLoader = () => {
        $loader.innerHTML = buildLoader();
    };

    const hideLoader = () => {
        $loader.innerHTML = '';
    }

    return {
        showLoader,
        hideLoader
    }
}


