import { FlashCard } from '../FlashCards/FlashCard.js';

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
});