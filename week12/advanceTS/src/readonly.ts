// read only makes a specific property inside a types as read-only and nobody can then change the value of these properties.
interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: 'https://localhost:3000',
    apiKey: 'aryan@381'
}

// config.apiKey = 'hello' -> not allowed