export function GetbyText(id){
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${id}`)
        .then((resp) => resp.json())
}

export function GetbyId(id){
    return fetch(`https://api.mercadolibre.com/items/${id}`)
        .then((resp) => resp.json())
}

export function GetDesciption(id){
    return fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then((resp) => resp.json())
}