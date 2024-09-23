# Comments API

## Overview

This serverless API allows for the management of comments on a web page using AWS services such as Lambda, API Gateway, and DynamoDB.

## Features

- **CRUD Operations**: Create, retrieve, update, and delete comments.
- **Serverless Architecture**: Utilizes AWS Lambda for scalable serverless functions.
- **API Gateway**: Exposes a RESTful interface for easy access.

## API Endpoints

- **POST /comments**: Create a new comment
- **GET /comments**: Retrieve all comments
- **GET /comments/{id}**: Retrieve a comment by its ID
- **PUT /comments/{id}**: Update a comment by its ID
- **DELETE /comments/{id}**: Delete a comment by its ID


## Deployment

1. **Create S3 Bucket**: Create an S3 bucket to store your Lambda code.
   
```bash
   aws s3 mb s3://your-bucket-name
```

2. **Upload Lambda Code:**

```bash
aws s3 cp ./lambda/ s3://your-bucket-name/lambda/ --recursive
```

3. **Deploy the CloudFormation Stack:**

```bash
aws cloudformation deploy \
  --template-file template.yaml \
  --stack-name CommentsAPIStack \
  --capabilities CAPABILITY_NAMED_IAM
 ```