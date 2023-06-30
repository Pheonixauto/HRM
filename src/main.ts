import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as moment from 'moment';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
