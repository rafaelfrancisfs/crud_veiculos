import { Veiculo } from "./../veiculo.model";
import { Router, ActivatedRoute } from "@angular/router";
import { VeiculoService } from "./../veiculo.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-veiculo-update",
  templateUrl: "./veiculo-update.component.html",
  styleUrls: ["./veiculo-update.component.css"],
})
export class VeiculoUpdateComponent implements OnInit {
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

  updateVeiculo(): void {
    this.veiculoService.update(this.veiculo).subscribe(() => {
      this.veiculoService.showMessage("Atualizado com sucesso!");
      this.router.navigate(["/veiculos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/veiculos"]);
  }
}
