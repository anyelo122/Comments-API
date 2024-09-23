import json
import boto3

s3 = boto3.client('s3')

def lambda_handler(event, context):
    bucket_name = 'your-bucket-s3'
    key = f'comments/{event["commentId"]}.json'
    data = {
        'commentId': event['commentId'],
        'content': event['content'],
        'timestamp': event['timestamp']
    }

    try:
        s3.put_object(Bucket=bucket_name, Key=key, Body=json.dumps(data))
        return {
            'statusCode': 200,
            'body': json.dumps('comment saved in s3 succesfully')
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f'Error to save in s3: {str(e)}')
        }
