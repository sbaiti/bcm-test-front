import { fork, all, call, take } from 'redux-saga/effects'

import fligths from './flights'

export const takeFirst = (pattern, saga, ...args) =>
    fork(function* first() {
        while (true) {
            const action = yield take(pattern)
            yield call(saga, ...args.concat(action))
        }
    })

const sagas = [
    ...fligths
]

function* globalSagas() {
    const globalSagasForks = sagas.map(saga => fork(saga))
    yield all([...globalSagasForks])
}

export default globalSagas