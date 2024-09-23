const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { commentId, content, author } = JSON.parse(event.body);

    const params = {
        TableName: 'Comments',
        Key: { commentId: commentId },
        UpdateExpression: 'set content = :c, author = :a',
        ExpressionAttributeValues: {
            ':c': content,
            ':a': author
        },
        ReturnValues: 'UPDATED_NEW'
    };

    try {
        const result = await dynamo.update(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Comment updated', updatedAttributes: result.Attributes })
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error updating the comment', details: err.message })
        };
    }
};
