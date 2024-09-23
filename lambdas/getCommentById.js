const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { commentId } = event.pathParameters;

    const params = {
        TableName: 'Comments',
        Key: { commentId: commentId }
    };

    try {
        const result = await dynamo.get(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(result.Item || { message: 'Comment not found' })
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error to get one comment by id', details: err.message })
        };
    }
};
