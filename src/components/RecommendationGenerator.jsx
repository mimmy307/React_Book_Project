function RecommendationGenerator(){

    // 1. User needs to be able to select a mood
    // 2.1 Make a request to BE to get all the books with that mood - `/books?mood=${mood}`
    // 2.2 Get the length of the response (amount of books that match the mood)
    // 2.3. Generate random nubmer that is 1 - amount of books
    // 3. Make anohter request to BE for a book with that book id - `/books/${id}?mood=${mood}`

}

export default RecommendationGenerator