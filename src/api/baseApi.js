const ENDPOINT = "https://dev-brand.api.vaultik.com/";

export const apiGet = async (subUrl, param) => {
    const result = await fetch(
        ENDPOINT + subUrl,
        {
            method: "GET",
            header: {},
        }
    );

    return await result.json();
};

export const apiPost = async (subUrl, bodyParams) => {
    
}