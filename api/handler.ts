import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';

export const hello: Handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless! Your function executed successfully!',
                input: event
            },
            null,
            2
        )
    };

    return Promise.resolve(response);
};
