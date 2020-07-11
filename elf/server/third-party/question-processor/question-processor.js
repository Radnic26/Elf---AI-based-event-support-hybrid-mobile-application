const { NerManager } = require('node-nlp')

class QuestionProcessor {
    constructor(lang){
        this.lang = lang
        this.manager = new NerManager({ threshold: 0.8 })
    }

    train(samples){
        for (let s of samples){
            this.manager.addNamedEntityText(s.category, s.subcategory, [this.lang], s.examples)
        }
    }
 
    async processQuestion(question){
        try{
            let entities = await this.manager.findEntities(question, this.lang)
            return entities
        }
        catch(err){
            throw err
        }
    }
} 

module.exports = QuestionProcessor