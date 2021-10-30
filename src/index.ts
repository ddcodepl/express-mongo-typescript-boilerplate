import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

/**
 * Configs
 */
import dbConfig from './configs/db';

/**
 * Routes
 */

dotenv.config();
dbConfig();

const app = express();
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(bodyParser.json());

// Headers config
app.use((req: Request, res: Response, next: NextFunction): void => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

// Startup server
app.set('port', process.env.APP_PORT || 9999);
app.listen(app.get('port'), () => {
    console.log(`App is running at port: ${app.get('port')}`);
});

/**
 * Add routes to the system
 *
 * Example: app.use('/news', news())
 */
//

/**
 * Static directories
 *
 * app.use('/images', express.static('./images'))
 */
