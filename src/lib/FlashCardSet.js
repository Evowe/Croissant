class FlashCardSet
{
    get title() {
        return this.title;
    }
    set title(value) {
        this.title = value;
    }
    get description() {
        return this.description;
    }
    set description(value) {
        this.description = value;
    }
    get flashcards() {
        return this.flashcards;
    }
    set flashcards(value) {
        this.flashcards = value;
    }
    get currentIndex() {
        return this.currentIndex;
    }
    set currentIndex(value) {
        this.currentIndex = value;
    }


    constructor(title, description, flashcards) {
        this.title = title;
        this.description = description;
        this.flashcards = flashcards;
        this.currentIndex =0;
    }

    addFlashCard(flashcard) {
        this.flashcards.push(flashcard);
    }
    removeFlashCard(index) {
        this.flashcards.splice(index, 1);
    }
    getFlashCard(index) {
        return this.flashcards[index];
    }
    getNextFlashCard() {
        this.currentIndex++;
        return this.getFlashCard()
    }
    getPreviousFlashCard() {
        this.currentIndex--;
        return this.getFlashCard()
    }

}