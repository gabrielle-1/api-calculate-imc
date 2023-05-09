# API Calculate IMC

This project is a simple API to calculate the IMC (Body Mass Index) using Node.js.

## Method

This API has only one method, which is a `POST` request to the endpoint `/imc`.

### Request Parameters

The `POST` request expects the following parameters in the request body:

- `weight` (number): The weight of the person in kilograms (kg).
- `height` (number): The height of the person in meters (m).

### Response

The API returns the IMC value as a number rounded to two decimal places in the response body.

## Getting Started

To use this API, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the server by running `npm start`.
4. Send a `POST` request to `http://localhost:3000/imc` with the `weight` and `height` parameters in the request body.

## Example Request

POST /imc HTTP/1.1
Host: [localhost:21262/calculate](https://calculate-imc-api-git-main-gabrielle-1.vercel.app/calculate)
Content-Type: application/json

{
  "weight": 70,
  "height": 1.75
}

## Example Response

{
  "bmi": 244898,
  "interpretation": {
    "status": "Obesidade",
    "message": "Você está com obesidade. É importante que você perca peso para reduzir o risco de problemas de saúde."
  }
}


## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
