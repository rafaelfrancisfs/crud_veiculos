import { Veiculo } from "./../veiculo.model";
import { VeiculoService } from "./../veiculo.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-veiculo-create",
  templateUrl: "./veiculo-create.component.html",
  styleUrls: ["./veiculo-create.component.css"],
})
export class VeiculoCreateComponent implements OnInit {
  veiculo: Veiculo = {
    placa: null,
    chassi: null,
    renavam: null,
    modelo: null,
    marca: null,
    ano: null,
  };
  constructor(private veiculoService: VeiculoService, private router: Router) {}

  ngOnInit(): void {}

  createVeiculo(): void {
    this.veiculoService.create(this.veiculo).subscribe(() => {
      this.veiculoService.showMessage("Cadastro realizado com sucesso!");
      this.router.navigate(["/veiculos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/veiculos"]);
  }
}
