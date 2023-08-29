export const fetchData = async (endpoint: string) => {
    const response = await fetch(`https://back-web01.fragnet.net/api/v1${endpoint}`);
    const data = await response.json();
    console.log(data);
    return data.data;
};

export const fetchLocations = async () => {
    const response = await fetch(`https://back-web01.fragnet.net/api/v1/locations`);
    const data = await response.json();
    return data.data;
}

export const fetchGameBySlug = async (slug: string | undefined) => {
    const response = await fetch(`https://back-web01.fragnet.net/api/v1/games/${slug}`);
    const data = await response.json();
    return data.data;
}

export const fetchReviews = async () => {
    const response = await fetch(`https://back-web01.fragnet.net/api/v1/reviews`);
    const data = await response.json();
    return data.data;
}