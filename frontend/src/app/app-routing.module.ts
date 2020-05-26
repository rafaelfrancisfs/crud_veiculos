import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { VeiculoCrudComponent } from "./views/veiculo-crud/veiculo-crud.component";
import { VeiculoCreateComponent } from "./components/veiculos/veiculo-create/veiculo-create.component";
import { VeiculoUpdateComponent } from "./components/veiculos/veiculo-update/veiculo-update.component";
import { VeiculoDeleteComponent } from "./components/veiculos/veiculo-delete/veiculo-delete.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "veiculos",
    component: VeiculoCrudComponent,
  },
  {
    path: "veiculos/create",
    component: VeiculoCreateComponent,
  },
  {
    path: "veiculos/update/:id",
    component: VeiculoUpdateComponent,
  },
  {
    path: "veiculos/delete/:id",
    component: VeiculoDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
