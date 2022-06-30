function getComponentFromText(component: string) {
    return eval(component + 'Component')
}

function getModelKeyValue(data: []) {
    if (Array.isArray(data)) {
        return data.filter(x => x.key == 'id' || x.key == 'uuid')[0].value
    } else if (typeof data === 'object') {
        return data?.id || data?.uuid
    }

}

export {
    getComponentFromText,
    getModelKeyValue
}