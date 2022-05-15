![papi](https://user-images.githubusercontent.com/53608787/168490641-51372daa-691d-44b7-9665-98d09375b519.svg)

Papi (short for Password API) is a simple API developed with Express that generates passwords of the pattern `^[a-zA-Z0-9]+$` using the [Fisher-Yates shuffle algorithm](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle). The current version is available on [Heroku](https://papi-generator.herokuapp.com/api) for —responsible— public use. There is a rate limit of **100 requests per hour**.

The single endpoint available is `/api` with an optional query parameter `length` for specifying the length of the desired password, as seen below:

![example](https://user-images.githubusercontent.com/53608787/168491148-871fb269-d736-43af-b664-a3050705e49a.svg)
