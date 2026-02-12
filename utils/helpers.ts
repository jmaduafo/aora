export function createSlug(text: string) {

    return text.split(" ").join("-").toLowerCase()
}

export function deSlug(text: string) {

    return text.split("-").join(" ").toLowerCase()
}

export function checkForS(num: number) {
    return num !== 1 ? "s" : ""
}