import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HomeComponent } from "./views/home/home.component";
import { VeiculoCrudComponent } from "./views/veiculo-crud/veiculo-crud.component";
import { VeiculoCreateComponent } from "./components/veiculos/veiculo-create/veiculo-create.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { VeiculoReadComponent } from './components/veiculos/veiculo-read/veiculo-read.component';
import { ForDirective } from './directives/for.directive';
import { VeiculoRead2Component } from './componentes/veiculos/veiculo-read2/veiculo-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { VeiculoUpdateComponent } from './components/veiculos/veiculo-update/veiculo-update.component';
import { VeiculoDeleteComponent } from './components/veiculos/veiculo-delete/veiculo-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    VeiculoCrudComponent,
    VeiculoCreateComponent,
    VeiculoReadComponent,
    ForDirective,
    VeiculoRead2Component,
    VeiculoUpdateComponent,
    VeiculoDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
