const AWS = require('aws-sdk');
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });

exports.handler = async (event, callback) => {

    const confirmationCode = event.queryStringParameters.code;
    const username = event.queryStringParameters.username;
    const clientId = event.queryStringParameters.clientId;
    // const region = event.queryStringParameters.region;
    // const email = event.queryStringParameters.email;

    const params = {
        ClientId: clientId,
        ConfirmationCode: confirmationCode,
        Username: username,
    }

    console.log(params)
    let response = {}; 

    await cognitoIdentityServiceProvider.confirmSignUp(params).promise()
        .then(
            (data) => {
                // const redirectUrl = 'https://www.tradestation.com/';
                const redirectUrl = 'http://signup-signin-with-redirect-dev.s3-website.us-east-2.amazonaws.com/signin';
                response = {
                    isBase64Encoded: false,
                    statusCode: 301,
                    headers: {
                        Location: redirectUrl,
                    },
                    body: JSON.stringify('User is confirmed'),
                };
                console.log(response);
                return response;
            }
        ).catch(
            (error) => {
                response = {
                    isBase64Encoded: false,
                    statusCode: 500,
                    headers: {},
                    body: JSON.stringify(error),
                };
                console.log(response);
                return response
            }
        )
        console.log('end');
    return response;
};
