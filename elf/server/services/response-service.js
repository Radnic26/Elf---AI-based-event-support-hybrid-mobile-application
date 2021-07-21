const conceptsMap = require('../third-party/assets/json/concepts-map.json')
const knowledgeBase = require('../third-party/assets/json/knowledge-base.json')
const QuestionProcessor  = require('../third-party/question-processor/question-processor')

const proposeSolution = async (question) => {
    let qp = new QuestionProcessor('ro')
    qp.train(conceptsMap)
    let entities = await qp.processQuestion(question)
    let searchKey = entities.map((e) => {
        return {
            category : e.entity,
            subcategory : e.option
        }
    })
    let candidates = knowledgeBase.filter((e) => isKeyEqual(searchKey, e.key))
    if (candidates.length < 2) {
        return candidates[0]
    }
    else {
        return JSON.stringify('Nu am inteles intrebarea.')
    }
}
    
const isKeyEqual = (search, target) => {
    let isEqual = true
    for (let item of search){
        let targetIndex = target.entities.findIndex((e) => e.category === item.category && e.subcategory === item.subcategory)
        if (targetIndex === -1){
            isEqual = false
        }
    }
    return isEqual
}

// async function testme(){
//     let response = await proposeSolution('Buna ziua, roata de la masinuta se invarte aiurea, ce sa fac?', knowledgeBase)
//     let response2 = await proposeSolution('Robotul nu urmareste linia', knowledgeBase)
//     let response3 = await proposeSolution('ce faci ma?', knowledgeBase)

//     console.log(response2)
// }

// testme()

module.exports = {
    proposeSolution
}