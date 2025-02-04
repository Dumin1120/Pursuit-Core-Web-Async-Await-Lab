document.addEventListener("DOMContentLoaded", deckAPI)
async function deckAPI(){
    const deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    deckId = deck.data.deck_id
    const button = document.querySelector("button")
    button.addEventListener("click", getCards)
    async function getCards(){
        const div = document.querySelector("div")
        div.innerHTML = ""
        const numOfCards = document.querySelector("select").value
        const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`)
        for(const card of response.data.cards){
            const img = document.createElement("img")
            img.className = "card"
            img.src = card.image
            div.appendChild(img)
        }
        const cardRemain = document.querySelector("#card-remain")
        cardRemain.textContent = response.data.remaining
    }
}