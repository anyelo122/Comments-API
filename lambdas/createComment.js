const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { commentId, content, author } = JSON.parse(event.body);
    const timestamp = new Date().toISOString();

    const params = {
        TableName: 'Comments',
        Item: {
            commentId: commentId, 
            content: content,    
            author: author,      
            timestamp: timestamp  
        }
    };

    try {
        await dynamo.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Comment created sucessfully' })
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Err creating comment', details: err.message })
        };
    }
};
