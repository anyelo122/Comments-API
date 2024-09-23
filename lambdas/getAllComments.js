const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const params = {
        TableName: 'Comments'
    };

    try {
        const result = await dynamo.scan(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(result.Items)
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Err to get all comments', details: err.message })
        };
    }
};
