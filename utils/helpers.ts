export function createSlug(text: string) {

    return text.split(" ").join("-").toLowerCase()
}

export function deSlug(text: string) {

    return text.split("-").join(" ").toLowerCase()
}

export function checkForS(num: number) {
    return num !== 1 ? "s" : ""
}

export function cartSum(cart: number[]) {
    let total = 0

    cart.forEach(num => {
        total += num
    })

    return total
}