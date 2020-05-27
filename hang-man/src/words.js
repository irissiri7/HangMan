const generateRandomWord = () => {
    const randomWords = ["katt", "skruvmejsel", "vitkål", "termos", "glasögon"];
    // const randomWords = ["katt"];
    const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    return randomWord;
}

export default generateRandomWord;