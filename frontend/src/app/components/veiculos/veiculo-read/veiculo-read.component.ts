import { VeiculoService } from "./../veiculo.service";
import { Veiculo } from "./../veiculo.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-veiculo-read",
  templateUrl: "./veiculo-read.component.html",
  styleUrls: ["./veiculo-read.component.css"],
})
export class VeiculoReadComponent implements OnInit {
  veiculos: Veiculo[];
  displayedColumns = [
    "id",
    "placa",
    "chassi",
    "renavam",
    "modelo",
    "marca",
    "ano",
    "action",
  ];

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.veiculoService.read().subscribe((veiculos) => {
      this.veiculos = veiculos;
      // console.log(veiculos);
    });
  }
}
