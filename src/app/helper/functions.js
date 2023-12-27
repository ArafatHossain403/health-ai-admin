import Swal from "sweetalert2";

export const getApiUrl = () => {
    let url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    url = cleanEndSlash(url);
    return url;
}

export function cleanMultiSlash(endpoint, replaceWith = '/') {
    endpoint = endpoint.replace(/\/{2,}/g, replaceWith);
    return endpoint;
}

export function cleanStartingSlash(endpoint) {
    endpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
    return endpoint;
}

export function cleanEndSlash(endpoint) {
    endpoint = endpoint.endsWith('/') ? endpoint.substring(0, endpoint.length - 1) : endpoint;
    return endpoint;
}
export function swalError(message, title = 'Error!') {
    Swal.fire({
        title: title,
        text: message,
        icon: 'error',
        confirmButtonText: 'OK',
    });
}
