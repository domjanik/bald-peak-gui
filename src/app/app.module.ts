import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const config: SocketIoConfig = { url: "http://localhost:3000", options: {} };

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { CreatureComponent } from "./creature/creature.component";
import { CreaturePanelComponent } from "./creature-panel/creature-panel.component";
import { TestPageComponent } from "./test-page/test-page.component";
import { HomeComponent } from "./home/home.component";
import { TestPipePipe } from "./test-pipe.pipe";
import { ChildWithParamComponent } from "./test-page/child-with-param/child-with-param.component";
import { ChildWithNoParamComponent } from "./test-page/child-with-no-param/child-with-no-param.component";
import { CreatureInventoryComponent } from "./creature-inventory/creature-inventory.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { AnimationsComponent } from './playground/animations/animations.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    HomeComponent,
    TestPipePipe,
    ChildWithParamComponent,
    ChildWithNoParamComponent,
    NavigationComponent,
    CreatureComponent,
    CreaturePanelComponent,
    CreatureInventoryComponent,
    PlaygroundComponent,
    AnimationsComponent,
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
