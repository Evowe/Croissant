import { FlashCard } from '../lib/Flashcard.js';

describe('FlashCard', () => {
    let card;

    beforeEach(() => {
        card = new FlashCard('Nathan', 'is a bum', 'You understand');
    });

    test('should get the term', () => {
        expect(card.getTerm()).toEqual('Nathan');
    });

    test('should get the definition', () => {
        expect(card.getDefinition()).toEqual('is a bum');
    });

    test('should get the description', () => {
        expect(card.getDescription()).toEqual('You understand');
    });
    test("set descritpion" , () => {
        card.setDescription("test");
        expect(card.getDescription()).toEqual("test");
    })
    // setDefinition(definition) {
    //     this.definition = definition;
    // }
    // setTerm(term) {
    //     this.term = term;
    // }
    // getTerm(){
    //     return this.term;
    // }
    // getDefinition() {
    //     return this.definition;
    // }
    // getDescription() {
    //     return this.description;
    // }
});