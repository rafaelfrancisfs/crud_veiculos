import { Router, ActivatedRoute } from "@angular/router";
import { VeiculoService } from "./../veiculo.service";
import { Component, OnInit } from "@angular/core";
import { Veiculo } from "../veiculo.model";

@Component({
  selector: "app-veiculo-delete",
  templateUrl: "./veiculo-delete.component.html",
  styleUrls: ["./veiculo-delete.component.css"],
})
export class VeiculoDeleteComponent implements OnInit {
  veiculo: Veiculo;
  constructor(
    private veiculoService: VeiculoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.veiculoService.readId(id).subscribe((veiculo) => {
      this.veiculo = veiculo;
    });
  }

  deleteVeiculo(): void {
    this.veiculoService.delete(this.veiculo.id).subscribe(() => {
      this.veiculoService.showMessage("Veículo removido com sucesso!");
      this.router.navigate(["/veiculos"]);
    });
  }
  cancel(): void {
    this.router.navigate(["/veiculos"]);
  }
}
