import axios from "axios"

const getRandomWord = async () => {
    const {data: word} = await axios.get("https://random-word-api.herokuapp.com/word?number=1&swear=1")
    return word[0]
}

export default getRandomWord
