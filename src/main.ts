import { provideHttpClient } from '@angular/common/http';
import { enableProdMode, isDevMode } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AppComponent } from './app/app.component';
import { BooksEffects } from './app/store/effects/book.effects';
import { BookReducer } from './app/store/reducer/book.reducer';
import { CollectionReducer } from './app/store/reducer/collection.reducer';
import { environment } from './environments/environment';

if(environment.production) {
  enableProdMode();
}

bootstrapApplication(
  AppComponent,
  {
    providers: [
      BrowserModule,
      provideHttpClient(),
      provideStore(
        {
          books: BookReducer,
          collection: CollectionReducer
        }
      ),
      provideEffects(BooksEffects),
      provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: true,
        trace: false,
        traceLimit: 75
      }),
    ]
  }
).catch(err => console.error(err));
