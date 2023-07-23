import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import * as OpenApiValidator from 'express-openapi-validator';
import expenseRoutes from './routes/expenseRoutes';
import { readFileSync } from 'fs';

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());

// Error handling middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

// Use the expense routes
app.use(expenseRoutes);

// Set up OpenAPI documentation
const apiSpec = readFileSync('openapi.json', 'utf8');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(JSON.parse(apiSpec)));

// Validate requests against the OpenAPI specification
app.use(
    OpenApiValidator.middleware({
    apiSpec,
    validateRequests: true,
    validateResponses: true,
  }),
);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
