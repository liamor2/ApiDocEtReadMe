import path from "path";
 
export const swaggerOptions = {
    swaggerDefinition: {
        alcoolAPI: '1.0.0',
        info: {
            title: 'API Alcools',
            version: '1.0.0',
            description : 'Documentation de l\'API Alcools',
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "serveur local"
            }
        ]
    },
    apis: [path.resolve(__dirname, './controllers/*.ts')],
}