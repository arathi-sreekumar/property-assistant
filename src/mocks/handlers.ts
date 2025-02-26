import { http, HttpResponse } from 'msw';

const getReplyMessage = (question: string) => {
    switch (question) {
        case 'help':
            return 'This is a helpful response'
        case 'test':
            return 'This is a test response'
        case 'blah':
            return 'aha ha blah blah blah'
        default:
            return 'This is a sample response'
    }
}

type TestRequestBodyType = {
    question: string
}

const handlers = [
    // Intercepts the request "GET /api/property".
    http.post('/api/property', async ({ request }) => {
        const body = await request.json() as TestRequestBodyType
        
        // Create a response with JSON using HttpResponse
        return HttpResponse.json({
            message: getReplyMessage(body?.question as string)
        });
    }),
];

export default handlers;