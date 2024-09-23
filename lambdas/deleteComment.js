const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { commentId } = event.pathParameters;

    const params = {
        TableName: 'Comments',
        Key: { commentId: commentId }
    };

    try {
        await dynamo.delete(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Comment deleted sucessfully' })
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Err deleting comment', details: err.message })
        };
    }
};
