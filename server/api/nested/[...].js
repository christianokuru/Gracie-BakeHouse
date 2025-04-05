// Creating a basic Nested API Routes

const router = createRouter()

router.get('/product', defineEventHandler((event) => {
    return 'Test nested route'
}))

router.get('/product/category', defineEventHandler((event) => {
    return {
        id: 1,
        prodcutName: 'Banana Bread',
        category: 'Breads',
    }
}))

router.post('/product', defineEventHandler((event) => {
    return 'post nested route'
}))

router.put('/product', defineEventHandler((event) => {
    return 'put nested route'
}))

router.delete('/product', defineEventHandler((event) => {
    return 'Yup!! it has been deleted'
}))


export default useBase('/api/nested', router.handler)