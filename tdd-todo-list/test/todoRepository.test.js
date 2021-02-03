const { describe, it, before, afterEach, } = require('mocha')
const {  expect } = require('chai')
const TodoRepository = require('../src/todoRepository')
const {  createSandbox } = require('sinon')

describe('Todo Repository Suite de teste', () => {
    let todoRepository
    let sandbox
    before(() => {
        todoRepository = new TodoRepository()
        sandbox = createSandbox()
    })

    afterEach(() => {
        sandbox.restore()
    })

    describe('#È válido, caso a assinatura de métodos faça.:', () => {
        it('Chamar "find" do lokijs', () => {
            const mockDatabase = [
                {
                    name: 'XuxaDaSilva',
                    age: 90,
                    meta: { revision: 0, created: 1611185653507, version: 0 },
                    '$loki': 1
                }, 
            ]
            
            const functionName = "find" 
            const expectedReturn = mockDatabase
            sandbox.stub(
                todoRepository.schedule,
                functionName
            ).returns(expectedReturn)

            const result = todoRepository.list()
            expect(result).to.be.deep.equal(expectedReturn)
            expect(todoRepository.schedule[functionName].calledOnce).to.be.ok

        })

        it('Chamar "insert One" do lokijs', () => {
            const functionName = "insertOne" 
            const expectedReturn = true

            sandbox.stub(
                todoRepository.schedule,
                functionName
            ).returns(expectedReturn)

            const data = { name: 'Erick' }

            const result = todoRepository.create(data)

            expect(result).to.be.ok
            expect(todoRepository.schedule[functionName].calledOnceWithExactly(data)).to.be.ok
        })
    })
})
