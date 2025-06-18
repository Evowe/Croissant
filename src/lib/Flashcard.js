export class FlashCard
{
    constructor(term, definition, description)
    {
        this.term = term;
        this.definition = definition;
        this.description = description;
    }
    display()
    {
        console.log('Product: ' + this.term);
        console.log('Definition: ' + this.definition);
        console.log('Description: ' + this.description);
    }
    setDescription(description) {
        this.description = description;
    }
    setDefinition(definition) {
        this.definition = definition;
    }
    setTerm(term) {
        this.term = term;
    }
    getTerm(){
        return this.term;
    }
    getDefinition() {
        return this.definition;
    }
    getDescription() {
        return this.description;
    }

}