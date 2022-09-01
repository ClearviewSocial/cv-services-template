import { describe, expect, test } from '@jest/globals';
import { APIGatewayProxyResult } from 'aws-lambda';
import { hello } from '../../api/handler';

describe('hello function', () => {
    test('it says hello', async () => {
        const event = { key: 'value' };
        const context = {};
        const response = (await hello(event, context)) as APIGatewayProxyResult;
        expect(response).toEqual({
            statusCode: 200,
            body: JSON.stringify(
                {
                    message: 'Go Serverless! Your function executed successfully!',
                    input: event
                },
                null,
                2
            )
        });
    });
});
