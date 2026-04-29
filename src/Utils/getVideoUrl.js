import { apiInstance } from "./apiInstance"

export const getVideoUrl  = async ({movide_id}) =>{
    const url = await apiInstance.get(`${import.meta.env.VITE_BASE_URL_TMDB}movie/${movide_id}/videos`)
    // console.log(url)
    return url.data.results[0].key
}