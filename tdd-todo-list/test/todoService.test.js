const { describe, it, before, afterEach, } = require('mocha')
const { expect } = require('chai')
const TodoService = require('../src/todoService')
const { createSandbox, fake } = require('sinon')
const Todo = require('../src/todo')

describe('Todo Service Suite de teste', () => {
    let sandbox
    before(() => {
        sandbox = createSandbox()
    })
    afterEach(() => sandbox.restore())

    describe('#Lista é válida, caso.:', () => {
        const mockDatabase = [
            {
                name: 'XuxaDaSilva',
                age: 90,
                meta: { revision: 0, created: 1611185653507, version: 0 },
                '$loki': 1
            },
        ]

        let todoService
        beforeEach(() => {
            const dependencies = {
                todoRepository: {
                    list: sandbox.stub().returns(mockDatabase)
                }
            }

            todoService = new TodoService(dependencies)
        })
        it('Retornar dados em um formato específico', () => {
            const result = todoService.list()
            const [{ meta, $loki, ...expected }] = mockDatabase
            expect(result).to.be.deep.equal([expected])

        })

    })

    describe('#Adicionar, a lista é válido caso.:', () => {
        let todoService
        beforeEach(() => {
            const dependencies = {
                todoRepository: {
                    create: sandbox.stub().returns(true)
                }
            }

            todoService = new TodoService(dependencies)
        })

        it('Não salva o item de tarefas com dados inválidos', () => {
            const data = new Todo({
                text: '',
                when: ''
            })
            Reflect.deleteProperty(data, "id")
            const expected = { 
                error: {
                    message: 'invalid data',
                    data: data
                }
            }
            const result = todoService.create(data)
            expect(result).to.be.deep.equal(expected)

        })

        it('Deve salvar o item de tarefas com status "late" quando a propriedade está mais longe do que hoje', () => {
                const properties = { 
                    text: 'I must walk my dog',
                    when: new Date("2020-12-01 12:00:00 GMT-0")
                }
                const expectedId = '000001'
                
                const uuid = require('uuid') 
                const fakeUUID = sandbox.fake.returns(expectedId)
                sandbox.replace(uuid, "v4", fakeUUID)
                
                const data = new Todo(properties)
                
                const today = new Date("2020-12-02")
                sandbox.useFakeTimers(today.getTime())

                todoService.create(data)

                const expectedCallWith = {
                    ...data,
                    status: "late"
                }

                expect(todoService.todoRepository.create.calledOnceWithExactly(expectedCallWith)).to.be.ok
        })

        it('Deve salvar o item de tarefas com status "pending"', () => {
            const properties = { 
                text: 'I must walk my dog',
                when: new Date("2020-12-10 12:00:00 GMT-0")
            }
            const expectedId = '000001'
            
            const uuid = require('uuid') 
            const fakeUUID = sandbox.fake.returns(expectedId)
            sandbox.replace(uuid, "v4", fakeUUID)
            
            const data = new Todo(properties)
            
            const today = new Date("2020-12-02")
            sandbox.useFakeTimers(today.getTime())

            todoService.create(data)

            const expectedCallWith = {
                ...data,
                status: "pending"
            }

            expect(todoService.todoRepository.create.calledOnceWithExactly(expectedCallWith)).to.be.ok
    })
    })
})