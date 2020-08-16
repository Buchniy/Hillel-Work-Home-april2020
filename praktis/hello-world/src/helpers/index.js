export const $http = async function(url, payload) {
    const respnose = await fetch(url, payload);
    const data = await respnose.json();

    return data;
}