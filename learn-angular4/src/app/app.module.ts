import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

import { SignInComponent } from './sign-in.component';
import { RoundPipe } from './round.pipe';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HeroesComponent } from './heroes/heroes.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { CardComponent } from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
// import { IpComponent } from './ip.component';
// import { IpService } from './ip.service';
import { SignUpComponent } from './sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    HeroesComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
    SignInComponent,
    // IpComponent,
    // IpService,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
